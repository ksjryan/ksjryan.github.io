Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location -LiteralPath $repoRoot

Write-Host "Validating site source..."
& "C:\Users\COM\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" "_tools\validate_site.py"

if ($LASTEXITCODE -ne 0) {
  throw "Site validation failed. Fix the reported issue before publishing."
}

Write-Host "Publishing backup branch, backup tag, and master to GitHub..."
Write-Host "Complete the GitHub sign-in prompt if one appears."

git push origin backup/original-20260727 backup-original-20260727 master

if ($LASTEXITCODE -ne 0) {
  throw "GitHub push failed. Check authentication and try again."
}

Write-Host "Publish completed."
