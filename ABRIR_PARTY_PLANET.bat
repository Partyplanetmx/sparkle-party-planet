@echo off
title Party Planet V32
cd /d "%~dp0"
echo Iniciando Party Planet Version 32...
echo No cierres esta ventana mientras uses la aplicacion.
start "" http://localhost:8320/index.html?v=32
py -m http.server 8320
if errorlevel 1 python -m http.server 8320
pause
