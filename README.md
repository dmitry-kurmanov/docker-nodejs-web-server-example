### docker image:
```
  docker build --build-arg DIST_PATH=build  -f server/Dockerfile -t node-docker-test .
  docker run --rm -d -p 9999:9999 node-docker-test
```