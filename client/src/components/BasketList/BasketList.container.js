import { connect } from 'react-redux';
import BasketList from './BasketList.component';
import ACTIONS from '../../modules/actions';

const mapStateToProps = state => ({
  basket: state.basket,
});

const mapDispatchToProps = dispatch => ({
  deleteBook: book => dispatch(ACTIONS.deleteBook(book)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BasketList);
