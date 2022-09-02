# Setup dev

```bash
# check network is exist
docker network

# If not exist, create network.
docker network create dev_nextjs_bang_network
```

- docker build

```bash
docker-compose build --no-cache
```

- Install package

```bash
docker-compose run --rm app npm install
```

- Run docker

```bash
docker-compose up
```

- Access to `http://localhost:8888`
