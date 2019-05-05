import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import BOOKS_QUERY from '../../queries';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Notification from '../Notification';
import BookCard from './BookCard';
import styles from './Books.styles';

const Books = props => {
  const { classes } = props;

  return (
    <Fragment>
      <main>
        <Grid container spacing={40} className={classes.bookGrid}>
          <Query query={BOOKS_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <h6>Loading ...</h6>;
              if (error) {
                return <Notification variant="error" message={error} />;
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
      </main>
    </Fragment>
  );
};

Books.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Books);
