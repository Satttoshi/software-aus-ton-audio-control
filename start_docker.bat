@echo off
start "" "C:\Program Files\Docker\Docker\Docker Desktop.exe"
timeout /t 45
docker run --rm -e "ITX_IP=127.0.0.1" --name audio-gui -p 8000:3000 software-aus-ton-gui