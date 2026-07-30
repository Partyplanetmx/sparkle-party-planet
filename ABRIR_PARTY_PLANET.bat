@echo off
title Party Planet V26
cd /d "%~dp0"
echo Iniciando Party Planet Version 26...
echo No cierres esta ventana mientras uses la aplicacion.
start "" http://localhost:8260/index.html?v=26
py -m http.server 8260
if errorlevel 1 python -m http.server 8260
pause
