import styled from "styled-components";

export const DivCard = styled.div<{ backgroundColor?: string }>`
    display: flex;
    flex-direction:column;
    flex-wrap: wrap;
    align-content: center;
    align-items: flex-start;
    width: 300px;
    height: 124px;
    background-color: ${({backgroundColor}) => backgroundColor};
    border-radius: 30px;
    box-shadow: 0px 0px 37px -10px rgba(0,0,0,0.75);
`

export const PCard = styled.p<{ color: string }>`
    color: ${({color}) => color};
    font-size: 22px;
    
`

export const SpanCard = styled.span<{color: string}>`
    color: ${({color}) => color};
    font-size: 32px;
    font-weight: 700;
`