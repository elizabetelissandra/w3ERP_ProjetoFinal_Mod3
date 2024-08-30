import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { ButtonStyled, CardLogoutContent, CardLogoutStyled, LinkStyled } from "./CardLogoutStyles";
import { theme } from "../../../context/themeContext";
import { Fade } from "@mui/material";
import {Transition } from 'react-transition-group';


const CardLogout = () => {
  return (
    <>
      <Transition mountOnEnter unmountOnExit in={true} timeout={300}>
        <Fade in={true} timeout={300}>
        
          <CardLogoutStyled theme={theme}>
            <CardLogoutContent theme={theme}>
              <ButtonStyled theme={theme}>
                <SettingsIcon /> Configurações
              </ButtonStyled>
              <hr />
              <LinkStyled to="/" theme={theme} >
                <LogoutIcon /> Sair
              </LinkStyled>
            </CardLogoutContent>
          </CardLogoutStyled>
        </Fade>
      </Transition>

      {/* <Transition mountOnEnter unmountOnExit in={!true} timeout={200}>
        <Fade in={!true} timeout={200}>
        <CardLogoutStyled theme={theme}>
            <CardLogoutContent theme={theme}>
              <p>
                <SettingsIcon /> Configurações
              </p>
              <hr />
              <p onClick={() => (window.location.href = "/")}>
                <LogoutIcon /> Sair
              </p>
            </CardLogoutContent>
          </CardLogoutStyled>
        </Fade>
      </Transition> */}
    </>
  );
};

export default CardLogout;
