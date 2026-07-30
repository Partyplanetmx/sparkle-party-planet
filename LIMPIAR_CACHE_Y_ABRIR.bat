@echo off
title Limpiar cache Party Planet V28
cd /d "%~dp0"
start "" "http://localhost:8280/index.html?v=28&fresh=1"
py -m http.server 8280
if errorlevel 1 python -m http.server 8280
pause
