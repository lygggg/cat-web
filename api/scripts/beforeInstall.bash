if [-d/home/ubuntu/build]; then
    rm -rf /home/ubuntu/build

fi
mkdir -vp /home/ubuntu/build

if [[ "$(docker images -q [Docker Hub ID]/[Docker Hub Repository Name]:[version] 2> /dev/null)" != "" ]]; then
docker rmi -f $(docker images --format '{{.Repository}}:{{.Tag}}' --filter=reference='[Docker Hub ID]/[Docker Hub Repository Name]:[version]')
fi