<#
Set GitHub repository secrets using the GitHub CLI (gh).

Usage (PowerShell):
1) Install gh: https://cli.github.com/
2) Authenticate: gh auth login
3) Run this script from repository root:
   pwsh .\scripts\set_github_secrets.ps1

Notes:
- This script uses `gh secret set` and requires your authenticated GitHub account to have repo admin permissions.
- It will prompt for any missing values interactively.
#>

function Read-Secret([string]$name) {
    $val = Read-Host -Prompt "$name (leave blank to skip)"
    if ([string]::IsNullOrWhiteSpace($val)) { return $null }
    return $val
}

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    Write-Error "gh CLI not found. Install from https://cli.github.com/ and run 'gh auth login' first.";
    exit 1
}

Write-Host "This script will set the following repository secrets via gh:"
Write-Host "  BACKEND_API_URL, RENDER_API_KEY, RENDER_SERVICE_ID, RENDER_SERVICE_URL"

$repo = gh repo view --json nameWithOwner -q .nameWithOwner 2>$null
if (-not $repo) {
    Write-Host "gh couldn't detect the repo. Please enter the repo slug (owner/repo):"
    $repo = Read-Host -Prompt "Repository"
}

Write-Host "Operating on repository: $repo"

$backend = Read-Secret 'BACKEND_API_URL (e.g. https://api.yourdomain.com/api)'
$renderKey = Read-Secret 'RENDER_API_KEY'
$renderServiceId = Read-Secret 'RENDER_SERVICE_ID'
$renderUrl = Read-Secret 'RENDER_SERVICE_URL (e.g. https://your-service.onrender.com)'

if ($backend) { gh secret set BACKEND_API_URL --body $backend --repo $repo; Write-Host "Set BACKEND_API_URL" }
if ($renderKey) { gh secret set RENDER_API_KEY --body $renderKey --repo $repo; Write-Host "Set RENDER_API_KEY" }
if ($renderServiceId) { gh secret set RENDER_SERVICE_ID --body $renderServiceId --repo $repo; Write-Host "Set RENDER_SERVICE_ID" }
if ($renderUrl) { gh secret set RENDER_SERVICE_URL --body $renderUrl --repo $repo; Write-Host "Set RENDER_SERVICE_URL" }

Write-Host "Done. Verify secrets at: https://github.com/$repo/settings/secrets/actions"
