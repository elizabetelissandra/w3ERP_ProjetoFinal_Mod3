import styled from "styled-components";
import {theme} from "../../context/themeContext";

export const DivDetalhamento = styled.div`
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

export const DivBackToDashboard = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    width: 100%;
    margin: 20px;
`

export const DivCards = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    gap: 20px;
    margin: 20px;
`

export const DivH3 = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    gap: 20px;
    margin-left: 40px;
`

export const DivBotoes = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: start;
    width: 100%;
    margin: 20px;
    gap: 20px;
`

export const H3 = styled.h3`
    color: ${theme.palette.primary.main};
    font-size: 32px;
    text-align: start;
`

export const ImgSetaCaindo = styled.img`
    background-color: ${theme.palette.error.main};
    padding: 10px;
    border-radius: 25%;
`

export const ImgSetaSubindo = styled.img`
    background-color: ${theme.palette.success.main};
    padding: 10px;
    border-radius: 25%;
`

export const TrTable = styled.tr`
    height: 50px;
`