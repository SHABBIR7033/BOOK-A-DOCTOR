# Launch server and client in separate PowerShell windows for development
# Usage: Right-click -> "Run with PowerShell" or from an elevated PS: .\run-dev.ps1

# Adjust ports if needed
$serverPort = 5001
$clientCmd = "Set-Location -Path 'C:\Users\mdsho\Desktop\Internships\Skill Wallet\BOOK A DOCTOR\Client'; npm run dev"
$serverCmd = "Set-Location -Path 'C:\Users\mdsho\Desktop\Internships\Skill Wallet\BOOK A DOCTOR\Server'; $env:PORT='$serverPort'; npm run dev"

Write-Output "Starting server on port $serverPort..."
Start-Process powershell -ArgumentList "-NoExit","-Command","$serverCmd" -WindowStyle Normal

Start-Sleep -Milliseconds 800
Write-Output "Starting client (Vite)..."
Start-Process powershell -ArgumentList "-NoExit","-Command","$clientCmd" -WindowStyle Normal

Write-Output "Launched server and client in new PowerShell windows. Check their consoles for URLs and logs."