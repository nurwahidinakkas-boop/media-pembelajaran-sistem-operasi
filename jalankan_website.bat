@echo off
title Media Pembelajaran Interaktif - Sistem Operasi (Kelas XI SMA)
echo ======================================================================
echo    MEDIA PEMBELAJARAN INTERAKTIF: SISTEM OPERASI (INFORMATIKA XI)
echo ======================================================================
echo.
echo Menjalankan server lokal menggunakan Python...
start "" http://localhost:8003
python -m http.server 8003
pause
