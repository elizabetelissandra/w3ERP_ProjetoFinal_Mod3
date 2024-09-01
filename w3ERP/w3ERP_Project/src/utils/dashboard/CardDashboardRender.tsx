import Card from "../../components/Cards/CardsDashboard/Card";
import { RadialBarDasboard } from "../../components/Graphic/Graphic";
// Crie uma função separada para renderizar cartas


const renderCardDashboard = (
    titulo: string,
    backgroundColor: string,
    havePercent: boolean,
    colorTextCard: string,
    colorTextQuantity: string,
    quantidade: number,
    porcentagem: number,
  ) => {
    return (
      <Card
        nome={titulo}
        backgroundColor={backgroundColor}
        havePercent={havePercent}
        colorTextCard={colorTextCard}
        colorTextQuantity={colorTextQuantity}
        quantidade={quantidade}
        porcentagem={Number(porcentagem.toFixed(2))}
      >
        <RadialBarDasboard percentageGraphic={Math.floor(Math.random() * 100)} />
      </Card>
    );
  };

  export default renderCardDashboard;