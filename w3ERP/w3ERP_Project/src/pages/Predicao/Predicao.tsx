import { IconButton, ToggleButton } from "@mui/material";
import Header from "../../components/HeaderDashboard/header";
import { DivDashboard, DivHeader } from "../Dashboard/DashboardStyles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  DivEmail,
  DivInfoCliente,
  DivPredicao,
  P,
  DivInfo,
  DivTabela,
  DivTabelas,
  H3ProdutosBaixas,
  ImgProducts,
  DivImgTitle,
} from "./PredicaoStyles";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { axiosClientes } from "../../api/axiosConfig";
import { Customer, Product, ProductPredicao } from "../../types/DashboardTypes";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Menu from "../../components/MenuLateral/Menu";
import TablesComponent from "../../components/Tabelas/TablesComponent";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { TdId } from "../../components/Tabelas/TablesComponentStyles";
import { theme } from "../../context/themeContext";
import ImgProdutos from "../../ui/img/ImgProdutos.png";
import HistoryIcon from "@mui/icons-material/History";
import { Link } from "react-router-dom";

export interface ProductType {
  id: string;
  name: string;
  lastPurchase: string;
  amount: number;
}

const Predicao = () => {
  const { id } = useParams();
  const [data, setData] = useState<Customer | null>();
  const [dataProdutos, setDataProdutos] = useState<Product[]>([]);
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosClientes.get(`/${id}`);
      console.log("Data for ID:", response.data);
      console.log("resposta da api: ", response.data);
      setData(response.data);
      setDataProdutos(response.data.products);
    };

    fetchData();
  }, [id]);

  const formatToUTC = (isoDate: string) => {
    const date = new Date(isoDate);
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleChange = (productId: string) => {
    setChecked((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  const produtosAcabando = dataProdutos.filter(
    (product) => product.amount <= 50
  );

  return (
    <>
      <DivDashboard>
        <Menu />
        <DivHeader>
          <Header />
          <DivPredicao>
            <Link to="/Predicoes">
              <IconButton>
                <ArrowBackIcon />
              </IconButton>
            </Link>
            <h3>Predição</h3>
          </DivPredicao>
          <DivInfoCliente>
            {data && (
              <>
                <h3>{data.name}</h3>
                <DivEmail>
                  <DivInfo>
                    <EmailOutlinedIcon />
                    <P>{data.email}</P>
                  </DivInfo>
                  <DivInfo>
                    <PhoneOutlinedIcon />
                    <P>{data.phone} </P>
                  </DivInfo>
                </DivEmail>
              </>
            )}
          </DivInfoCliente>
          <DivTabelas>
            <DivTabela>
              <DivImgTitle>
                <HistoryIcon
                  sx={{
                    fontSize: 35,
                    backgroundColor: "#EEEEEE",
                    padding: "10px",
                    borderRadius: "15px",
                  }}
                />
                <h3>Histórico</h3>
              </DivImgTitle>
              {dataProdutos && (
                <TablesComponent
                  headers={[
                    "ID",
                    "Produto",
                    "Última Compra",
                    " Qtd.",
                    "Dar Baixa",
                  ]}
                >
                  {dataProdutos.map((produtos) => (
                    <tr>
                      <TdId>{produtos.id}</TdId>
                      <td>{produtos.name}</td>
                      <td>{formatToUTC(produtos.lastPurchase)}</td>
                      <td>{produtos.amount}</td>
                      <td>
                        <ToggleButton
                          sx={{ border: "none" }}
                          key={produtos.id}
                          value="check"
                          selected={checked[produtos.id]}
                          onChange={() => handleChange(produtos.id)}
                        >
                          <CheckCircleOutlinedIcon
                            sx={{
                              color: checked[produtos.id]
                                ? theme.palette.success.main
                                : "",
                            }}
                          />
                        </ToggleButton>
                      </td>
                    </tr>
                  ))}
                </TablesComponent>
              )}
            </DivTabela>
            <DivTabela>
              <DivImgTitle>
                <ImgProducts src={ImgProdutos} alt="imagem produto" />
                <H3ProdutosBaixas>Produtos Acabando</H3ProdutosBaixas>
              </DivImgTitle>
              {produtosAcabando && (
                <TablesComponent
                  headers={[
                    "ID",
                    "Produto",
                    "Última Compra",
                    " Qtd.",
                    "Dar Baixa",
                  ]}
                >
                  {produtosAcabando.map((produtos) => (
                    <tr>
                      <TdId>{produtos.id}</TdId>
                      <td>{produtos.name}</td>
                      <td>{formatToUTC(produtos.lastPurchase)}</td>
                      <td>{produtos.amount}</td>
                      <td>
                        <ToggleButton
                          sx={{ border: "none" }}
                          key={produtos.id}
                          value="check"
                          selected={checked[produtos.id]}
                          onChange={() => handleChange(produtos.id)}
                        >
                          <CheckCircleOutlinedIcon
                            sx={{
                              color: checked[produtos.id]
                                ? theme.palette.success.main
                                : "",
                            }}
                          />
                        </ToggleButton>
                      </td>
                    </tr>
                  ))}
                </TablesComponent>
              )}
            </DivTabela>
          </DivTabelas>
        </DivHeader>
      </DivDashboard>
    </>
  );
};

export default Predicao;
