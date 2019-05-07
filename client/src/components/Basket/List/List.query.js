import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { OFFERS_QUERY } from '../../../queries';
import Notification from '../../Notification';
import Loader from '../../Loader';
import { StyledList } from './List.component';

const ListQuery = props => {
  const { basket } = props;

  const isbns =
    basket.length > 0 ? basket.map(book => book.isbn).join(',') : '.';

  return (
    <Fragment>
      <Query query={OFFERS_QUERY} variables={{ isbns }}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) {
            return (
              <Notification variant="error" message={`Offers - ${error}`} />
            );
          }

          return data ? (
            <StyledList parent={props} offers={data.offers} />
          ) : (
            <Notification message="Failed to fetch offers ..." />
          );
        }}
      </Query>
    </Fragment>
  );
};

ListQuery.propTypes = {
  basket: PropTypes.array.isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default ListQuery;
