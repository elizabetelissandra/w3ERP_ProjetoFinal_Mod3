import Header from "../../components/HeaderDashboard/header";
import Menu from "../../components/MenuLateral/Menu";
import { theme } from "../../context/themeContext";
import {
  CalendarioSpan,
  DivBotoes,
  DivCards,
  DivDashBoard,
  DivDashboard,
  DivHeader,
  DivTabela,
  DivTabelas,
  DivTituloDashboard,
  H3,
  ImgProdutos,
  SpanMes,
} from "./DashboardStyles";
import calendario from "../../ui/img/calendario.png";
import Card from "../../components/Cards/Card";
import Tables from "../../components/Tabelas/TablesDashBoard";
import ButtonSwitch from "../../components/buttonsSwitch/button";
import ImgProduto from "../../ui/img/ImgProdutos.png";
import ImgClientes from "../../ui/img/ClientesDashboard.png";

const Dashboard = () => {
  return (
    <DivDashboard>
      <Menu />
      <DivHeader>
        <Header />
        <DivDashBoard>
          <DivTituloDashboard>
            <H3>Dashboard</H3>
            <CalendarioSpan>
              <img src={calendario} alt="icone de calendario" /> Mostrar:{" "}
              <SpanMes>Esse mês</SpanMes>
            </CalendarioSpan>
          </DivTituloDashboard>
          <DivCards>
            <Card
              produto={"Produtos"}
              baixa={"alta"}
              quantidade={120}
              porcentagem={"+13%"}
            />
            <Card
              produto={"Produtos"}
              baixa={"alta"}
              quantidade={120}
              porcentagem={"+13%"}
            />
            <Card
              produto={"Produtos"}
              baixa={"alta"}
              quantidade={120}
              porcentagem={"+13%"}
            />
            <Card
              produto={"Produtos"}
              baixa={"alta"}
              quantidade={120}
              porcentagem={"+13%"}
            />
          </DivCards>
        </DivDashBoard>
        <DivTabelas>
          <DivTabela>
            <DivBotoes>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <ImgProdutos src={ImgProduto} alt="imagem de produtos" />
                <h3>Produtos</h3>
              </div>
              <div>
                <ButtonSwitch
                  type="button"
                  className="button"
                  onClick={() => {}}
                  buttonName="Em alta"
                />
                <ButtonSwitch
                  type="button"
                  className="button"
                  onClick={() => {}}
                  buttonName="Em baixa"
                />
              </div>
            </DivBotoes>
            <Tables />
          </DivTabela>
          <DivTabela>
            <DivBotoes>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <ImgProdutos src={ImgClientes} alt="imagem de produtos" />
                <h3>Clientes</h3>
              </div>
              <div>
                <ButtonSwitch
                  type="button"
                  className="button"
                  onClick={() => {}}
                  buttonName="Em alta"
                />
                <ButtonSwitch
                  type="button"
                  className="button"
                  onClick={() => {}}
                  buttonName="Em baixa"
                />
              </div>
              </DivBotoes>
              <Tables />
            
          </DivTabela>
        </DivTabelas>
      </DivHeader>
    </DivDashboard>
  );
};

export default Dashboard;
