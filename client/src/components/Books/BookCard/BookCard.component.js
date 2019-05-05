import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import styles from './BookCard.styles';

const BookCard = props => {
  const { classes, book, addBook } = props;

  return (
    <Card className={classes.book}>
      <div className={classes.bookDetails}>
        <CardContent>
          <Typography variant="h5">{book.title}</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            ISBN : {book.isbn}
          </Typography>
          <Typography variant="h6" align="right" color="secondary" paragraph>
            {book.price} €
          </Typography>
          <div className={classes.bookSynopsis}>
            <Typography variant="subtitle1" paragraph>
              {book.synopsis}
            </Typography>
          </div>
          <div className={classes.buyButton}>
            <Button
              color="primary"
              variant="outlined"
              onClick={() => addBook(book)}
            >
              Add to basket ...
            </Button>
          </div>
        </CardContent>
      </div>
      <Hidden xsDown>
        <CardMedia
          className={classes.bookMedia}
          image={book.cover}
          title={`${book.title} cover`}
        />
      </Hidden>
    </Card>
  );
};

BookCard.propTypes = {
  classes: PropTypes.object.isRequired,
  book: PropTypes.object.isRequired,
  addBook: PropTypes.func.isRequired,
};

export default withStyles(styles)(BookCard);
