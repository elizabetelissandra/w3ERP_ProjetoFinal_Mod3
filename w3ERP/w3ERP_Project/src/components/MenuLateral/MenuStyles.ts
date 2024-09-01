import styled from "styled-components";
import { Link } from "react-router-dom";

interface Menu {
  isOpen: boolean;
}

export const AsideStyles = styled.aside<Menu>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({isOpen}) => (isOpen ? "space-between" : "flex-start")};
  max-width: 350px;
  
  background: ${({theme}) => (theme.palette.primary.main)};
  font-family: "Sora", sans-serif;
  gap: ${({isOpen}) => (isOpen ? "20px" : "300px")};
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
  gap: 50px;
`;

export const DivIcones = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 50px;
&:hover {
  cursor: pointer;
  background-color: ${({theme}) => (theme.palette.info.main)};
  border-radius: 10px;
  color: ${({theme}) => (theme.palette.primary.contrastText)};
  transition: all 0.5s ease-in-out;
  padding: 10px;
}
  
`;

export const ImgIcones = styled.img`
  width: 30px;
  height: 30px;

`;

export const LinkSttyled = styled(Link)`
 display: flex;
 justify-content: center;
 align-items: center;
text-decoration: none;
`

export const Span = styled.span`
  font-size: 16px;
  color: ${({theme}) => (theme.palette.primary.contrastText)};
`;

export const ImgFaleConosco = styled.img`
  width: 200px;
  margin-bottom: 50px;
`;
