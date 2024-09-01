import styled from "styled-components";
import ReactPaginate from "react-paginate";

export const SpanEmAlta = styled.span`
    color: ${({ theme }) => theme.palette.success.main};
    background-color: #D9FEE6;
    padding: 5px;
    border-radius: 5px;
`

export const SpanEmBaixa = styled.span`
    color: ${({ theme }) => theme.palette.error.main};
    background-color: #FEE6E6;
    padding: 5px;
    border-radius: 5px;
`

export const DivHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 20px;
`
export const TrTable = styled.tr`
    height: 100px;
`

export const DivAroundSearchProdutos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 90%;
    margin-left: 40px;
    margin-bottom: 80px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    border-radius: 10px;
    padding: 20px;
    gap:20px;
    background: ${({ theme }) => theme.palette.background.default};
`

export const H3 = styled.h3`
    color: ${({ theme }) => theme.palette.common.black};
    font-size: 32px;
    text-align: start;
    margin-left: 40px;
`

export const DivPagination = styled.div`    
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 20px;
    margin: 20px;
`

export const StyledPaginateContainer = styled(ReactPaginate).attrs(() => ({
    activeClassName: 'active',
    disabledClassName: 'disabled',
}))`
    display: flex;
    justify-content: end;
    align-items: center;
    list-style: none;
    padding: 0;
    margin-top: 20px;
  
    li {
      margin: 0 5px;
       text-align: center;
    }
  
    li a {
      width: 40px;
      padding: 10px;
      cursor: pointer;
      text-decoration: none;
      color: ${({ theme }) => theme.palette.primary.main};
  
      &:hover {
        background-color: #f0f0f0;
      }
    }
  
    li.active a {
      background-color: ${({ theme }) => theme.palette.primary.main};
      color: white;
    }
  
    li.disabled a {
      color: #ddd;
      cursor: default;

    }
  `;

  export const DivMagnifyingGlass= styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  `

  export const PNewInfo = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  `