import TableBody from "@mui/material/TableBody";
import styled from "styled-components";
import Table from "@mui/material/Table";
import { theme } from "../../styles/themeStyles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

interface TableComponenentStyledProps {
    width?: string
    backgroundColor?: string
    backgroundHeader?: string
    colorHeader?: string
    colorBody?: string
    backgroundBody?: string

}

export const StyledTableCell = styled(TableCell)<TableComponenentStyledProps>`
&.${tableCellClasses.head} {
  background-color: ${({ backgroundHeader }) => backgroundHeader};
  color: ${({ colorHeader }) => colorHeader};
  text-align: center;
   border-bottom: 1px solid #fff;
}

&.${tableCellClasses.body} {
  font-size: 14px;
}


`;

export const TableStyled = styled(Table)<TableComponenentStyledProps>`
   width: ${props => props.width};
   background-color: ${props => props.backgroundColor};
   ;
`

export const TdId = styled.td`
    width: 50px;
    text-align: center;
    border-bottom: 1px solid #fff;
    height: 40px;
`

export const TableBodyStyled = styled(TableBody)<TableComponenentStyledProps>`
    background-color: ${({ backgroundBody }) => backgroundBody};
    color: ${({ colorBody }) => colorBody};
`