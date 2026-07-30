@echo off
title Party Planet V28
cd /d "%~dp0"
echo Iniciando Party Planet Version 28...
echo No cierres esta ventana mientras uses la aplicacion.
start "" http://localhost:8280/index.html?v=28
py -m http.server 8280
if errorlevel 1 python -m http.server 8280
pause
