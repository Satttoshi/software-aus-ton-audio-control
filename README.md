# 3D Audio Control

This is a Next.js application designed to remotely control a 3D audio system. It provides a simple interface for sending command instructions for playing a group or a specific sound effect on the system via TCP connections.

## Server Installation

### Windows

1. install docker desktop
2. execute `shell:startup` and get into the startup folder
3. copy paste `docker_start.bat` file into the startup folder
4. open `docker_start_bat` with text editor and set the `ITX_IP=<setip>` to the ip-address where the audio software is located at
5. finished, the server will start on computer startup now

#### How to move docker image to ITX

1. build container on repository dir with `docker build -t software-aus-ton-gui .`
2. save docker image as .tar file with `docker save software-aus-ton-gui > software-aus-ton-gui.tar`
3. move .tar file with USB-Stick or something to offline server ITX
4. if docker desktop is installed then `docker load < software-aus-ton-gui.tar` else install first
5. finished, the server has the docker image installed

#### When there is no CPU Virtualisation

Autorun app with node.js instead

1. install node.js (current version of this readme is v18.16.1-x64)
2. create bat file with content: `cd C:\HaT\software-aus-ton-audio-control && npm run start`
3. put it into the `shell:startup` folder
4. move .next folder or whole repository `into C:\HaT\`
5. make sure to include package.json file and .env.local
6. run in that dir in cmd `npm i --omit=dev`
