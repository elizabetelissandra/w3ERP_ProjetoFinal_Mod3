import styled from "styled-components";

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