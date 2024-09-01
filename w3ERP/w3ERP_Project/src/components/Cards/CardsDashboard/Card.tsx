import { theme } from "../../../styles/themeStyles"
import  {DivCard, DivConteudo, DivGrafico, DivValores, PCard, PPorcentagem, PQuantidade, SpanGrafico } from "../CardsDashboard/CardStyles"

interface CardProps {
    nome: string
    quantidade: number
    porcentagem: number
    backgroundColor: string
    colorTextCard: string
    colorTextQuantity: string
    havePercent: boolean
    children?: React.ReactNode
    alignItens?: string
    detalhes?: boolean
}

const Card: React.FC<CardProps> = ({nome, quantidade, porcentagem, backgroundColor, colorTextQuantity, colorTextCard, children, havePercent, alignItens, detalhes}) => {
    return (
        <>
        <DivCard background={backgroundColor} alignItens={alignItens}>
            <DivGrafico detalhes={detalhes}>
                <SpanGrafico>{children}</SpanGrafico>
            </DivGrafico>
            <DivConteudo detalhes={detalhes} >
                <PCard detalhes={detalhes} colorTextCard={colorTextCard}>{nome}</PCard>
                <DivValores detalhes={detalhes} >
                <PQuantidade detalhes={detalhes} colorTextQuantity={colorTextQuantity} >{quantidade}</PQuantidade>
                {havePercent ?
                <PPorcentagem theme={theme} positive={porcentagem >= 0} >{porcentagem}%</PPorcentagem>
                : null} 
                </DivValores>
            </DivConteudo>
        </DivCard>
        </>
    )
}

export default Card