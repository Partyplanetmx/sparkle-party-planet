@echo off
title Limpiar cache Party Planet V26
cd /d "%~dp0"
start "" "http://localhost:8260/index.html?v=26&fresh=1"
py -m http.server 8260
if errorlevel 1 python -m http.server 8260
pause
