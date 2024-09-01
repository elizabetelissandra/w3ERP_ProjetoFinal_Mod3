import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import MenuIcon from "@mui/icons-material/Menu";
import UserIcon from "../../ui/img/user.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { DivHeader, FigureHeader, FigureIMG, HeaderStyled, SpanNome } from "./headerStyles";
import React from "react";
import CardLogout from "../Cards/CardLogout/CardLogout";

interface HeaderProps {
  onClick: () => void;
}

const Header: React.FC<HeaderProps> = ({onClick}) => {
 const [isShowCard, setIsShowCard] = React.useState(false);

 const handleClick = () => {
   setIsShowCard(!isShowCard);
 };

  return (
    <>
      <HeaderStyled>
        <div>
          <Stack direction="row" spacing={1}>
            <IconButton aria-label="menu" onClick={onClick}>
              <MenuIcon />
            </IconButton>
          </Stack>
        </div>
        <DivHeader>
          <FigureIMG>
            <img src={UserIcon} alt="icone do usuário" />
          </FigureIMG>
          <FigureHeader>
            <SpanNome>Elizabete Lissandra</SpanNome>
            <span>elizabete@gmail.com</span>
          </FigureHeader>
          <IconButton onClick={handleClick}>
          <KeyboardArrowDownIcon  />
          {isShowCard && <div><CardLogout/></div>}
          </IconButton>
          
        </DivHeader>
      </HeaderStyled>
    </>
  );
};

export default Header;
