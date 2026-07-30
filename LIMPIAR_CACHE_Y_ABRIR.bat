@echo off
cd /d "%~dp0"
start "" http://localhost:8240/index.html?v=24&fresh=1
py -m http.server 8240
if errorlevel 1 python -m http.server 8240
pause
