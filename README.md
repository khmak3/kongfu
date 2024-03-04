# kongfu
Sample card game server use nest and message queue

This is a GraphQL server utilizing the nest framework to keep check card game and player status.

This is a Docker container-based solution that requires the host network driver now.
```
The host networking driver only works on Linux hosts, and is not supported on Docker for Mac, Docker for Windows, or Docker EE for Windows Server.
So, we need other installation procedure to run locally
```
## Getting Started

Linux 
1. Make sure you have [Docker](https://www.docker.com/) installed.
2. check out source code
3. Update config.json
4. Run `docker build -f Dockerfile.dev -t kongfu:latest .` to build container.
5. Run container `docker run --rm -it --network host --privileged kongfu:latest`


Mac and Windows
1. Make sure you have [Node JS and NPM](https://nodejs.org/en/download/) installed.
2. check out source code
3. Update config.json
4. Install followings
```bash
$ npm i -g @nestjs/cli
$ npm i -g yarn
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

# Graphql Playground
When the application is running, you can go to http://localhost:3000/graphql to access the GraphQL Playground. See here for more.

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
