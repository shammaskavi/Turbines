import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  timestamp,
  unitno,
  revolutions,
  voltage,
  current,
  energy,
  battery
) {
  return { timestamp, unitno, revolutions, voltage, current, energy, battery };
}

const rows = [
  createData(
    "Sep 21, 2020 00:00AM",
    "WIndmill 1(1002)",
    "200rpm",
    "20V",
    "6A",
    "10V"
  ),
  createData(
    "Sep 21, 2020 00:00AM",
    "WIndmill 1(1002)",
    "200rpm",
    "20V",
    "6A",
    "10V"
  ),
  createData(
    "Sep 21, 2020 00:05AM",
    "WIndmill 1(1002)",
    "200rpm",
    "20V",
    "6A",
    "10V"
  ),
  createData(
    "Sep 21, 2020 00:10AM",
    "WIndmill 1(1002)",
    "200rpm",
    "20V",
    "6A",
    "10V"
  ),
  createData(
    "Sep 21, 2020 00:15AM",
    "WIndmill 1(1002)",
    "200rpm",
    "20V",
    "6A",
    "10V"
  ),
  createData(
    "Sep 21, 2020 00:20AM",
    "WIndmill 1(1002)",
    "200rpm",
    "20V",
    "6A",
    "10V"
  ),
  createData(
    "Sep 21, 2020 00:25AM",
    "WIndmill 1(1002)",
    "200rpm",
    "20V",
    "6A",
    "10V"
  ),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>TIMESTAMP (100g serving)</TableCell>
            <TableCell align="right">WINDMILL</TableCell>
            <TableCell align="right">(REVOLUTIONS)&nbsp;RPM</TableCell>
            <TableCell align="right">VOLTAGE</TableCell>
            <TableCell align="right">CURRENT</TableCell>
            <TableCell align="right">ENERGY</TableCell>
            <TableCell align="right">BATTERY VOLTAGE&nbsp;(IN V)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
