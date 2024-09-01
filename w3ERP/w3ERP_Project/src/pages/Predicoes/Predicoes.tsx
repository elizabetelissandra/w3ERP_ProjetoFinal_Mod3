import CardPredicao from "../../components/Cards/CardPredições/CardPredicoes";
import Header from "../../components/HeaderDashboard/header";
import Menu from "../../components/MenuLateral/Menu";
import { DivDashboard, DivHeader } from "../Dashboard/DashboardStyles";
import { useEffect, useState } from "react";
import { Customer, Product } from "../../types/DashboardTypes";
import { axiosClientes } from "../../api/axiosConfig";
import {
  DivAroundSearch,
  DivCardsPredicao,
  DivInputSearch,
  DivNomeSeach,
  H3,
  InputSearch,
} from "../Predicoes/PredicoesStyles";
import SearchIcon from "@mui/icons-material/Search";
import { useMenu } from "../../context/menuContext";
import { theme } from "../../styles/themeStyles";
import TablesComponent from "../../components/Tabelas/TablesComponent";
import { TdId } from "../../components/Tabelas/TablesComponentStyles";
import { formatToUTC } from "../../utils/formatToUTC/formatToUTC";

const Predicoes = () => {
  const [produtos, setProdutos] = useState<Product[]>([]);
  const [clientes, setClientes] = useState<Customer[]>([]);
  const [dataTableClientes, setDataTableClientes] = useState<Customer[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { menu, toggleMenu } = useMenu();

  useEffect(() => {
    const fetchData = async () => {
      const responseCustomers = await axiosClientes.get("/");
      setDataTableClientes(responseCustomers.data);
      setClientes(responseCustomers.data);
      setProdutos(responseCustomers.data[0].products.slice(0, 3));
    };
    fetchData();
  }, []);

  const filteredClientes = clientes?.filter((cliente) => {
    return cliente.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <DivDashboard>
        <Menu isOpen={menu} />
        <DivHeader>
          <Header onClick={toggleMenu} />
          <DivNomeSeach>
            <H3 theme={theme}>Predições</H3>
            <DivAroundSearch theme={theme}>
              <DivInputSearch theme={theme}>
                <InputSearch
                  theme={theme}
                  type="text"
                  placeholder="Pesquese uma palavra-chave "
                  onChange={(e) => setSearchTerm(e.target.value)}
                />{" "}
                <SearchIcon />
              </DivInputSearch>
            </DivAroundSearch>
          </DivNomeSeach>
          <DivCardsPredicao theme={theme}>
            {clientes === null || produtos === null ? (
              <>Carregando...</>
            ) : (
              <>
                {filteredClientes.slice(0, 15).map((cliente) => (
                  <CardPredicao
                    key={cliente.id}
                    id={cliente.id}
                    NomeCliente={cliente.name}
                    statusCliente={"Status vai aqui "}
                  >
                    <TablesComponent
                      headers={["Produtos", "Próx. compra"]}
                      width={"300px"}
                      backgroundBody={"##EEEEEE"}
                      colorHeader="#796CE0"
                      backgroundHeader={"##EEEEEE"}
                    >
                      {produtos.map((product: Product) => (
                        <tr key={product.id}>
                          <TdId>{product.name}</TdId>
                          <TdId>{formatToUTC(product.lastPurchase)}</TdId>
                        </tr>
                      ))}
                    </TablesComponent>
                  </CardPredicao>
                ))}
              </>
            )}
          </DivCardsPredicao>
        </DivHeader>
      </DivDashboard>
    </>
  );
};

export default Predicoes;
