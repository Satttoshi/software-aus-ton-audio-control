# 3D Audio Control

This is a Next.js application designed to remotely control a 3D audio system. It provides a simple interface for sending command instructions for playing a group or a specific sound effect on the system via TCP connections.

## Server Installation

### Windows

1. install docker desktop
2. execute `shell:startup` and get into the startup folder
3. copy paste `docker_start.bat` file into the startup folder
4. open `docker_start_bat` with text editor and set the `ITX_IP=<setip>` to the ip-address where the audio software is located at
5. finished, the server will start on computer startup now
