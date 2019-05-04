const axios = require('axios');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = require('graphql');

const { BookType, OfferType } = require('./types');

const RootQuery = new GraphQLObjectType({
  name: 'Root',
  fields: {
    books: {
      type: new GraphQLList(BookType),
      resolve() {
        return axios
          .get('http://henri-potier.xebia.fr/books')
          .then(res => res.data);
      },
    },
    offers: {
      type: new GraphQLList(OfferType),
      args: {
        isbns: { type: GraphQLString },
      },
      resolve(parent, args) {
        return axios
          .get(
            `http://henri-potier.xebia.fr/books/${args.isbns}/commercialOffers`,
          )
          .then(res => res.data.offers);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
