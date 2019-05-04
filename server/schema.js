const axios = require('axios');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require('graphql');

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    isbn: { type: GraphQLString },
    title: { type: GraphQLString },
    price: { type: GraphQLInt },
    cover: { type: GraphQLString },
    synopsis: { type: new GraphQLList(GraphQLString) },
  }),
});

const OfferType = new GraphQLObjectType({
  name: 'Offer',
  fields: () => ({
    type: { type: GraphQLString },
    sliceValue: { type: GraphQLInt },
    value: { type: GraphQLInt },
  }),
});

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
