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
  DivTabela,
  DivTabelas,
  DivTituloDashboard,
  H3,
  ImgProdutos,
  SpanMes,
} from "./DashboardStyles";
import calendario from "../../ui/img/calendario.png";
import Card from "../../components/Cards/CardsDashboard/Card";
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
import { ButtonOne, ButtonTwo } from "../../components/buttonsSwitch/buttonOne";
import { colors, theme } from "../../context/themeContext";
import { RadialBarDasboard } from "../../components/Graphic/Graphic";
import { useMenu } from "../../context/menuContext";

const Dashboard = () => {
  const [produtos, setProdutos] = useState<Product[]>([]);
  const [clientes, setClientes] = useState<Customer[]>([]);
  const [dataTableProdutos, setDataTableProdutos] = useState<Product[]>([]);
  const [dataTableClientes, setDataTableClientes] = useState<Customer[]>([]);
  const [productsClients, setProductsClients] = useState<Customer[]>([]);
  const [selectedButton, setSelectedButton] = useState<string | null>("");
  const [activeButton, setActiveButton] = useState<string | null>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const {menu, toggleMenu} = useMenu()

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
    setSelectedButton(buttonName);

    if (selectedButton === "buttonAlto") {
      setDataTableProdutos(
        produtos
          .slice()
          .sort((a, b) => b.percentage - a.percentage)
          .slice(0, 11)
      );
    } else if (selectedButton === "buttonBaixo") {
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
            <Card
              nome={"Total Produtos em alta"}
              backgroundColor={"#010d42"}
              havePercent={true}
              colorTextCard={"#C5CFFF"}
              colorTextQuantity={"#fff"}
              quantidade={
                produtos.filter((product) => product.percentage >= 0).length
              }
              porcentagem={Number(
                produtos
                  .filter((product) => product.percentage >= 0)
                  .reduce((acc, product) => acc + product.percentage, 0)
                  .toFixed(2)
              )}
            >
              <RadialBarDasboard
                percentageGraphic={Math.floor(Math.random() * 100)}
              />
            </Card>
            <Card
              nome={"Total Produtos em baixa"}
              backgroundColor={"#010d42"}
              havePercent={true}
              colorTextCard="#fff"
              colorTextQuantity={theme.palette.primary.contrastText}
              detalhes={false}
              quantidade={
                produtos.filter((product) => product.percentage < 0).length
              }
              porcentagem={Number(
                produtos
                  .filter((product) => product.percentage < 0)
                  .reduce((acc, product) => acc + product.percentage, 0)
                  .toFixed(2)
              )}
            >
              <RadialBarDasboard
                percentageGraphic={Math.floor(Math.random() * 100)}
              />
            </Card>
            <Card
              nome={"Total Clientes em alta"}
              backgroundColor={"#010d42"}
              havePercent={true}
              // colorText={theme.palette.primary.contrastText}
              colorTextCard="#fff"
              colorTextQuantity={theme.palette.primary.contrastText}
              quantidade={
                clientes.filter((client) => client.percentage >= 0).length
              }
              porcentagem={Number(
                clientes
                  .filter((client) => client.percentage > 0)
                  .reduce((acc, client) => acc + client.percentage, 0)
                  .toFixed(2)
              )}
            >
              <RadialBarDasboard
                percentageGraphic={Math.floor(Math.random() * 100)}
              />
            </Card>
            <Card
              nome={"Total Clientes em baixa"}
              backgroundColor={"#010d42"}
              havePercent={true}
              // colorText={theme.palette.primary.contrastText}
              colorTextCard={"#fff"}
              colorTextQuantity={"#fff"}
              quantidade={
                clientes.filter((client) => client.percentage < 0).length
              }
              porcentagem={Number(
                clientes
                  .filter((client) => client.percentage < 0)
                  .reduce((acc, client) => acc + client.percentage, 0)
                  .toFixed(2)
              )}
            >
              <RadialBarDasboard
                percentageGraphic={Math.floor(Math.random() * 100)}
              />
            </Card>
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
              >
                {dataTableProdutos.map((produtos) => (
                  <tr>
                    <TdId>{produtos.id}</TdId>
                    <td>{produtos.name}</td>
                    <td>{(produtos.percentage * 100).toFixed(2)}%</td>
                    <td>
                      <IconButton>
                        <KeyboardArrowRightIcon
                          onClick={() => handleClickRow(produtos)}
                        />
                      </IconButton>
                    </td>
                  </tr>
                ))}
              </TablesComponent>
            )}
          </DivTabela>
          <DivTabela>
            <DivBotoes>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <ImgProdutos src={ImgClientes} alt="imagem de produtos" />
                <h3>Clientes</h3>
              </div>
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
              >
                {dataTableClientes.map((produtos) => (
                  <tr>
                    <TdId>{produtos.id}</TdId>
                    <td>{produtos.name}</td>
                    <td>{(produtos.percentage * 100).toFixed(2)}%</td>
                    <td>
                      <IconButton>
                        <KeyboardArrowRightIcon
                          onClick={() => handleClickRow(produtos)}
                        />
                      </IconButton>
                    </td>
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
