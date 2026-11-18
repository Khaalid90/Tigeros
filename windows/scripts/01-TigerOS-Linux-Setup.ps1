$ErrorActionPreference = "Stop"

Write-Host "TigerOS Linux Environment" -ForegroundColor Cyan

$admin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)

if (-not $admin) {
    Write-Host "Please run as Administrator."
    exit 1
}

wsl --install -d Ubuntu

Write-Host "Ubuntu installation requested."
Write-Host "Restart Windows if requested."
Write-Host "Complete Ubuntu's first-user setup."
