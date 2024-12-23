import styled from "styled-components";
import fundoInfoClientes from "../../ui/img/fundoW3-011.png"

export const DivPredicao = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 20px;
`

export const DivInfoCliente = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    background-color: ${({ theme }) => theme.palette.primary.main};
    background-image: url(${fundoInfoClientes});
    background-repeat: no-repeat;
    background-size: cover;
    color: ${({ theme }) => theme.palette.common.white};
    padding: 20px;
    border-radius: 10px;
`

export const DivEmail = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`

export const DivInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
`

export const P = styled.p`
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    text-align: center;
`
export const DivTabelas = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    width: 80%;
    gap: 100px;
    margin-top: 20px;
`

export const DivTabela = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
    padding: 20px;
    border-radius: 20px;
    background: ${({ theme }) => theme.palette.background.default};
`

export const H3Produtos = styled.h3`
    color: ${({ theme }) => theme.palette.primary.main};
`

export const H3ProdutosBaixas = styled.h3`
    color: ${({ theme }) => theme.palette.error.main};
`
export const DivImgTitle = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    margin-bottom: 20px;
`

export const ImgProducts = styled.img`
    width: 30px;
    background-color: ${({ theme }) => theme.palette.error.main};
    padding: 10px;
    border-radius: 25%;
`