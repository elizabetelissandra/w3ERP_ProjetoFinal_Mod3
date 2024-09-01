import Header from "../../components/HeaderDashboard/header";
import Menu from "../../components/MenuLateral/Menu";
import {
  CalendarioSpan,
  DivBotoes,
  DivButton,
  DivCards,
  DivDashBoard,
  DivDashboard,
  DivHeader,
  DivImgName,
  DivTabela,
  DivTabelas,
  DivTituloDashboard,
  H3,
  ImgProdutos,
  SpanMes,
} from "./DashboardStyles";
import calendario from "../../ui/img/calendario.png";
import TablesComponent from "../../components/Tabelas/TablesComponent";

import ImgProduto from "../../ui/img/ImgProdutos.png";
import ImgClientes from "../../ui/img/ClientesDashboard.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { Customer, Product } from "../../types/DashboardTypes";
import { IconButton } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router";
import { TdId } from "../../components/Tabelas/TablesComponentStyles";
import { ButtonOne } from "../../components/buttonsSwitch/buttonOne";
import { ButtonTwo } from "../../components/buttonsSwitch/buttonTwo";
import { theme } from "../../styles/themeStyles";
import { useMenu } from "../../context/menuContext";
import renderCardDashboard from "../../utils/dashboard/CardDashboardRender";

