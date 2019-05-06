import { connect } from 'react-redux';
import List from './List.query';
import ACTIONS from '../../../modules/actions';

const mapStateToProps = state => ({
  basket: state.basket,
});

const mapDispatchToProps = dispatch => ({
  deleteBook: book => dispatch(ACTIONS.deleteBook(book)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
