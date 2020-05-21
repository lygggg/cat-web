docker pull baayoo71/catppingmall:latest
docker run --env-file /home/ubuntu/.env --publish 3000:3000 -it --detach --name catppingmall baayoo71/catppingmall:latest /bin/bash
## test1