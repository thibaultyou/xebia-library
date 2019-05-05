import gql from 'graphql-tag';

const BOOKS_QUERY = gql`
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

export default BOOKS_QUERY;
