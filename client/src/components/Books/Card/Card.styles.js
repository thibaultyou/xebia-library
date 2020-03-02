const styles = theme => ({
  book: {
    display: 'flex',
    margin: 5,
  },
  bookDetails: {
    flex: 1,
  },
  bookMedia: {
    width: 160,
  },
  bookSynopsis: {
    height: 80,
    overflow: 'auto',
    marginBottom: theme.spacing.unit,
  },
  buyButton: {
    marginTop: theme.spacing.unit * 3,
  },
});

export default styles;
