@echo off
title Limpiar cache Party Planet V30
cd /d "%~dp0"
start "" "http://localhost:8300/index.html?v=30&fresh=1"
py -m http.server 8300
if errorlevel 1 python -m http.server 8300
pause
