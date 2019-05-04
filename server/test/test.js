/* eslint-env mocha */
const EasyGraphQLTester = require('easygraphql-tester');
const schema = require('../schema');

const {
  invalidQuery,
  booksQuery,
  commercialOffersWithoutIsbn,
  commercialOffers,
} = require('./queries');

describe('Test GraphQL server queries', function() {
  let tester;

  before(() => {
    tester = new EasyGraphQLTester(schema);
  });

  describe('Should pass if queries are valid', () => {
    it('Should pass if query is invalid', () => {
      tester.test(false, invalidQuery);
    });

    it('Should pass if the books query is valid', () => {
      tester.test(true, booksQuery);
    });

    it('Should pass if the commercialOffers query without isbn is valid', () => {
      tester.test(true, commercialOffersWithoutIsbn);
    });

    it('Should pass if the commercialOffers query is valid', () => {
      tester.test(true, commercialOffers);
    });
  });
});
