import styled from "styled-components";

interface CardStyled {
    positive?: boolean
    background?: string
    alignItens?: string
    detalhes?: boolean
    colorTextCard?: string
    colorTextQuantity?: string
}

export const DivCard = styled.div<CardStyled>`
    display: flex;
    flex-direction:column;
    flex-wrap: wrap;
    align-content: center;
    align-items: flex-start;
    justify-content: space-between;
    width: 300px;
    height: 124px;
    box-shadow: ${({detalhes}) => detalhes ? "0px 0px 37px -10px rgba(0,0,0,0.75)" : "none"};
    background: ${({background}) => background};
    border-radius: 30px;
    padding: ${({detalhes}) => detalhes ? "0 0 10px 0" : "0 15px 20px 0"};
    
    
`

export const DivConteudo = styled.div<CardStyled>`
    display: flex;
    flex-direction: column;
    align-items: ${({alignItens}) => alignItens};
    justify-content: center;
    border-radius: 10px;
    width: ${({detalhes}) => detalhes ? "80%" : "auto"};
    
`

export const DivGrafico = styled.div<CardStyled>`
    display: ${({detalhes}) => detalhes ? "none" : "flex"};
    align-items: center;
    justify-content: center;
    margin: ${({detalhes}) => detalhes ? "0 0 0 0" : "0 0 0 0"}
`

export const SpanGrafico = styled.span<CardStyled>`
    display: flex;
    align-items: center;
    margin: 30px 10px 0 0;
`
export const DivValores = styled.div<CardStyled>`
    display: flex;
    align-items: center;
    gap: 40px;
    margin: ${({detalhes}) => detalhes ? "0" : "0 0 0 0"};
    height: ${({detalhes}) => detalhes ? "60px" : "180px"};
    
`

export const PCard = styled.p<CardStyled>`
    color:  ${({colorTextCard}) => colorTextCard};
    font-size: ${({detalhes}) => detalhes ? "22px" : "14px"};
    margin: ${({detalhes}) => detalhes ? "22px 0" : "10px 0 0 0"};
`

export const PQuantidade = styled.p<CardStyled>`
    color: ${({colorTextQuantity}) => colorTextQuantity};
    font-size: 32px;
    font-weight: 700;
`

export const PPorcentagem = styled.p<CardStyled>`
    color: ${({theme}) => theme.palette.primary.contrastText};
    background: ${({positive, theme}) => positive ? theme.palette.success.main : theme.palette.error.main};
    font-size: 14px;
    padding: 5px;
    border-radius: 100px;
    
`