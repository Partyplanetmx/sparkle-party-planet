@echo off
title Party Planet V25
cd /d "%~dp0"
echo Iniciando Party Planet Version 25...
echo No cierres esta ventana mientras uses la aplicacion.
start "" http://localhost:8250/index.html?v=25
py -m http.server 8250
if errorlevel 1 python -m http.server 8250
pause
