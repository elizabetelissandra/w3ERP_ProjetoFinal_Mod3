import styled from "styled-components";
import { theme } from "../../context/themeContext";

export const DivDashboard = styled.div`
    display: flex;
    width: 100%;
`

export const DivHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 20px;
`
export const DivDashBoard = styled.div`
    display: flex;
    flex-direction: column;
    
    gap: 20px;
    width: 90%;
    background: ${theme.palette.primary.main};
    border-radius: 10px;
`
export const DivCards = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
    margin: 20px;
`

export const H3 = styled.h3`
    margin: 20px;
    color: ${theme.palette.primary.contrastText};
`

export const DivTituloDashboard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: ${theme.palette.primary.main};
    border-radius: 10px;
`

export const CalendarioSpan = styled.span`
    display: flex;
    align-items: center;
    gap: 10px;
    background: ${theme.palette.primary.contrastText};
    padding: 10px;
    width: 190px;
    border-radius: 10px;
    margin: 20px;

    img{
        width: 20px;
        }
`

export const SpanMes = styled.span`
    font-weight: 700;
    color: ${theme.palette.primary.main};
`
export const DivTabelas = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 20px;
    margin: 20px;
    padding: 20px;
`

export const DivTabela = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    gap: 20px;
    box-shadow: -2px -1px 40px -10px rgba(0,0,0,0.75);
    border-radius: 10px;
    background: ${theme.palette.background.default};
`

export const DivBotoes = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 20px;
`

export const ImgProdutos = styled.img`
    width: 30px;
    padding: 10px;
    border-radius: 10px;
    background: ${theme.palette.primary.main};
`
export const DivButton = styled.div`
    background: #E0E0E0;
    border-radius: 10px;
    padding: 10px;
    gap: 10px;
    `