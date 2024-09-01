import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ReactNode } from "react";
import { StyledTableCell, TableBodyStyled } from "./TablesComponentStyles";



interface TablesComponentProps {
 
  headers: string[];
  children: ReactNode
  width: string
  backgroundColor?: string
  backgroundHeader?: string
  colorHeader?: string
  backgroundBody?: string
  colorBody?: string
}

function TablesComponent({ headers, children, width, backgroundColor, backgroundHeader, colorHeader, backgroundBody, colorBody }: TablesComponentProps) {
  
  return (
    <TableContainer component={Paper}>
      <Table style={{ width, backgroundColor }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headers   ? (
              headers.map((header: string, index) => (
                <StyledTableCell colorHeader={colorHeader} backgroundHeader={backgroundHeader} key={index}>{header}</StyledTableCell>
              ))
            ) : (
              <StyledTableCell colSpan={1}>Sem Cabeçalhos</StyledTableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBodyStyled backgroundBody={backgroundBody} colorBody={colorBody} >
          {children}
            
        </TableBodyStyled>
      </Table>
    </TableContainer>
  );
}

export default TablesComponent;
