import styled from "styled-components";
import {  ButtonsProps  } from "./buttonOne";


interface ButtonStyledProps extends ButtonsProps {

    isSelected: boolean;
}

export const ButtonOneStyled = styled.button<ButtonStyledProps>`
    background: ${ ({theme, isSelected})  => isSelected ? theme.palette.success.main : theme.palette.background.paper};
    color: ${({isSelected, theme}) => isSelected ? theme.palette.primary.contrastText : theme.palette.text.primary};
    padding: 10px;
    border-radius: 10px;
    border: none;
    width: 100px;
    transition: 0.5s;
`

export const ButtonTwoStyled = styled.button<ButtonStyledProps>`
    background: ${({theme, isSelected}) => isSelected ? theme.palette.error.main : theme.palette.background.paper};
    color: ${({theme, isSelected}) =>isSelected ? theme.palette.primary.contrastText : theme.palette.text.primary};
    padding: 10px;
    border-radius: 10px;
    border: none;
    width: 100px;
    transition: 0.5s;
`