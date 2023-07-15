@echo off
start "" "C:\Program Files\Docker\Docker\Docker Desktop.exe"
timeout /t 30
docker run --rm -e "ITX_IP=172.27.144.1" --name audio-gui -p 8000:3000 software-aus-ton-gui