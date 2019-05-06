import { connect } from 'react-redux';
import ACTIONS from '../../../modules/actions';
import Card from './Card.component';

const mapDispatchToProps = dispatch => ({
  addBook: book => dispatch(ACTIONS.addBook(book)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Card);
