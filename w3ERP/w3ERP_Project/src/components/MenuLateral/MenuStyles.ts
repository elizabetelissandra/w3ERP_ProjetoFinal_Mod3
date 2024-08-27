import styled from "styled-components";
import { theme } from "../../context/themeContext";
import { Link } from "react-router-dom";

interface MenuProps {
  isOpen: boolean;
}

export const AsideStyles = styled.aside<MenuProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => (props.isOpen ? "space-between" : "flex-start")};
  max-width: 300px;
  background: ${theme.palette.primary.main};
  font-family: "Sora", sans-serif;
  gap: ${(props) => (props.isOpen ? "20px" : "300px")};
  padding: 20px;
`;
export const ImgLogo = styled.img`
  width: 150px;
  margin-top: 50px;
`;

export const ImgLogoReduzida = styled.img`
  width: 83px;
  margin-top: 50px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

export const DivIcones = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 50px;
`;

export const ImgIcones = styled.img`
  width: 30px;
  height: 30px;

`;

export const LinkSttyled = styled(Link)`
width: 100%;
margin-left: 40px;
`

export const Span = styled.span`
  font-size: 16px;
  color: ${theme.palette.primary.contrastText};
`;

export const ImgFaleConosco = styled.img`
  width: 200px;
  margin-bottom: 50px;
`;
