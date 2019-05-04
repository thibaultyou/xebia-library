const express = require('express');
const graphqlHTTP = require('express-graphql');
const chalk = require('chalk');
const log = console.log;
const schema = require('./schema');

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const isDevEnv = NODE_ENV == 'development';
log(chalk.cyan(`Starting server on ${NODE_ENV} environment`));

const app = express();
const fallback = isDevEnv
  ? `<a href='http://localhost:${PORT}/graphql'>http://localhost:${PORT}/graphql</a> for testing !`
  : 'Hello from Express.js !';

app.get('/', function(req, res) {
  res.send(fallback);
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: isDevEnv,
  }),
);

app.listen(PORT, () => log(chalk.green(`Server started on port ${PORT}`)));
