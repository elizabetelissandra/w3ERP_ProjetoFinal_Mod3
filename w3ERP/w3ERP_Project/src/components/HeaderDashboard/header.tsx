import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import MenuIcon from "@mui/icons-material/Menu";
import UserIcon from "../../ui/img/user.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { DivHeader, FigureHeader, FigureIMG, HeaderStyled, SpanNome } from "./headerStyles";

const Header = () => {
  return (
    <>
      <HeaderStyled>
        <div>
          <Stack direction="row" spacing={1}>
            <IconButton aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Stack>
        </div>
        <DivHeader>
          <FigureIMG>
            <img src={UserIcon} alt="icone do usuário" />
          </FigureIMG>
          <FigureHeader>
            <SpanNome>Nome do Usuario</SpanNome>
            <span>E-mail</span>
          </FigureHeader>
          <KeyboardArrowDownIcon />
        </DivHeader>
      </HeaderStyled>
    </>
  );
};

export default Header;
