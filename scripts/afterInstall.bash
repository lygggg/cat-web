docker pull baayoo71/catppingmall:1.0
docker run --env-file /home/ubuntu/.env --publish 3000:3000 -it --detach --name catppingmall baayoo71/catppingmall:1.0 /bin/bash
## test1