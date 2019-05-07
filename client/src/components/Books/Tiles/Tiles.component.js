import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '../Card';

const Tiles = props => (
  <Fragment>
    {props.books.map(book => (
      <Grid item key={book.isbn} xs={12} md={6}>
        <Card book={book} />
      </Grid>
    ))}
  </Fragment>
);

Tiles.propTypes = {
  books: PropTypes.array.isRequired,
};

export default Tiles;
