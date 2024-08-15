import logoW3 from "../../ui/img/logoW3.png";
import FaleConosco from "../../ui/img/imagemW3.png";
import { theme } from "../../context/themeContext";
import { AsideStyles, DivIcones, ImgFaleConosco, ImgIcones, ImgLogo, Nav, Span } from "./MenuStyles";
import ImgDashBoard from "../../ui/img/ImgDashboard.png";
import ImgPredicoes from "../../ui/img/ImgPredicoes.png";
import ImgProdutos from "../../ui/img/ImgProdutos.png";

const Menu = () => {
  return (
    <>
      <AsideStyles>
        <ImgLogo src={logoW3} alt="logo da W3" />

        <Nav>
          <DivIcones>
            <ImgIcones src={ImgDashBoard} alt="Imagem de Dashboard" />
            <Span>DashBoard</Span>
          </DivIcones>
          <DivIcones>
            <ImgIcones src={ImgPredicoes} alt="Imagem de Dashboard" />
            <Span>Predições</Span>
          </DivIcones>
          <DivIcones>
            <ImgIcones src={ImgProdutos} alt="Imagem de Dashboard" />
            <Span>Produtos</Span>
          </DivIcones>
        </Nav>
        <div>
          <ImgFaleConosco src={FaleConosco} alt="Imagem de Fale Conosco" />
        </div>
      </AsideStyles>
    </>
  );
};

export default Menu;
