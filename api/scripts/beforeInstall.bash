if [ -d /home/ubuntu/build ]; then
    rm -rf /home/ubuntu/build
fi
mkdir -vp /home/ubuntu/build

docker stop catppingmall
docker rm catppingmall

if [[ "$(docker images -q baayoo71/catppingmall:1.0 2> /dev/null)" != "" ]]; then
docker rmi -f $(docker images --format '{{.Repository}}:{{.Tag}}' --filter=reference='baayoo71/catppingmall:1.0')
fi