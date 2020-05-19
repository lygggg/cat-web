cd /home/ubuntu/build
npm install
docker build -t [Docker Hub ID]/[Image Name]:[version] .
docker run --publish [EC2 port number]:[Docker port number] -it --detach --name [New Container Name] [Docker Hub ID]/[Image Name]:[version] /bin/bash