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

import W3reduzida from "../../ui/img/w3reduzida.png";
import React from "react";

interface MenuProps {
  isOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({isOpen}) => {
  return (
    <>
      {isOpen ? (
        <AsideStyles isOpen={isOpen}>
          <ImgLogo src={logoW3} alt="logo da W3" />

          <Nav>
            <LinkSttyled to="/Dashboard">
              <DivIcones>
                <ImgIcones src={ImgDashBoard} alt="Imagem de Dashboard" />
                <Span>DashBoard</Span>
              </DivIcones>
            </LinkSttyled>
            <LinkSttyled to="/Predicoes">
              <DivIcones>
                <ImgIcones src={ImgPredicoes} alt="Imagem de Dashboard" />
                <Span>Predições</Span>
              </DivIcones>
            </LinkSttyled>
            <LinkSttyled to="/Produtos">
              <DivIcones>
                <ImgIcones src={ImgProdutos} alt="Imagem de Dashboard" />
                <Span>Produtos</Span>
              </DivIcones>
            </LinkSttyled>
          </Nav>
          <div>
            <ImgFaleConosco src={FaleConosco} alt="Imagem de Fale Conosco" />
          </div>
        </AsideStyles>
      ) : (
        <AsideStyles isOpen={isOpen}>
          <ImgLogoReduzida src={W3reduzida} alt="logo da W3" />
          <Nav>
            <LinkSttyled to="/Dashboard">
              <DivIcones>
                <ImgIcones src={ImgDashBoard} alt="Imagem de Dashboard" />
              </DivIcones>
            </LinkSttyled>
            <LinkSttyled to="/Predicoes">
              <DivIcones>
                <ImgIcones src={ImgPredicoes} alt="Imagem de Dashboard" />
              </DivIcones>
            </LinkSttyled>
            <LinkSttyled to="/Produtos">
              <DivIcones>
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
