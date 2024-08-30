import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardLogoutStyled = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 600px;
  left: 1920px;
  background-color: ;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 2560px) {
    top: 0;
    right: 0;
    bottom: 600px;
    left: 1100px;
  }

  @media (max-width: 1920px) {
    top: 0;
    right: 0;
    bottom: 600px;
    left: 780px;
  }

  @media (max-width: 1680px) {
    width: 86%;
    top: 0;
    right: 0;
  }

  @media (max-width: 1440px) {
    width: 66%;
    top: 0;
    right: 0;
    bottom: 450px;
  }

    p {
        display: flex;
        align-items: center;
        gap: 10px;
        color: ${props => props.theme.palette.text.primary};
        font-size: 20px; 
        &:hover {
            cursor: pointer;
            color: ${props => props.theme.palette.primary.main};
            transition: 0.5s;
        }
    }

    hr {
        width: 100%;
        height: 1px;
        border: none;
        background-color: ${props => props.theme.palette.text.primary};
    }

    

`



export const CardLogoutContent = styled.div`
background-color: ${props => props.theme.palette.background.paper};
  padding: 20px;
  border-radius: 40px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`
export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${props => props.theme.palette.background.paper};
  color: ${props => props.theme.palette.primary.dark};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  &:hover {
    background-color: ${props => props.theme.palette.background.default};
    transition: 0.5s;
  }
`

export const LinkStyled = styled(Link)`
display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${props => props.theme.palette.background.paper};
  color: ${props => props.theme.palette.primary.dark};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  &:hover {
    background-color: ${props => props.theme.palette.background.default};
    transition: 0.5s;
  }
`

// Media queries para diferentes larguras de tela
