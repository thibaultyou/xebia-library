import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { BOOKS_QUERY } from '../../queries';
import Notification from '../Notification';
import LoadingIndicator from '../LoadingIndicator';
import BookCard from './BookCard';
import styles from './Books.styles';

const Books = props => {
  const { classes } = props;

  return (
    <Fragment>
      <Grid container spacing={40} className={classes.bookGrid}>
        <Query query={BOOKS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <LoadingIndicator />;
            if (error) {
              return (
                <Notification variant="error" message={`Books - ${error}`} />
              );
            }
            return data ? (
              <Fragment>
                {data.books.map(book => (
                  <Grid item key={book.isbn} xs={12} md={6}>
                    <BookCard book={book} />
                  </Grid>
                ))}
              </Fragment>
            ) : (
              <Notification message="Failed to fetch books ..." />
            );
          }}
        </Query>
      </Grid>
    </Fragment>
  );
};

Books.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Books);
