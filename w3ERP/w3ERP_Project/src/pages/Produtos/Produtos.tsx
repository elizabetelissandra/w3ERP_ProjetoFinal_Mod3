import Header from "../../components/HeaderDashboard/header";
import Menu from "../../components/MenuLateral/Menu";
import TablesComponent from "../../components/Tabelas/TablesComponent";
import { DivDashboard } from "../Dashboard/DashboardStyles";
import { useEffect, useState } from "react";
import { axiosProdutos } from "../../api/axiosConfig";
import { Product } from "../../types/DashboardTypes";
import {
  DivAroundSearchProdutos,
  DivHeader,
  DivMagnifyingGlass,
  DivPagination,
  H3,
  PNewInfo,
  SpanEmAlta,
  SpanEmBaixa,
  StyledPaginateContainer,
  TrTable,
} from "./ProdutosStyles";
import { DivInputSearch, InputSearch } from "../Predicoes/PredicoesStyles";
import SearchIcon from "@mui/icons-material/Search";
import { TdId } from "../../components/Tabelas/TablesComponentStyles";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useMenu } from "../../context/menuContext";
import { theme } from "../../styles/themeStyles";
import { MagnifyingGlass } from "react-loader-spinner";

const Produtos = () => {
  const [produtos, setProdutos] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [showMagnifyingGlass, setShowMagnifyingGlass] = useState(true);
  const [showNewInfo, setShowNewInfo] = useState(false);
  const { menu, toggleMenu } = useMenu();
  const productsPerPage = 5;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const updateFilteredProducts = (term: string, page: number) => {
    const filtered = produtos.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setTotalProducts(filtered.length);

    setFilteredProducts(
      filtered.slice(page * productsPerPage, (page + 1) * productsPerPage)
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosProdutos.get("/");
      setProdutos(response.data);
      updateFilteredProducts(searchTerm, 0); // Atualiza após carregar os produtos
    };
    fetchData();
  }, []);

  useEffect(() => {
    updateFilteredProducts(searchTerm, currentPage); // Atualiza ao buscar ou mudar de página
  }, [produtos, searchTerm, currentPage]);

  useEffect(() => {
    if (filteredProducts.length === 0) {
      setShowMagnifyingGlass(true);
      setShowNewInfo(false);
      const timer = setTimeout(() => {
        setShowMagnifyingGlass(false);
        setShowNewInfo(true);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setShowMagnifyingGlass(false);
      setShowNewInfo(false);
    }
  }, [filteredProducts]);

  const handlePageClick = ({ selected }: any) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <DivDashboard>
        <Menu isOpen={menu} />
        <DivHeader>
          <Header onClick={toggleMenu} />
          <H3 theme={theme}>Produtos</H3>
          <DivAroundSearchProdutos theme={theme}>
            <DivInputSearch theme={theme}>
              <InputSearch
                theme={theme}
                type="text"
                value={searchTerm}
                placeholder="Pesquise por nome"
                onChange={handleSearchChange}
              />
              <SearchIcon />
            </DivInputSearch>
            {filteredProducts.length === 0 ? (
              <>
                {showMagnifyingGlass && (
                  <DivMagnifyingGlass>
                    <MagnifyingGlass
                      visible={true}
                      height="80"
                      width="80"
                      ariaLabel="magnifying-glass-loading"
                      wrapperStyle={{}}
                      wrapperClass="magnifying-glass-wrapper"
                      glassColor="#c0efff"
                      color="#e15b64"
                    />
                  </DivMagnifyingGlass>
                )}
                {showNewInfo && (
                  <PNewInfo>Nenhum resultado encontrado</PNewInfo>
                )}
              </>
            ) : (
              <TablesComponent
                headers={["ID", "Produto", "Status", "Percentual"]}
                width={"100%"}
                backgroundHeader={theme.palette.primary.main}
                colorHeader={theme.palette.primary.contrastText}
              >
                {filteredProducts.map((product) => (
                  <TrTable key={product.id}>
                    <TdId>{product.id}</TdId>
                    <TdId>{product.name}</TdId>
                    <TdId>
                      {product.percentage > 0 ? (
                        <SpanEmAlta theme={theme}>Em Alta</SpanEmAlta>
                      ) : (
                        <SpanEmBaixa theme={theme}>Em Baixa</SpanEmBaixa>
                      )}
                    </TdId>
                    <TdId>{(product.percentage * 100).toFixed(2)}%</TdId>
                  </TrTable>
                ))}
              </TablesComponent>
            )}
            <DivPagination>
              <p>
                Produtos {(currentPage + 1) * productsPerPage} de{" "}
                {totalProducts}
              </p>
              <StyledPaginateContainer
                theme={theme}
                previousLabel={<KeyboardArrowLeftIcon />}
                nextLabel={<KeyboardArrowRightIcon />}
                pageCount={Math.ceil(totalProducts / productsPerPage)}
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
