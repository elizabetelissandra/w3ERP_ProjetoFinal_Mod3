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
import CardDetalhamento from "../../components/Cards/CardsDetalhamento/CardsDetalhamento";
import { theme } from "../../context/themeContext";
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
  const [isOpen, setIsOpen] = useState<boolean>(true);
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
          <H3>
            {data === null
              ? "Carregando..."
              : filteredArray.map((item) => item.name)}
          </H3>
        </DivH3>
        <DivCards>
          {type && (
            <>
              {/* <CardDetalhamento
                infoName={"Média de 120 dias"}
                infoValue={valorTotal()}
                colorText={theme.palette.primary.contrastText}
                backgroundColor={theme.palette.primary.main}
                colorSpan={theme.palette.primary.contrastText}
              /> */}
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

              {/* <CardDetalhamento
                infoName={"Últimos 30 dias"}
                infoValue={valorTotal()}
                colorText={theme.palette.common.black}
                backgroundColor={theme.palette.primary.contrastText}
                colorSpan={theme.palette.primary.main}
              /> */}
              {/* <CardDetalhamento
                infoName={"Últimos 60 dias"}
                infoValue={valorTotal()}
                colorText={theme.palette.common.black}
                backgroundColor={theme.palette.primary.contrastText}
                colorSpan={theme.palette.primary.main}
              /> */}
              {/* <CardDetalhamento
                infoName={"Últimos 90 dias"}
                infoValue={valorTotal()}
                colorText={theme.palette.common.black}
                backgroundColor={theme.palette.primary.contrastText}
                colorSpan={theme.palette.primary.main}
              /> */}
            </>
          )}
        </DivCards>
        <DivTabelas>
          <DivTabela>
            <DivBotoes>
              <ImgSetaCaindo src={SetaCaindo} alt="imagem de produtos" />
              <h3>
                {type === "products"
                  ? "Clientes em Baixa"
                  : "Produtos em Baixa"}
              </h3>
            </DivBotoes>
            <TablesComponent
              headers={["ID", tableName, "Percentual", ""]}
              width={"500px"}
            >
              {lowPercentage(dataTable)
                .slice(0, 10)
                .map((item: any) => (
                  <TrTable>
                    <TdId>{item.id}</TdId>
                    <td>{item.name}</td>
                    <td>{(item.percentage * 100).toFixed(2)}%</td>
                    <td></td>
                  </TrTable>
                ))}
            </TablesComponent>
          </DivTabela>
          <DivTabela>
            <DivBotoes>
              <ImgSetaSubindo src={SetaSubindo} alt="imagem de produtos" />
              <h3>
                {type === "products" ? "Clientes em Alta" : "Produtos em Alta"}
              </h3>
            </DivBotoes>
            <TablesComponent
              headers={["ID", tableName, "Percentual", ""]}
              width={"500px"}
            >
              {highPercentage(dataTable)
                .slice(0, 10)
                .map((item: any) => (
                  <TrTable>
                    <TdId>{item.id}</TdId>
                    <td>{item.name}</td>
                    <td>{(item.percentage * 100).toFixed(2)}%</td>
                    <td></td>
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
