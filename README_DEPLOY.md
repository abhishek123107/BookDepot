Automate setting secrets (convenience script)
I've added a small PowerShell helper script `scripts/set_github_secrets.ps1` that interactively prompts for the values and calls `gh secret set` for you. It requires the GitHub CLI (`gh`) installed and authenticated with an account that has repo admin permissions.

Usage (from repository root):

```powershell
pwsh .\scripts\set_github_secrets.ps1
```

The script will prompt for the values you want to set (leave blank to skip a secret).
How to add secrets with gh CLI (PowerShell)
(Requires GitHub CLI installed and logged in: gh auth login)

```powershell
# replace placeholders with real values
$BACKEND_API_URL = 'https://bookdepot-backend.onrender.com/api'
$RENDER_API_KEY = 'render_api_key_value_here'
$RENDER_SERVICE_ID = 'srv-xxxxxxxxxxxxxxxxxxxxx'
$RENDER_SERVICE_URL = 'https://bookdepot-backend.onrender.com'

gh secret set BACKEND_API_URL --body $BACKEND_API_URL
gh secret set RENDER_API_KEY --body $RENDER_API_KEY
gh secret set RENDER_SERVICE_ID --body $RENDER_SERVICE_ID
gh secret set RENDER_SERVICE_URL --body $RENDER_SERVICE_URL
```

Deploying the Django backend (suggested: Render.com)

Overview

- This project uses Django + mongoengine to talk to MongoDB.
- The frontend (Angular) is served separately (GitHub Pages currently). GitHub Pages cannot run Django.

Quick steps for Render (recommended)

1. Create a Render account and connect your GitHub repository.
2. Create a new "Web Service" and point it to this repository branch (`main`).
   - Build Command: `pip install -r requirements.txt && python manage.py collectstatic --noinput`
   - Start Command: `gunicorn project.wsgi --bind 0.0.0.0:$PORT`
3. Set environment variables in Render's dashboard:
   - `DJANGO_SECRET_KEY` = <your secret key>
   - `DJANGO_DEBUG` = `False`
   - `DJANGO_ALLOWED_HOSTS` = `yourdomain.com,server-render-id.onrender.com`
   - `MONGO_URI` = `<mongodb connection string>` (use MongoDB Atlas)
   - `CORS_ALLOW_ALL` = `False` (or `True` for quick testing)
   - `CORS_ALLOWED_ORIGINS` = `https://your-frontend-domain` (comma separated)
   - Optionally `CUSTOM_CA_PATH` if you need a custom CA for outbound TLS
4. Provision MongoDB Atlas and allow the Render IPs or set network access appropriately; get the connection URI and set it in `MONGO_URI`.
5. Deploy. If `collectstatic` runs successfully and `gunicorn` starts, your backend will be accessible at the Render URL.

Local testing

- Set env vars locally (PowerShell example):
  $env:DJANGO_DEBUG = 'True'; $env:MONGO_URI='mongodb://localhost:27017/customer_db'
  python manage.py runserver

Notes

- GitHub Pages only serves static content. To run backend services you need a server platform like Render, Railway, Fly.io, DigitalOcean or AWS.
- After deploying the backend, update the frontend `Frontend/src/environments/environment.prod.ts` to point `apiUrl` to the deployed backend URL and redeploy the frontend.
- After deploying the backend, update the frontend `Frontend/src/environments/environment.prod.ts` to point `apiUrl` to the deployed backend URL and redeploy the frontend.

Frontend production steps (quick)

1. Update `Frontend/src/environments/environment.prod.ts` with your deployed backend API URL, for example:

```ts
export const environment = {
  production: true,
  apiUrl: "https://api.yourdomain.com/api",
};
```

2. Build the Angular app for production and deploy (example: GitHub Pages via `angular-cli-ghpages` already in package.json):

```powershell
cd Frontend
npm install
npm run build -- --configuration production
npm run deploy   # this runs `npx angular-cli-ghpages --dir=dist/folder/browser` from package.json
```

Notes about SSR / server-side rendering

- If you use Angular SSR (server-side rendering) you cannot deploy the server bundle to GitHub Pages. In that case host the frontend server on a server provider (Render/Heroku/Fly) and point DNS accordingly.

Render automation (optional)

- A `render.yaml` manifest was added to the repo. You can use it to create the service declaratively on Render by uploading it in the Render dashboard or using the Render CLI.

Automating backend deploys from GitHub (Render)

I added a GitHub Actions workflow `.github/workflows/deploy-backend-render.yml` that triggers a Render deploy via the Render API whenever you push to `main`.

What you must add in GitHub repository secrets before the workflow will succeed:

- `RENDER_API_KEY` — Create an API Key in Render (Account → API Keys → New API Key). Use an account or service key that has permission to deploy the service.
- `RENDER_SERVICE_ID` — The Render Service ID for your backend service (found on the Render service Dashboard under Settings → Service ID, or in the service URL).
- `RENDER_SERVICE_ID` — The Render Service ID for your backend service (found on the Render service Dashboard under Settings → Service ID, or in the service URL).
- `RENDER_SERVICE_URL` — (optional but recommended) The public URL of your Render service (used by the workflow to run a post-deploy smoke test), e.g. `https://bookdepot-backend.onrender.com`.

How it works:

1. On push to `main`, the workflow calls Render's API to create a deploy for your service.
2. The workflow polls Render until the deploy succeeds or fails (timeout ~15 minutes).

Security notes:

- Keep `RENDER_API_KEY` secret. Do not commit it to the repo.
- The workflow only creates a deploy; you still control environment variables in Render's dashboard (secrets like `MONGO_URI` remain stored on Render).

If you'd like, I can also create a small template you can run locally to create the Render service (if you prefer to automate service creation as well), but service creation typically requires manual confirmation of build/runtime settings and the initial environment variable setup.

GitHub Actions automated frontend deploy

I added a GitHub Actions workflow that builds the Angular production bundle and deploys it to the `gh-pages` branch. It will also inject your backend URL at build time using a repository secret named `BACKEND_API_URL`.

How to configure:

1. In your GitHub repository settings -> Secrets -> Actions, add a new secret named `BACKEND_API_URL` with the value of your deployed backend API, for example `https://api.yourdomain.com/api`.
2. The workflow runs on every push to `main`. It will fail early if `BACKEND_API_URL` is not set.
3. The workflow file is: `.github/workflows/deploy-frontend.yml` (committed to this repo).

If you prefer another deployment method (Netlify, Vercel, Render static sites), tell me and I can add a workflow for that instead.
