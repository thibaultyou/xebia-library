const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql');

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    isbn: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: GraphQLString },
    price: { type: new GraphQLNonNull(GraphQLInt) },
    cover: { type: GraphQLString },
    synopsis: { type: new GraphQLList(GraphQLString) },
  }),
});

const OfferType = new GraphQLObjectType({
  name: 'Offer',
  fields: () => ({
    type: { type: new GraphQLNonNull(GraphQLString) },
    sliceValue: { type: GraphQLInt },
    value: { type: new GraphQLNonNull(GraphQLInt) },
  }),
});

module.exports = { BookType, OfferType };
