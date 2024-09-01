import { BrowserRouter, Route, Routes as RoutesRouter } from "react-router-dom";
import Login from "../../pages/Login/Login";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Detalhamento from "../../pages/Detalhamento/Detalhamento";

import Predicoes from "../../pages/Predicoes/Predicoes";
import Predicao from "../../pages/Predicao/Predicao";
import Produtos from "../../pages/Produtos/Produtos.tsx";

const Routes= () => {
  return (
    <>
    <BrowserRouter>
      <RoutesRouter>
        <Route element={<Login/>} path="/" />
        <Route element={<Dashboard/>} path="/Dashboard" />
        <Route element={<Detalhamento/>} path="/Detalhamento/:type/:id"/>
        <Route element={<Predicoes/>} path="/Predicoes" />
        <Route element={<Predicao/>} path="/Predicao/:id" />
        <Route element={<Produtos/>} path="/Produtos" />
        
      </RoutesRouter>
    </BrowserRouter>
    </>
  );
};

export default Routes;
