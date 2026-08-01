@echo off
 title Abrir cuentos directamente V34
 cd /d "%~dp0"
 start "Servidor Party Planet V34" /min cmd /c "py -m http.server 8340"
 timeout /t 2 /nobreak >nul
 start "" "http://127.0.0.1:8340/index.html?v=34-storyimg&open=stories&fresh=%RANDOM%"
 pause
