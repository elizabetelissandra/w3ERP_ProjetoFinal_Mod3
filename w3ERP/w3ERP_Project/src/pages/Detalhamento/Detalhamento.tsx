import Stack from "@mui/material/Stack";
import Header from "../../components/HeaderDashboard/header";
import Menu from "../../components/MenuLateral/Menu";
import {
  DivBackToDashboard,
  DivBotoes,
  DivCards,
  DivDetalhamento,
  DivH3,
  DivHeader,
  H3,
  ImgSetaCaindo,
  ImgSetaSubindo,
  TrTable,
} from "./DetalhamentoStyles";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { theme } from "../../styles/themeStyles";
import { DivTabela, DivTabelas } from "../Dashboard/DashboardStyles";
import TablesComponent from "../../components/Tabelas/TablesComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Product, Customer } from "../../types/DashboardTypes";
import SetaCaindo from "../../ui/img/setaCaindo.png";
import SetaSubindo from "../../ui/img/setaSubindo.png";
import { TdId } from "../../components/Tabelas/TablesComponentStyles";
import Card from "../../components/Cards/CardsDashboard/Card";
import { useMenu } from "../../context/menuContext";

const Detalhamento = () => {
  const { type, id } = useParams();
  const [data, setData] = useState<Product | Customer | null>(null);
  const [dataTable, setDataTable] = useState<Product[] | Customer[]>([]);
  const tableName = type === "products" ? "Clientes" : "Produtos";
  const { menu, toggleMenu } = useMenu();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/${type}/${id}`);
        const otherType = type === "products" ? "customers" : "products";
        const response2 = await axios.get(`http://localhost:3000/${otherType}`);
        console.log("Fetched data for type:", type);
        console.log("Data for ID:", response.data);
        console.log("DataTable:", response2.data);
        setDataTable(response2.data);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [type, id]);

  let dataArray = Array.isArray(data) ? data : [data];
  let filteredArray: Product[] | Customer[] = [];
  if (dataArray.length > 0) {
    filteredArray =
      type === "products"
        ? [dataArray[0] as Product]
        : [dataArray[0] as Customer];
  }

  const lowPercentage = (array: Product[] | Customer[]) => {
    return array.filter((item) => item.percentage < 0);
  };

  const highPercentage = (array: Product[] | Customer[]) => {
    return array.filter((item) => item.percentage >= 0);
  };

  const valorTotal = () => {
    return Math.floor(Math.random() * 1000);
  };

  return (
    <DivDetalhamento>
      <Menu isOpen={menu} />
      <DivHeader>
        <Header onClick={toggleMenu} />
        <DivBackToDashboard>
          <Stack>
            <Link to="/Dashboard">
              <IconButton aria-label="menu">
                <ArrowBackIcon />
              </IconButton>
            </Link>
          </Stack>
          <span>Detalhamento</span>
        </DivBackToDashboard>
        <DivH3>
          <H3 theme={theme}>
            {data === null
              ? "Carregando..."
              : filteredArray.map((item) => item.name)}
          </H3>
        </DivH3>
        <DivCards>
          {type && (
            <>
              <Card
                nome={"Média de 120 dias"}
                quantidade={valorTotal()}
                porcentagem={0}
                backgroundColor={theme.palette.primary.main}
                colorTextCard="#fff"
                colorTextQuantity={theme.palette.primary.contrastText}
                havePercent={false}
                alignItens="start"
                detalhes={true}
              />
              <Card
                nome={"Últimos 30 dias"}
                quantidade={valorTotal()}
                porcentagem={26}
                backgroundColor={theme.palette.background.default}
                colorTextCard={theme.palette.text.primary}
                colorTextQuantity={theme.palette.primary.main}
                havePercent={true}
                alignItens="start"
                detalhes={true}
              />
              <Card
                nome={"Últimos 30 dias"}
                quantidade={valorTotal()}
                porcentagem={0}
                backgroundColor={theme.palette.background.default}
                colorTextCard={theme.palette.text.primary}
                colorTextQuantity={theme.palette.primary.main}
                havePercent={false}
                alignItens="start"
                detalhes={true}
              />
              <Card
                nome={"Últimos 30 dias"}
                quantidade={valorTotal()}
                porcentagem={0}
                backgroundColor={theme.palette.background.default}
                colorTextCard={theme.palette.text.primary}
                colorTextQuantity={theme.palette.primary.main}
                havePercent={false}
                alignItens="start"
                detalhes={true}
              />
            </>
          )}
        </DivCards>
        <DivTabelas>
          <DivTabela>
            <DivBotoes>
              <ImgSetaCaindo theme={theme} src={SetaCaindo} alt="imagem de produtos" />
              <h3>
                {type === "products"
                  ? `${tableName} em Baixa`
                  : `${tableName} em Baixa`}
              </h3>
            </DivBotoes>
            <TablesComponent
              headers={["ID", tableName, "Percentual", "QTD"]}
              width={"600px"} backgroundColor={theme.palette.primary.main}
              colorHeader={theme.palette.primary.contrastText}
              backgroundBody={theme.palette.primary.contrastText}
            >
              {lowPercentage(dataTable)
                .slice(0, 10)
                .map((item: any) => (
                  <TrTable>
                    <TdId>{item.id}</TdId>
                    <TdId>{item.name}</TdId>
                    <TdId>{(item.percentage * 100).toFixed(2)}%</TdId>
                    <TdId>{type === "products" ? item.products[0].amount : item.amount}</TdId>
                  </TrTable>
                ))}
            </TablesComponent>
          </DivTabela>
          <DivTabela>
            <DivBotoes>
              <ImgSetaSubindo theme={theme} src={SetaSubindo} alt="imagem de produtos" />
              <h3>
                {type === "products" ? `${tableName} em Alta` : `${tableName} em Alta`}
              </h3>
            </DivBotoes>
            <TablesComponent
              headers={["ID", tableName, "Percentual", 'QTD']}
              width={"600px"} backgroundColor={theme.palette.primary.main}
              colorHeader={theme.palette.primary.contrastText}
              backgroundBody={theme.palette.primary.contrastText}
            >
              {highPercentage(dataTable)
                .slice(0, 10)
                .map((item: any) => (
                  <TrTable>
                    <TdId>{item.id}</TdId>
                    <TdId>{item.name}</TdId>
                    <TdId>{(item.percentage * 100).toFixed(2)}%</TdId>
                    <TdId>{type === "products" ? item.products[0].amount : item.amount}</TdId>
                  </TrTable>
                ))}
            </TablesComponent>
          </DivTabela>
        </DivTabelas>
      </DivHeader>
    </DivDetalhamento>
  );
};

export default Detalhamento;
