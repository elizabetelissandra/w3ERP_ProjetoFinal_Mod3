import React from "react"
import { DivCard, PCard, SpanCard } from "./CardsDetalhamentoStyles"

interface CardDetalhamentoProps {
    infoName: string
    infoValue: number
    backgroundColor: string
    colorText: string
    colorSpan: string
}

const CardDetalhamento: React.FC<CardDetalhamentoProps> = ({infoName, infoValue, backgroundColor, colorText, colorSpan}) => {
    return (
        <>
        <DivCard backgroundColor={backgroundColor}>
            <PCard color={colorText}>{infoName}</PCard>
            <div>
            <SpanCard color={colorSpan}>{infoValue}</SpanCard>
            </div>
        </DivCard>
        </>
    )
}

export default CardDetalhamento