@echo off
 title Party Planet V34
 cd /d "%~dp0"
 echo Iniciando Party Planet Version 34...
 echo No cierres esta ventana mientras uses la aplicacion.
 start "Servidor Party Planet V34" /min cmd /c "py -m http.server 8340"
 timeout /t 2 /nobreak >nul
 start "" "http://127.0.0.1:8340/index.html?v=34-storyimg&fresh=%RANDOM%"
 echo La aplicacion ya debe estar abierta en el navegador.
 pause
