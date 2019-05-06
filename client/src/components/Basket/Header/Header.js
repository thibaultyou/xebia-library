import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

const Header = () => (
  <TableHead>
    <TableRow>
      <TableCell>
        <Typography variant="button">Cover</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="button">Title</Typography>
      </TableCell>
      <TableCell align="right">
        <Typography variant="button">Price</Typography>
      </TableCell>
      <TableCell />
    </TableRow>
  </TableHead>
);

export default Header;
