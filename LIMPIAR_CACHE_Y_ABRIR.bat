@echo off
title Limpiar cache Party Planet V25
cd /d "%~dp0"
start "" "http://localhost:8250/index.html?v=25&fresh=1"
py -m http.server 8250
if errorlevel 1 python -m http.server 8250
pause
