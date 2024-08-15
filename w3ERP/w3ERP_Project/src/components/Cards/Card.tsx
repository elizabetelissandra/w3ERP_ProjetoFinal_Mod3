import { DivCard, DivConteudo, DivValores, PCard, PPorcentagem, PQuantidade } from "./CardStyles"

interface CardProps {
    produto: string
    baixa: string
    quantidade: number
    porcentagem: string
}

const Card: React.FC<CardProps> = ({produto, baixa, quantidade, porcentagem}) => {
    return (
        <>
        <DivCard>
            <div>
                <span style={{color: "#C5CFFF"}}>GRÁFICO</span>
            </div>
            <DivConteudo>
                <PCard>Total {produto} em {baixa}</PCard>
                <DivValores>
                <PQuantidade>{quantidade}</PQuantidade>
                <PPorcentagem>{porcentagem}</PPorcentagem>
                </DivValores>
            </DivConteudo>
        </DivCard>
        </>
    )
}

export default Card