import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import Paper from '@material-ui/core/Paper';
import RemoveIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { OFFERS_QUERY } from '../../queries';
import Notification from '../Notification';
import LoadingIndicator from '../LoadingIndicator';
import { Cover, styles } from './BasketList.styles';

import {
  getInitialPrice,
  getPricesWithOffers,
  getLowerPrice,
} from './formulas';

const BasketList = props => {
  const { classes, basket, deleteBook } = props;

  const isbns =
    basket.length > 0 ? basket.map(book => book.isbn).join(',') : '.';

  return (
    <Fragment>
      <Query query={OFFERS_QUERY} variables={{ isbns }}>
        {({ loading, error, data }) => {
          if (loading) return <LoadingIndicator />;
          if (error) {
            return (
              <Notification variant="error" message={`Offers - ${error}`} />
            );
          }

          if (data) {
            const initialPrice = getInitialPrice(basket);
            const withOffers = getPricesWithOffers(initialPrice, data.offers);
            const lowerPrice = getLowerPrice(initialPrice, withOffers);
            const reduction =
              Math.round((initialPrice - lowerPrice) * 100) / 100;
            const total = lowerPrice < 0 ? 0 : lowerPrice;

            return (
              <Paper className={classes.root}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Cover</TableCell>
                      <TableCell>Title</TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell />
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {basket.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell component="th" scope="item">
                          <Cover src={item.cover} />
                        </TableCell>
                        <TableCell>{item.title}</TableCell>
                        <TableCell align="right">
                          <Typography variant="button">
                            {item.price} €
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Button
                            color="secondary"
                            variant="contained"
                            className={classes.removeButton}
                            onClick={() => deleteBook(item)}
                          >
                            <RemoveIcon />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableCell align="right">
                        <Typography variant="button">
                          <b>
                            Total : {initialPrice} - {reduction} € de réduction
                            = {total} €
                          </b>
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </Paper>
            );
          }
          return <Notification message="Failed to fetch offers ..." />;
        }}
      </Query>
    </Fragment>
  );
};

BasketList.propTypes = {
  classes: PropTypes.object.isRequired,
  basket: PropTypes.array.isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default withStyles(styles)(BasketList);
