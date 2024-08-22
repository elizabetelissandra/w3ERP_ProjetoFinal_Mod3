import styled from "styled-components";
import { theme } from "../../../context/themeContext";

interface PPorcentagemProps {
    positive: boolean
}

export const DivCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 124px;
    background: #010d42;
    border-radius: 30px;
`

export const DivConteudo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`
export const DivValores = styled.div`
    display: flex;
    align-items: center;
    gap: 35px

`

export const PCard = styled.p`
    color: #C5CFFF;
    font-size: 14px;
`

export const PQuantidade = styled.p`
    color: ${theme.palette.primary.contrastText};
    font-size: 32px;
`

export const PPorcentagem = styled.p<PPorcentagemProps>`
    color: ${theme.palette.primary.contrastText};
    background: ${props => props.positive ? theme.palette.success.main : theme.palette.error.main};
    font-size: 14px;
    padding: 5px;
    border-radius: 100px;
`