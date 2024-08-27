
import Header from "../../components/HeaderDashboard/header";
import Menu from "../../components/MenuLateral/Menu";
import TablesComponent from "../../components/Tabelas/TablesComponent";
import { DivDashboard } from "../Dashboard/DashboardStyles";
import { useEffect, useState } from "react";
import { axiosProdutos } from "../../api/axiosConfig";
import { Product } from "../../types/DashboardTypes";
import { DivAroundSearchProdutos, DivHeader, DivPagination, H3, SpanEmAlta, SpanEmBaixa, StyledPaginateContainer, TrTable } from "./ProdutosStyles";
import {  DivInputSearch, InputSearch } from "../Predicoes/PredicoesStyles";
import SearchIcon from "@mui/icons-material/Search";
import { TdId } from "../../components/Tabelas/TablesComponentStyles";
import ReactPaginate from 'react-paginate';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useMenu } from "../../context/menuContext";

const Produtos = () => {
const [produtos, setProdutos] = useState<Product[]>([]);
const [searchTerm, setSearchTerm] = useState('')
const [currentPage, setCurrentPage] = useState(0);
const [totalProducts, setTotalProducts] = useState(0);
const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
const [isOpen, setIsOpen] = useState<boolean>(true);
const { menu, toggleMenu } = useMenu();
const productsPerPage = 5;

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosProdutos.get("/");
            setProdutos(response.data);
            setTotalProducts(response.data.length)
            setFilteredProducts(response.data.slice(0, productsPerPage));
        }
        fetchData()


    }, []);

    
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    
    const totalProdutos = produtos.length;

    const handlePageClick = ({selected}: any) => {
      console.log("Pagina clicada: ", selected);
      const newOffSet = (selected * productsPerPage) 
      const endIndex = Math.min(newOffSet + productsPerPage, totalProducts)

      const filteredProducts = produtos.slice(newOffSet, endIndex);
      setFilteredProducts(filteredProducts);
      setCurrentPage(selected);
    }

  return (
    <>
      <DivDashboard>
        <Menu isOpen={menu}
         />
        <DivHeader>
          <Header onClick={toggleMenu} />
          <H3>Produtos</H3>
          <DivAroundSearchProdutos>
              <DivInputSearch>
                <InputSearch
                  type="text"
                  placeholder="Pesquese uma palavra-chave "
                  onChange={(e) => setSearchTerm(e.target.value)}
                />{" "}
                <SearchIcon />
              </DivInputSearch>
            <TablesComponent headers={["ID", "Produto", "Status", "Percentual"]} width={"100%"} >
                {filteredProducts?.map((product) => (
                    <TrTable key={product.id}  >
                        <TdId>{product.id}</TdId>
                        <td>{product.name}</td>
                        <td>{(product.percentage > 0 ? <SpanEmAlta>Em Alta</SpanEmAlta> : <SpanEmBaixa>Em Baixa</SpanEmBaixa>)}</td>
                        <td>{(product.percentage * 100).toFixed(2)}%</td>
                    </TrTable>
                ))}
            </TablesComponent>
            <DivPagination>
            <p>Produtos {productsPerPage * (currentPage + 1)} de {totalProdutos}</p>
            <StyledPaginateContainer
            previousLabel={<KeyboardArrowLeftIcon/>} 
            nextLabel={<KeyboardArrowRightIcon/>} 
            pageCount={totalPages} 
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
            />
            </DivPagination>
          </DivAroundSearchProdutos>
        </DivHeader>
      </DivDashboard>
    </>
  );
};

export default Produtos;
