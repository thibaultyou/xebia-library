import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import styled from 'styled-components';

export const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  typography: {
    useNextVariants: true,
  },
});

export const AppContainer = styled.div`
  flex-grow: 1;
  padding: 10px;
  height: 100vh;
  overflow: auto;
`;
