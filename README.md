# Xebia coding challenge

[![CircleCI](https://circleci.com/gh/thibaultyou/xebia-library/tree/master.svg?style=svg)](https://circleci.com/gh/thibaultyou/xebia-library/tree/master) &nbsp;&nbsp; [![GLWTPL](https://img.shields.io/badge/license-GLWTPL-blue.svg)](https://github.com/me-shaon/GLWTPL) &nbsp;&nbsp; [![LatestCommit](https://img.shields.io/github/last-commit/thibaultyou/xebia-library.svg)](https://github.com/thibaultyou/xebia-library) &nbsp;&nbsp; [![Languages](https://img.shields.io/github/languages/top/thibaultyou/xebia-library.svg)](https://github.com/thibaultyou/xebia-library) [![Greenkeeper badge](https://badges.greenkeeper.io/thibaultyou/xebia-library.svg?token=b6a492350d973108e788e00ae8a1b006e73e582a3c83dacc74b6f34fb79626bf&ts=1556978663663)](https://greenkeeper.io/)

## Table of contents

<!-- toc -->

- [Challenge](#challenge)
- [Requirements](#requirements)
- [Usage](#usage)
- [Cooking recipe](#cooking-recipe)
  * [Server core components](#server-core-components)
  * [Testing](#testing)
  * [Env.](#env)
- [Credits](#credits)
- [License](#license)

<!-- tocstop -->

## Challenge

You can find the details of this challenge [here](https://github.com/xebia-france/recruitment-tests/blob/master/ExerciceFront.md).

## Requirements

Before anything, you need the following software installed on your machine :

- [Docker](https://docs.docker.com/engine/installation/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Usage

Run in a terminal (`sudo` might be needed) :

> Production mode

```sh
docker-compose up
```

or

> Dev mode (you might rebuild your containers with `docker-compose build` when switching modes)

```sh
docker-compose -f docker-compose.dev.yml up
```

## Cooking recipe

### Server core components

- [Express.js](https://github.com/expressjs/express)
- [Axios](https://github.com/axios/axios)
- [GraphQL-js](https://github.com/graphql/graphql-js)

### Testing

- [Mocha](https://github.com/mochajs/mocha)
- [EasyGraphQLTester](https://github.com/EasyGraphQL/easygraphql-tester)

### Env.

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [CircleCI](https://circleci.com/)

## Credits

- **[Thibault You](mailto:thibaultyou@gmail.com)** - _Developer_

## License

This project is licensed under the [GLWTPL License](./LICENSE.md).
