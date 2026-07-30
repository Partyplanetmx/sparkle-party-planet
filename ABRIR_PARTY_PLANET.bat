@echo off
title Party Planet V27
cd /d "%~dp0"
echo Iniciando Party Planet Version 27...
echo No cierres esta ventana mientras uses la aplicacion.
start "" http://localhost:8270/index.html?v=27
py -m http.server 8270
if errorlevel 1 python -m http.server 8270
pause
