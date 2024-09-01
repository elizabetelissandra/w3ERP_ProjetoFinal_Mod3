import styled from "styled-components";


export const DivCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 347px;
    height: 85%;
    gap: 20px;
    margin: 20px;
    box-shadow: 0px 2px 14px 3px rgba(163,163,163,0.52);
    border-radius: 25px;
    padding: 20px;
    background: ${({ theme }) => theme.palette.background.default};
`

export const DivInfos = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    gap: 20px;
`

export const PStatus = styled.p`
    color: ${({ theme }) => theme.palette.success.main};
`

export const DivBotoes = styled.div`

    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 90%;
    gap: 20px;
    margin-bottom: 20px;
`