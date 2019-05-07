import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import styles from './Card.styles';
import Card from './Card.component';
import ACTIONS from '../../../modules/actions';

const mapDispatchToProps = dispatch => ({
  addBook: book => dispatch(ACTIONS.addBook(book)),
});

export default withStyles(styles)(
  connect(
    null,
    mapDispatchToProps,
  )(Card),
);
