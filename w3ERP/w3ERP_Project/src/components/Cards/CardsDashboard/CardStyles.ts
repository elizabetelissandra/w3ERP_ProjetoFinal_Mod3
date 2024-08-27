import styled from "styled-components";
import { theme } from "../../../context/themeContext";

interface CardStyledProps {
    positive?: boolean
    background?: string
    alignItens?: string
    detalhes?: boolean
    colorTextCard?: string
    colorTextQuantity?: string
}

export const DivCard = styled.div<CardStyledProps>`
    display: flex;
    flex-direction:column;
    flex-wrap: wrap;
    align-content: center;
    align-items: flex-start;
    justify-content: space-between;
    width: 300px;
    height: 124px;
    box-shadow: ${props => props.detalhes ? "0px 0px 37px -10px rgba(0,0,0,0.75)" : "none"};
    background: ${props => props.background};
    border-radius: 30px;
    padding: ${props => props.detalhes ? "0 0 10px 0" : "0 15px 20px 0"};
    
    
`

export const DivConteudo = styled.div<CardStyledProps>`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.alignItens};
    justify-content: center;
    border-radius: 10px;
    width: ${props => props.detalhes ? "80%" : "auto"};
    
`

export const DivGrafico = styled.div<CardStyledProps>`
    display: ${props => props.detalhes ? "none" : "flex"};
    align-items: center;
    justify-content: center;
    margin: ${props => props.detalhes ? "0 0 0 0" : "0 0 0 0"}
`

export const SpanGrafico = styled.span<CardStyledProps>`
    display: flex;
    align-items: center;
    margin: 30px 10px 0 0;
`
export const DivValores = styled.div<CardStyledProps>`
    display: flex;
    align-items: center;
    gap: 40px;
    margin: ${props => props.detalhes ? "0" : "0 0 0 0"};
    height: ${props => props.detalhes ? "60px" : "180px"};
    
`

export const PCard = styled.p<CardStyledProps>`
    color:  ${props => props.colorTextCard};
    font-size: ${props => props.detalhes ? "22px" : "14px"};
    margin: ${props => props.detalhes ? "22px 0" : "10px 0 0 0"};
`

export const PQuantidade = styled.p<CardStyledProps>`
    color: ${props => props.colorTextQuantity};
    font-size: 32px;
    font-weight: 700;
`

export const PPorcentagem = styled.p<CardStyledProps>`
    color: ${theme.palette.primary.contrastText};
    background: ${props => props.positive ? theme.palette.success.main : theme.palette.error.main};
    font-size: 14px;
    padding: 5px;
    border-radius: 100px;
    
`