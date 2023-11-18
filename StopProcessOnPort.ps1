$port = 3002
$process = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess
if ($process) {
    Write-Host "El proceso en el puerto $port tiene el PID: $process"
    Stop-Process -Id $process -Force
} else {
    Write-Host "No se encontraron procesos en el puerto $port"
}
