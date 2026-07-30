@echo off
title Limpiar cache Party Planet V27
cd /d "%~dp0"
start "" "http://localhost:8270/index.html?v=27&fresh=1"
py -m http.server 8270
if errorlevel 1 python -m http.server 8270
pause
