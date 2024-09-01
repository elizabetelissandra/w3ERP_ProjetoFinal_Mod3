import imgLogin from "../../ui/img/Frame61.png";
import { theme } from "../../styles/themeStyles";
import {
  BoxStyled,
  ButtonLogin,
  DivSpanLogin,
  ImgLogin,
  MainLogin,
  SectionLogin1,
  SectionLogin2,
  TextFieldStyled,
} from "./LoginStyles";
import { validateEmail, validatePassword } from "../../utils/validation/validation";
import { ChangeEvent, useState } from "react";
import InputPassword from "../../components/InputsLogin/inputPassword";
import { CheckboxNeon } from "../../components/CheckBox/CheckBox";
import Modal from "../../components/Modal/Modal";


const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

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
      handleOpen()
    }
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };


  return (
    <>
      <MainLogin>
        <SectionLogin1>
          <form onSubmit={handleSubmit}>
            <h4>Seja bem-vindo</h4>
            <h2>Realize seu Login</h2>
            <BoxStyled>
              <TextFieldStyled
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
                placeholder="Insira seu email"
                value={email}
                onChange={handleEmailChange}
                color={emailValid ? "success" : "primary"}
                focused
              />
              <InputPassword
                handleClick={handleClickShowPassword}
                handleMouseDown={handleMouseDownPassword}
                show={showPassword}
                value={password}
                passwordValid={passwordValid}
                onChange={handlePasswordChange}
                
              />
            </BoxStyled>
            <DivSpanLogin>
              <span>
                {" "}
                <CheckboxNeon /> {" "}
              </span>
              <a>Esqueci minha senha</a>
            </DivSpanLogin>
            <ButtonLogin theme={theme} type="submit">
              Entrar
            </ButtonLogin>
          </form>
          <Modal OpenModal={openModal} onClose={handleClose} />
        </SectionLogin1>
        <SectionLogin2>
          <ImgLogin src={imgLogin} alt="imgLogin" />
        </SectionLogin2>
      </MainLogin>
    </>
  );
};

export default FormLogin;
