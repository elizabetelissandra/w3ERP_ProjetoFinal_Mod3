import styled from "styled-components";




export const DivCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 20px;
`

export const DivCardsPredicao = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    justify-items: center;
    width: 90%;
    margin-left: 20px;
    padding: 20px;
    border-radius: 10px;
    overflow-y: scroll;
    height: 100vh;
    background: ${({ theme }) => theme.palette.background.paper};
`

export const H3 = styled.h3`
    color: ${({ theme }) => theme.palette.common.black};
    font-size: 32px;
    margin-left: 40px;
`

export const DivNomeSeach = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    gap: 20px;
    margin-left: 60px;
`

export const InputSearch = styled.input`   
    width: 400px;
    height: 40px;
    outline: none;
    border: none;
    font-size: 16px;
    background: ${({ theme }) => theme.palette.background.default};
`

export const DivAroundSearch = styled.div`
    width: 93%;
    gap: 20px;
    margin-left: 40px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    border-radius: 10px;
    padding: 20px;
    background: ${({ theme }) => theme.palette.background.default};
`

export const DivInputSearch = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 400px;
    gap: 10px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
    padding: 10px;
`

