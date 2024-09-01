import logoW3 from "../../ui/img/logoW3.png";
import FaleConosco from "../../ui/img/imagemW3.png";

import {
  AsideStyles,
  DivIcones,
  ImgFaleConosco,
  ImgIcones,
  ImgLogo,
  Nav,
  Span,
  LinkSttyled,
  ImgLogoReduzida,
} from "./MenuStyles";
import ImgDashBoard from "../../ui/img/ImgDashboard.png";
import ImgPredicoes from "../../ui/img/ImgPredicoes.png";
import ImgProdutos from "../../ui/img/ImgProdutos.png";
import { theme } from "../../styles/themeStyles";
import W3reduzida from "../../ui/img/w3reduzida.png";
import React from "react";

interface MenuProps {
  isOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({isOpen}) => {
  return (
    <>
      {isOpen ? (
        
        <AsideStyles theme={theme} isOpen={isOpen}>
          <Nav>
          <ImgLogo src={logoW3} alt="logo da W3" />

          
            <LinkSttyled to="/Dashboard">
              <DivIcones theme={theme}>
                <ImgIcones src={ImgDashBoard} alt="Imagem de Dashboard" />
                <Span theme={theme}>DashBoard</Span>
              </DivIcones>
            </LinkSttyled>
            <LinkSttyled to="/Predicoes">
              <DivIcones theme={theme}>
                <ImgIcones src={ImgPredicoes} alt="Imagem de Dashboard" />
                <Span theme={theme}>Predições</Span>
              </DivIcones>
            </LinkSttyled>
            <LinkSttyled to="/Produtos">
              <DivIcones theme={theme}>
                <ImgIcones src={ImgProdutos} alt="Imagem de Dashboard" />
                <Span theme={theme}>Produtos</Span>
              </DivIcones>
            </LinkSttyled>
          </Nav>
          <div>
            <ImgFaleConosco src={FaleConosco} alt="Imagem de Fale Conosco" />
          </div>
        </AsideStyles>
      ) : (
        <AsideStyles theme={theme} isOpen={isOpen}>
          <Nav>
          <ImgLogoReduzida src={W3reduzida} alt="logo da W3" />
          
            <LinkSttyled to="/Dashboard">
              <DivIcones theme={theme}>
                <ImgIcones src={ImgDashBoard} alt="Imagem de Dashboard" />
              </DivIcones>
            </LinkSttyled>
            <LinkSttyled to="/Predicoes">
              <DivIcones theme={theme}>
                <ImgIcones src={ImgPredicoes} alt="Imagem de Dashboard" />
              </DivIcones>
            </LinkSttyled>
            <LinkSttyled to="/Produtos">
              <DivIcones theme={theme}>
                <ImgIcones src={ImgProdutos} alt="Imagem de Dashboard" />
              </DivIcones>
            </LinkSttyled>
          </Nav>
        </AsideStyles>
      )}
    </>
  );
};

export default Menu;
