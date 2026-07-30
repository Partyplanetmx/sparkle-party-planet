@echo off
title Limpiar cache Party Planet V29
cd /d "%~dp0"
start "" "http://localhost:8290/index.html?v=29&fresh=1"
py -m http.server 8290
if errorlevel 1 python -m http.server 8290
pause
