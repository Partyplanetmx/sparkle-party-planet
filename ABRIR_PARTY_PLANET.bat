@echo off
title Party Planet V29
cd /d "%~dp0"
echo Iniciando Party Planet Version 29...
echo No cierres esta ventana mientras uses la aplicacion.
start "" http://localhost:8290/index.html?v=29
py -m http.server 8290
if errorlevel 1 python -m http.server 8290
pause
