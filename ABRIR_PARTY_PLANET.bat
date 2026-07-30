@echo off
title Party Planet V30
cd /d "%~dp0"
echo Iniciando Party Planet Version 30...
echo No cierres esta ventana mientras uses la aplicacion.
start "" http://localhost:8300/index.html?v=30
py -m http.server 8300
if errorlevel 1 python -m http.server 8300
pause
