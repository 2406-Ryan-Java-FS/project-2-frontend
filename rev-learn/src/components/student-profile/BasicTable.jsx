import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(test1, test2, test3 , test4, test5) {
  return { test1, test2, test3 , test4, test5 };
}

const rows = [
  createData('Test String 1', 159, 6.0, 24, 4.0),
  createData('Test String 2', 237, 9.0, 37, 4.3),
  createData('Test String 3', 262, 16.0, 24, 6.0),
  createData('Test String 4', 305, 3.7, 67, 4.3),
  createData('Test String 5', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>TestCell1</TableCell>
            <TableCell align="right">TestCell2</TableCell>
            <TableCell align="right">TestCell3</TableCell>
            <TableCell align="right">TestCell4</TableCell>
            <TableCell align="right">TestCell5</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.test1}
              </TableCell>
              <TableCell align="right">{row.test2}</TableCell>
              <TableCell align="right">{row.test3}</TableCell>
              <TableCell align="right">{row.test4}</TableCell>
              <TableCell align="right">{row.test5}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
