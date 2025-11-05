<#
Non-interactive script to set GitHub Actions repository secrets using gh CLI.

Usage (PowerShell):
1) Install GitHub CLI and authenticate: `gh auth login`.
2) Option A - environment variables (recommended for automation):
   $env:GH_REPO = 'owner/repo'
   $env:BACKEND_API_URL = 'https://your-backend.example.com/api'
   $env:RENDER_API_KEY = 'render_api_key_value'
   $env:RENDER_SERVICE_ID = 'srv-xxxxxx'
   $env:RENDER_SERVICE_URL = 'https://your-service.onrender.com'
   pwsh .\scripts\set_github_secrets_noninteractive.ps1

3) Option B - JSON file input:
   pwsh .\scripts\set_github_secrets_noninteractive.ps1 -InputFile secrets.json
   where secrets.json content example:
   {
     "repo": "owner/repo",
     "BACKEND_API_URL": "https://your-backend.example.com/api",
     "RENDER_API_KEY": "render_api_key_value",
     "RENDER_SERVICE_ID": "srv-xxxx",
     "RENDER_SERVICE_URL": "https://your-service.onrender.com"
   }

Notes:
- This script requires `gh` CLI installed and authenticated with an account that has admin permissions on the repo.
- Secrets set by this script are encrypted and stored in GitHub Secrets.
#>

param(
    [string]$InputFile
)

function Fail($msg) {
    Write-Error $msg
    exit 1
}

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    Fail "gh CLI not found. Install from https://cli.github.com/ and run 'gh auth login' first."
}

$values = @{}

if ($InputFile) {
    if (-not (Test-Path $InputFile)) { Fail "Input file not found: $InputFile" }
    try {
        $json = Get-Content $InputFile -Raw | ConvertFrom-Json
        foreach ($k in $json.PSObject.Properties.Name) { $values[$k] = $json.$k }
    } catch {
        Fail "Failed to read or parse JSON file: $_"
    }
}

# Merge environment variables (they take precedence)
$envVars = @('GH_REPO','BACKEND_API_URL','RENDER_API_KEY','RENDER_SERVICE_ID','RENDER_SERVICE_URL')
foreach ($k in $envVars) {
    if ($env:$k) { $values[$k] = $env:$k }
}

# repo detection
if (-not $values.ContainsKey('GH_REPO')) {
    try {
        $repo = gh repo view --json nameWithOwner -q .nameWithOwner 2>$null
        if ($repo) { $values['GH_REPO'] = $repo }
    } catch {
        # ignore
    }
}

if (-not $values.ContainsKey('GH_REPO')) { Fail "Repository slug not set. Provide GH_REPO env var or repo in JSON (owner/repo)." }

$repo = $values['GH_REPO']
Write-Host "Setting secrets for repository: $repo"

foreach ($secretKey in @('BACKEND_API_URL','RENDER_API_KEY','RENDER_SERVICE_ID','RENDER_SERVICE_URL')) {
    if ($values.ContainsKey($secretKey) -and -not [string]::IsNullOrEmpty($values[$secretKey])) {
        Write-Host "Setting secret: $secretKey"
        gh secret set $secretKey --body $values[$secretKey] --repo $repo
    } else {
        Write-Host "Skipping secret (not provided): $secretKey"
    }
}

Write-Host "Done. Verify secrets at: https://github.com/$repo/settings/secrets/actions"
