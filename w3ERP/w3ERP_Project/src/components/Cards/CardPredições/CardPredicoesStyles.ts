import styled from "styled-components";


export const DivCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 347px;
    height: 400px;
    gap: 20px;
    margin: 20px;
    box-shadow: 0px 2px 14px 3px rgba(163,163,163,0.52);
    border-radius: 25px;
    padding: 20px;
`

export const DivInfos = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    gap: 20px;
`

export const PStatus = styled.p`
    color: ${ props => props.theme.palette.success.main};
`