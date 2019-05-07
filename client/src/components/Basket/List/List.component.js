import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import RemoveIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './List.styles';
import { PriceContainer, Cover } from './List.styles';
import Header from '../Header';

import {
  getInitialPrice,
  getPricesWithOffers,
  getLowerPrice,
  getRoundedValue,
} from '../formulas';

export const List = props => {
  const { classes, offers, parent } = props;
  const { basket, deleteBook } = parent;

  const initialPrice = getInitialPrice(basket);
  const withOffers = getPricesWithOffers(initialPrice, offers);
  const lowerPrice = getLowerPrice(initialPrice, withOffers);
  const reduction = getRoundedValue(initialPrice - lowerPrice);
  const total = lowerPrice < 0 ? 0 : getRoundedValue(lowerPrice);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <Header />
        <TableBody>
          {basket.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <Cover src={item.cover} />
              </TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell align="right">
                <Typography variant="button">{item.price} €</Typography>
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
      </Table>
      <PriceContainer>
        <Typography align="right" color="primary" variant="button">
          <b>Total :</b>
        </Typography>
        <Typography align="right" color="secondary">
          {initialPrice} - {reduction} € de réduction
        </Typography>
        <Typography align="right" color="secondary">
          <b>= {total}€</b>
        </Typography>
      </PriceContainer>
    </Paper>
  );
};

List.propTypes = {
  classes: PropTypes.object.isRequired,
  parent: PropTypes.object.isRequired,
  offers: PropTypes.array.isRequired,
};

export const StyledList = withStyles(styles)(List);
