Write-Host "================================"
Write-Host "       TIGEROS SYSTEM CHECK"
Write-Host "================================"

$os = Get-CimInstance Win32_OperatingSystem
$cpu = Get-CimInstance Win32_Processor | Select-Object -First 1
$ram = Get-CimInstance Win32_ComputerSystem

Write-Host "Operating System: $($os.Caption)"
Write-Host "Windows Version: $($os.Version)"
Write-Host "Architecture: $($os.OSArchitecture)"
Write-Host "Processor: $($cpu.Name)"
Write-Host "RAM: $([math]::Round($ram.TotalPhysicalMemory / 1GB, 2)) GB"

Write-Host ""
Write-Host "Checking WSL..."

wsl --status

Write-Host ""
Write-Host "TigerOS system check completed."
