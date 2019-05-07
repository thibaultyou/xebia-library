import styled from 'styled-components';

export const Container = styled.div`
  width: '100%';
`;

export const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  homeButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  link: {
    color: 'white',
  },
});
