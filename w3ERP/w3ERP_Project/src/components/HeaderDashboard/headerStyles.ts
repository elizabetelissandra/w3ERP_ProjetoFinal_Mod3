import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const DivHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-right: 20px;
`

export const FigureIMG = styled.figure`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 10px;

    img {
        width: 100%;
        height: 100%;
    }
`

export const FigureHeader = styled.figcaption`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const SpanNome = styled.span`
    font-size: 16px;
    font-weight: bold;
`