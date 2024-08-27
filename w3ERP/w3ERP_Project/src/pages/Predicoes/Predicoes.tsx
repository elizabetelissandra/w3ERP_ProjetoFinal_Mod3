import CardPredicao from "../../components/Cards/CardPredições/CardPredicoes";
import Header from "../../components/HeaderDashboard/header";
import Menu from "../../components/MenuLateral/Menu";
import { DivDashboard, DivHeader } from "../Dashboard/DashboardStyles";
import { useEffect, useState } from "react";
import { Customer, Product } from "../../types/DashboardTypes";
import { axiosClientes, axiosProdutos } from "../../api/axiosConfig";
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

const Predicoes = () => {
  const [produtos, setProdutos] = useState<Product[]>([]);
  const [clientes, setClientes] = useState<Customer[]>([]);
  const [dataTableProdutos, setDataTableProdutos] = useState<Product[]>([]);
  const [dataTableClientes, setDataTableClientes] = useState<Customer[]>([]);
  const [ isOpen, setIsOpen] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState('')
  const { menu, toggleMenu } = useMenu();

  useEffect(() => {
    const fetchData = async () => {
      const responseProducts = await axiosProdutos.get("/");
      setDataTableProdutos(responseProducts.data);
      setProdutos(responseProducts.data);
      console.log("Produtos", responseProducts.data);

      const responseCustomers = await axiosClientes.get("/");
      setDataTableClientes(responseCustomers.data);
      setClientes(responseCustomers.data);
      console.log("Clientes", responseCustomers.data);
    };
    fetchData();
  }, []);

  const filteredClientes = clientes?.filter((cliente) => {
    return cliente.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <>
      <DivDashboard>
        <Menu isOpen={menu} />
        <DivHeader>
          <Header onClick={toggleMenu} />
          <DivNomeSeach>
            <H3>Predições</H3>
            <DivAroundSearch>
              <DivInputSearch>
                <InputSearch
                  type="text"
                  placeholder="Pesquese uma palavra-chave "
                  onChange={(e) => setSearchTerm(e.target.value)}
                />{" "}
                <SearchIcon />
              </DivInputSearch>
            </DivAroundSearch>
          </DivNomeSeach>
          <DivCardsPredicao>
            {(clientes === null) || (produtos === null) ? (
              <>
              Carregando...
              </>
            ) : (
              
              <>
              {filteredClientes.slice(0, 15).map((cliente) => (
                
                  <CardPredicao
                    key={cliente.id}
                    id={cliente.id}
                    NomeCliente={cliente.name}
                    statusCliente={"Status vai aqui "}
                    produtos={cliente.products}
                  />
                
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
