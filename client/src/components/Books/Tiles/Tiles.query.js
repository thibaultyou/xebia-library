import React from 'react';
import { Query } from 'react-apollo';
import { BOOKS_QUERY } from '../../../queries';
import Notification from '../../Notification';
import LoadingIndicator from '../../LoadingIndicator';
import Tiles from './Tiles.component';

const TilesQuery = props => {
  return (
    <Query query={BOOKS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <LoadingIndicator />;
        if (error) {
          return <Notification variant="error" message={`Books - ${error}`} />;
        }
        return data ? (
          <Tiles books={data.books} />
        ) : (
          <Notification message="Failed to fetch books ..." />
        );
      }}
    </Query>
  );
};

export default TilesQuery;
