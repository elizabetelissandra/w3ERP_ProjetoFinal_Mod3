import styled from "styled-components";
import { ButtonOne, ButtonsProps, ButtonTwo } from "./buttonOne";
import { theme } from "../../context/themeContext";

interface ButtonStyledProps extends ButtonsProps {

    isSelected: boolean;
}

export const Button = styled.button`
    background: ${props => props.theme.palette.error.main};
    border: none;
    border-radius: 10px;
    color: ${props => props.theme.palette.primary.contrastText};
    cursor: pointer;
    font-size: 12px;
    font-weight: 300;
    padding: 10px;
    width: 100px;
`

export const ButtonOneStyled = styled.button<ButtonStyledProps>`
    background: ${ props => props.isSelected ? theme.palette.success.main : theme.palette.background.paper};
    color: ${props => props.isSelected ? theme.palette.primary.contrastText : theme.palette.text.primary};
    padding: 10px;
    border-radius: 10px;
    border: none;
    width: 100px;
    transition: 0.5s;
`

export const ButtonTwoStyled = styled.button<ButtonStyledProps>`
    background: ${ props => props.isSelected ? theme.palette.error.main : theme.palette.background.paper};
    color: ${props => props.isSelected ? theme.palette.primary.contrastText : theme.palette.text.primary};
    padding: 10px;
    border-radius: 10px;
    border: none;
    width: 100px;
    transition: 0.5s;
`