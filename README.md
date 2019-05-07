# Xebia coding challenge

[![CircleCI](https://circleci.com/gh/thibaultyou/xebia-library.svg?style=svg)](https://circleci.com/gh/thibaultyou/xebia-library) &nbsp; [![GLWTPL](https://img.shields.io/badge/license-GLWTPL-blue.svg)](https://github.com/me-shaon/GLWTPL) &nbsp; [![LatestCommit](https://img.shields.io/github/last-commit/thibaultyou/xebia-library.svg)](https://github.com/thibaultyou/xebia-library) &nbsp; [![Languages](https://img.shields.io/github/languages/top/thibaultyou/xebia-library.svg)](https://github.com/thibaultyou/xebia-library)

## Table of contents

<!-- toc -->

- [Challenge](#challenge)
- [Requirements](#requirements)
- [Usage](#usage)
- [Cooking recipe](#cooking-recipe)
  * [Client core components](#client-core-components)
  * [Server core components](#server-core-components)
  * [Testing & quality](#testing--quality)
  * [Environment](#environment)
- [Possible improvements](#possible-improvements)
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

> Dev mode

```sh
docker-compose -f docker-compose.dev.yml up
```

or

> Production mode (you might rebuild your containers with `docker-compose build` when switching modes)

```sh
docker-compose up
```

---

Once your containers are started you can visit those links locally :

- [Client](http://localhost:3000)
- [Server](http://localhost:5000)

Online demo is available [here](https://bit.ly/2VLv1wA).

## Cooking recipe

### Client core components

- [React](https://github.com/facebook/react)
- [Apollo](https://github.com/apollographql/apollo-client)
- [Redux](https://github.com/reduxjs/redux)
- [React router](https://github.com/ReactTraining/react-router)
- [Styled components](https://github.com/styled-components/styled-components)
- [Material UI](https://github.com/mui-org/material-ui)
- [NGINX](https://github.com/nginx/nginx)
- [Node.js](https://github.com/nodejs/node)

### Server core components

- [Express.js](https://github.com/expressjs/express)
- [Axios](https://github.com/axios/axios)
- [GraphQL-js](https://github.com/graphql/graphql-js)
- [Node.js](https://github.com/nodejs/node)

### Testing & quality

- [Renovate](https://github.com/renovatebot/renovate)
- [Jest](https://github.com/facebook/jest)
- [Enzyme](https://github.com/airbnb/enzyme)
- [Mocha](https://github.com/mochajs/mocha)
- [EasyGraphQLTester](https://github.com/EasyGraphQL/easygraphql-tester)
- [EsLint](https://github.com/eslint/eslint)
- [Prettier](https://github.com/prettier/prettier)

### Environment

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [CircleCI](https://circleci.com/)
- [AWS EC2](https://aws.amazon.com/ec2/)

## Possible improvements

- End-to-end testing with [Cypress-io](https://github.com/cypress-io/cypress)
- Snapshot testing with [Jest](https://github.com/facebook/jest)
- Shopping cart management with [GraphQL mutations](https://graphql.org/learn/queries/#mutations)
- API mocking with [Express.js](https://github.com/expressjs/express)
- Search bar with [ElasticSearch](https://github.com/elastic/elasticsearch)
- Continuous deployments on [Amazon ECS](https://aws.amazon.com/ecs/) or multi [Heroku Dynos](https://www.heroku.com/dynos)
- CircleCI coverage reports with [Codecov](https://github.com/codecov/codecov-node)
- Code analysis with [Code Climate](https://github.com/codeclimate/codeclimate) or [SonarQube](https://github.com/SonarSource/sonarqube)
- Vocal control with [react-voice-components](https://github.com/grvcoelho/react-voice-components)
- Intelligent conversational chatbot with [Dialogflow](https://cloud.google.com/dialogflow-enterprise/docs/reference/libraries/nodejs)
- ...

## Credits

- **[Thibault You](mailto:thibaultyou@gmail.com)** - _Developer_

## License

This project is licensed under the [GLWTPL License](./LICENSE.md).
