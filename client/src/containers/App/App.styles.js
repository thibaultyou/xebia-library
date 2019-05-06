import { createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import styled from 'styled-components';

export const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
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
