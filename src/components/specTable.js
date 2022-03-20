import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function SpecTable({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center">Combat</TableCell>
            <TableCell align="center">Durability</TableCell>
            <TableCell align="center">Intelligence</TableCell>
            <TableCell align="center">Power</TableCell>
            <TableCell align="center">Speed</TableCell>
            <TableCell align="center">Strength</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={"PowerStats"}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              PowerStats
            </TableCell>
            <TableCell align="center">{data?.combat}</TableCell>
            <TableCell align="center">{data?.durability}</TableCell>
            <TableCell align="center">{data?.intelligence}</TableCell>
            <TableCell align="center">{data?.power}</TableCell>
            <TableCell align="center">{data?.speed}</TableCell>
            <TableCell align="center">{data?.strength}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
