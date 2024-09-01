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
import { Customer, Product } from "../../types/DashboardTypes";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Menu from "../../components/MenuLateral/Menu";
import TablesComponent from "../../components/Tabelas/TablesComponent";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { TdId } from "../../components/Tabelas/TablesComponentStyles";
import { theme } from "../../styles/themeStyles";
import ImgProdutos from "../../ui/img/ImgProdutos.png";
import HistoryIcon from "@mui/icons-material/History";
import { Link } from "react-router-dom";
import { useMenu } from "../../context/menuContext";
import { formatToUTC } from "../../utils/formatToUTC/formatToUTC";

const Predicao = () => {
  const { id } = useParams();
  const [data, setData] = useState<Customer | null>();
  const [dataProdutos, setDataProdutos] = useState<Product[]>([]);
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({});
  const { menu, toggleMenu } = useMenu();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosClientes.get(`/${id}`);
      setData(response.data);
      setDataProdutos(response.data.products);
    };

    fetchData();
  }, [id]);

  const handleChange = (productId: string) => {
    setChecked((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  const produtosAcabando = dataProdutos.filter(
    (product) => product.amount <= 10
  );

  const historicoProdutosDecrescente = dataProdutos.sort(
    (a: Product, b: Product) =>
      new Date(b.lastPurchase).getTime() - new Date(a.lastPurchase).getTime()
  );

  return (
    <>
      <DivDashboard>
        <Menu isOpen={menu} />
        <DivHeader>
          <Header onClick={toggleMenu} />
          <DivPredicao>
            <Link to="/Predicoes">
              <IconButton>
                <ArrowBackIcon />
              </IconButton>
            </Link>
            <h3>Predição</h3>
          </DivPredicao>
          <DivInfoCliente theme={theme}>
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
            <DivTabela theme={theme}>
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
                  width="100%"
                  backgroundBody={theme.palette.primary.contrastText}
                  backgroundColor={theme.palette.primary.main}
                  colorHeader={theme.palette.primary.contrastText}
                >
                  {historicoProdutosDecrescente.map((produtos) => (
                    <tr>
                      <TdId>{produtos.id}</TdId>
                      <TdId>{produtos.name}</TdId>
                      <TdId>{formatToUTC(produtos.lastPurchase)}</TdId>
                      <TdId>{produtos.amount}</TdId>
                      <TdId>
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
                      </TdId>
                    </tr>
                  ))}
                </TablesComponent>
              )}
            </DivTabela>
            <DivTabela theme={theme}>
              <DivImgTitle>
                <ImgProducts
                  theme={theme}
                  src={ImgProdutos}
                  alt="imagem produto"
                />
                <H3ProdutosBaixas theme={theme}>
                  Produtos Acabando
                </H3ProdutosBaixas>
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
                  width="100%"
                  backgroundBody={theme.palette.primary.contrastText}
                  backgroundColor={theme.palette.primary.main}
                  colorHeader={theme.palette.primary.contrastText}
                >
                  {produtosAcabando.map((produtos) => (
                    <tr>
                      <TdId>{produtos.id}</TdId>
                      <TdId>{produtos.name}</TdId>
                      <TdId>{formatToUTC(produtos.lastPurchase)}</TdId>
                      <TdId>{produtos.amount}</TdId>
                      <TdId>
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
                      </TdId>
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
