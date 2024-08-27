import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Customer, Product } from "../../types/DashboardTypes";
import { useNavigate } from "react-router";
import { ProductType } from "../../pages/Predicao/Predicao";
import React, { ReactNode } from "react";
import { TableBodyStyled } from "./TablesComponentStyles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,

    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#F5F5F5",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface TablesComponentProps {
 
  headers: string[];
  children: ReactNode
  width: string
}

function TablesComponent({ headers, children, width }: TablesComponentProps) {
  



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: {width} }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headers   ? (
              headers.map((header: string, index) => (
                <StyledTableCell key={index}>{header}</StyledTableCell>
              ))
            ) : (
              <StyledTableCell colSpan={1}>Sem Cabeçalhos</StyledTableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBodyStyled >
          {children}
            
        </TableBodyStyled>
      </Table>
    </TableContainer>
  );
}

export default TablesComponent;
