import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import React from "react";
import InputPassword from "../components/inputPassword";
import imgLogin from "../img/Frame61.png"

const FormLogin = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <main>
        <section>
          <h4>Seja bem-vindo</h4>
          <h2>Realize seu Login</h2>
          <form>
            <TextField
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              placeholder="Insira seu email"
            />
            <InputPassword
              handleClick={handleClickShowPassword}
              handleMouseDown={handleMouseDownPassword}
              show={showPassword}
            />
            <section>
              <span>
                {" "}
                <Checkbox {...label} /> Lembrar-me{" "}
              </span>
              <span>Esqueci minha senha</span>
            </section>
            <button type="submit">Entrar</button>
          </form>
        </section>
        <section>
          <img src={imgLogin} alt="imgLogin" />
        </section>
      </main>
    </>
  );
};

export default FormLogin;
