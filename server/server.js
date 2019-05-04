const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const isDevEnv = NODE_ENV == 'development';
const fallback = isDevEnv
  ? `<a href='http://localhost:${PORT}/graphql'>http://localhost:${PORT}/graphql</a> for testing !`
  : 'Hello from Express.js !';

const app = express();

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

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
