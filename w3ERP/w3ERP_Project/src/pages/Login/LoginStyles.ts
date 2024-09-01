import styled from "styled-components";
import { theme } from "../../styles/themeStyles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


export const MainLogin = styled.main`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: 'Sora', sans-serif;
    background: #ffffff;
`
export const SectionLogin1 = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 100%;
`
export const BoxStyled = styled(Box)`
display: flex;
flex-direction: column;
flexWrap: wrap;
width: 400px;
`

export const SectionLogin2 = styled.section`
    display: flex;
    justify-content: flex-end;
    width: 50%;
    height: 100%;
`

export const TextFieldStyled = styled(TextField)`
width: 400px; 
height: 67px; 


`

export const DivSpanLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 85px;

`

export const ImgLogin = styled.img`
    width: 100wh;
    height: 100vh;
`

export const ButtonLogin = styled.button`
    width: 400px;
    height: 67px;
    background: ${props => props.theme.palette.secondary.main};
    font-size: 16px;
    border-radius: 8px;
    color: #FFFFFF;
    border: none;
    margin-top: 30px;
    font-weight: 600;

    &:hover{
        background: ${props => props.theme.palette.primary.main};
    }
`