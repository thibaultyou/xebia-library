import { connect } from 'react-redux';
import AppBar from './AppBar.component';

const mapStateToProps = state => ({
  basket: state.basket,
});

export default connect(
  mapStateToProps,
  null,
)(AppBar);
