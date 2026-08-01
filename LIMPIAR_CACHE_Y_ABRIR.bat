@echo off
title Limpiar cache Party Planet V32
cd /d "%~dp0"
start "" "http://localhost:8320/index.html?v=32&fresh=1"
py -m http.server 8320
if errorlevel 1 python -m http.server 8320
pause
