import Checkbox from "@mui/material/Checkbox";

import imgLogin from "../../ui/img/Frame61.png";
import {
  ButtonLogin,
  DivSpanLogin,
  ImgLogin,
  MainLogin,
  SectionLogin1,
  SectionLogin2,
} from "./LoginStyles";
import { theme } from "../../context/themeContext";
import { validateEmail, validatePassword } from "../../utils/validation";
import { ChangeEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputPassword from "../../components/InputsLogin/inputPassword";

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(validateEmail(value));
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordValid(validatePassword(value));
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (emailValid && passwordValid) {
      window.location.href = "/Dashboard";
    } else {
      alert("Email ou senha inválidos");
    }
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <MainLogin>
        <SectionLogin1>
          <form onSubmit={handleSubmit}>
            <h4>Seja bem-vindo</h4>
            <h2>Realize seu Login</h2>
            <Box sx={{ display: "flex", flexWrap: "wrap", width: "400px" }}>
              <TextField
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
                placeholder="Insira seu email"
                value={email}
                onChange={handleEmailChange}
                color={emailValid ? "success" : "primary"}
                sx={{ width: "400px", height: "67px" }}
              />
              <InputPassword
                handleClick={handleClickShowPassword}
                handleMouseDown={handleMouseDownPassword}
                show={showPassword}
                value={password}
                passwordValid={passwordValid}
                onChange={handlePasswordChange}
              />
            </Box>
            <DivSpanLogin>
              <span>
                {" "}
                <Checkbox {...label} /> Lembrar-me{" "}
              </span>
              <a>Esqueci minha senha</a>
            </DivSpanLogin>
            <ButtonLogin theme={theme} type="submit">
              Entrar
            </ButtonLogin>
          </form>
        </SectionLogin1>
        <SectionLogin2>
          <ImgLogin src={imgLogin} alt="imgLogin" />
        </SectionLogin2>
      </MainLogin>
    </>
  );
};

export default FormLogin;
