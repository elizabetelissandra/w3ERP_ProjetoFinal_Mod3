import TableBody from "@mui/material/TableBody";
import styled from "styled-components";
import { theme } from "../../context/themeContext";

export const TdId = styled.td`
    width: 50px;
    text-align: center;
`

export const TableBodyStyled = styled(TableBody)`
    background-color: ${theme.palette.background.default};
`