const Dashboard = () => {
  const [produtos, setProdutos] = useState<Product[]>([]);
  const [clientes, setClientes] = useState<Customer[]>([]);
  const [dataTableProdutos, setDataTableProdutos] = useState<Product[]>([]);
  const [dataTableClientes, setDataTableClientes] = useState<Customer[]>([]);
  const [productsClients, setProductsClients] = useState<Customer[]>([]);
  const [selectedButton, setSelectedButton] = useState<string | null>("");
  const [activeButton, setActiveButton] = useState<string | null>("");
  const navigate = useNavigate();
  const { menu, toggleMenu } = useMenu();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/products");
      setDataTableProdutos(response.data.slice(0, 10));
      setProdutos(response.data);
      console.log("Produtos", response.data);

      const response2 = await axios.get("http://localhost:3000/customers");
      setDataTableClientes(response2.data.slice(0, 10));
      setClientes(response2.data);
      setProductsClients(response2.data.products);
      console.log("Clientes", response2);
    };
    fetchData();
  }, []);

  const handleButtonClick = (buttonName: string) => {
    if (activeButton === buttonName) {
      setActiveButton(null);
    } else {
      setActiveButton(buttonName);
      handleClickButtonSwitch(buttonName);
    }
  };

  const handleClickButtonSwitch = (buttonName: string) => {

    if (buttonName === "buttonAlto") {
      setDataTableProdutos(
        produtos
          .slice()
          .sort((a, b) => b.percentage - a.percentage)
          .slice(0, 11)
      );
    } else if (buttonName === "buttonBaixo") {
      setDataTableProdutos(
        produtos
          .slice()
          .sort((a, b) => a.percentage - b.percentage)
          .slice(0, 11)
      );
    } else if (buttonName === "botaoAlto") {
      setDataTableClientes(
        clientes
          .slice()
          .sort((a, b) => b.percentage - a.percentage)
          .slice(0, 11)
      );
    } else if (buttonName === "botaoBaixo") {
      setDataTableClientes(
        clientes
          .slice()
          .sort((a, b) => a.percentage - b.percentage)
          .slice(0, 11)
      );
    }
  };

  const handleClickRow = (row: Product | Customer) => {
    const type = row.hasOwnProperty("amount") ? "products" : "customers";
    navigate(`/Detalhamento/${type}/${row.id}`);
  };

  return (
    <DivDashboard>
      <Menu isOpen={menu} />
      <DivHeader>
        <Header onClick={toggleMenu} />
        <DivDashBoard>
          <DivTituloDashboard>
            <H3>Dashboard</H3>
            <CalendarioSpan>
              <img src={calendario} alt="icone de calendario" /> Mostrar:{" "}
              <SpanMes>Esse mês</SpanMes>
            </CalendarioSpan>
          </DivTituloDashboard>
          <DivCards>
            {renderCardDashboard(
              "Total Produtos em alta",
              "#010d42",
              true,
              "#C5CFFF",
              "#fff",
              produtos.filter((produto) => produto.percentage >= 0).length,
              Number(
                produtos
                  .filter((produto) => produto.percentage >= 0)
                  .reduce(
                    (acumulador, produto) => acumulador + produto.percentage,
                    0
                  )
              )
            )}
            {renderCardDashboard(
              "Total Produtos em baixa",
              "#010d42",
              true,
              "#C5CFFF",
              "#fff",
              produtos.filter((produto) => produto.percentage < 0).length,
              Number(
                produtos
                  .filter((produto) => produto.percentage < 0)
                  .reduce(
                    (acumulador, produto) => acumulador + produto.percentage,
                    0
                  )
              )
            )}
            {renderCardDashboard(
              "Total Clientes em alta",
              "#010d42",
              true,
              "#C5CFFF",
              "#fff",
              clientes.filter((cliente) => cliente.percentage >= 0).length,
              Number(
                clientes
                  .filter((cliente) => cliente.percentage >= 0)
                  .reduce(
                    (acumulador, cliente) => acumulador + cliente.percentage,
                    0
                  )
              )
            )}
              {renderCardDashboard(
              "Total Clientes em baixa",
              "#010d42",
              true,
              "#C5CFFF",
              "#fff",
              clientes.filter((cliente) => cliente.percentage < 0).length,
              Number(
                clientes
                  .filter((cliente) => cliente.percentage < 0)
                  .reduce(
                    (acumulador, cliente) => acumulador + cliente.percentage,
                    0
                  )
              )
            )}
          </DivCards>
        </DivDashBoard>
        <DivTabelas>
          <DivTabela>
            <DivBotoes>
              <DivImgName>
                <ImgProdutos src={ImgProduto} alt="imagem de produtos" />
                <h3>Produtos</h3>
              </DivImgName>
              <DivButton>
                <ButtonOne
                  isSelected={activeButton === "buttonAlto"}
                  onClick={() => handleButtonClick("buttonAlto")}
                />
                <ButtonTwo
                  isSelected={activeButton === "buttonBaixo"}
                  onClick={() => handleButtonClick("buttonBaixo")}
                />
              </DivButton>
            </DivBotoes>
            {dataTableProdutos && (
              <TablesComponent
                headers={["ID", "Produto", "Percentual", ""]}
                width={"600px"}
                backgroundBody={theme.palette.primary.contrastText}
                backgroundColor={theme.palette.primary.main}
                colorHeader={theme.palette.primary.contrastText}
              >
                {dataTableProdutos.map((produtos) => (
                  <tr>
                    <TdId>{produtos.id}</TdId>
                    <TdId>{produtos.name}</TdId>
                    <TdId>{(produtos.percentage * 100).toFixed(2)}%</TdId>
                    <TdId>
                      <IconButton>
                        <KeyboardArrowRightIcon
                          onClick={() => handleClickRow(produtos)}
                        />
                      </IconButton>
                    </TdId>
                  </tr>
                ))}
              </TablesComponent>
            )}
          </DivTabela>
          <DivTabela>
            <DivBotoes>
              <DivImgName>
                <ImgProdutos src={ImgClientes} alt="imagem de produtos" />
                <h3>Clientes</h3>
              </DivImgName>
              <DivButton>
                <ButtonOne
                  isSelected={activeButton === "botaoAlto"}
                  onClick={() => handleButtonClick("botaoAlto")}
                />
                <ButtonTwo
                  isSelected={activeButton === "botaoBaixo"}
                  onClick={() => handleButtonClick("botaoBaixo")}
                />
              </DivButton>
            </DivBotoes>
            {dataTableClientes && (
              <TablesComponent
                width={"600px"}
                headers={["ID", "Produto", "Percentual", ""]}
                backgroundColor={theme.palette.primary.main}
                backgroundBody={theme.palette.primary.contrastText}
                colorHeader={theme.palette.primary.contrastText}
              >
                {dataTableClientes.map((produtos) => (
                  <tr>
                    <TdId>{produtos.id}</TdId>
                    <TdId>{produtos.name}</TdId>
                    <TdId>{(produtos.percentage * 100).toFixed(2)}%</TdId>
                    <TdId>
                      <IconButton>
                        <KeyboardArrowRightIcon
                          onClick={() => handleClickRow(produtos)}
                        />
                      </IconButton>
                    </TdId>
                  </tr>
                ))}
              </TablesComponent>
            )}
          </DivTabela>
        </DivTabelas>
      </DivHeader>
    </DivDashboard>
  );
};

export default Dashboard;
