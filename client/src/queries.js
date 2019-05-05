import gql from 'graphql-tag';

export const BOOKS_QUERY = gql`
  {
    books {
      isbn
      title
      price
      cover
      synopsis
    }
  }
`;

export const OFFERS_QUERY = gql`
  query Offers($isbns: String!) {
    offers(isbns: $isbns) {
      value
      type
      sliceValue
    }
  }
`;
