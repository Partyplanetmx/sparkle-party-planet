@echo off
title Party Planet V31
cd /d "%~dp0"
start "" http://localhost:8310/index.html?v=31
py -m http.server 8310
if errorlevel 1 python -m http.server 8310
pause
