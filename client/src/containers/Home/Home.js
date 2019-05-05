import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Typography from '@material-ui/core/Typography';
import Notification from '../../components/Notification';

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

const Home = () => (
  <Fragment>
    <Typography variant="h4">Books</Typography>
    <Query query={BOOKS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <h6>Loading ...</h6>;
        if (error) {
          return <Notification variant="error" message={error} />;
        }
        return data ? (
          <Fragment>
            {data.books.map(book => (
              <h6 key={book.isbn}>{book.isbn}</h6>
            ))}
          </Fragment>
        ) : (
          <Notification message="Failed to fetch books ..." />
        );
      }}
    </Query>
  </Fragment>
);

export default Home;
