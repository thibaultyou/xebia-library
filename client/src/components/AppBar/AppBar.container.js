import { connect } from 'react-redux';
import AppBar from './AppBar.component';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './AppBar.styles';

const mapStateToProps = state => ({
  basketLength: state.basket.length,
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    null,
  )(AppBar),
);
