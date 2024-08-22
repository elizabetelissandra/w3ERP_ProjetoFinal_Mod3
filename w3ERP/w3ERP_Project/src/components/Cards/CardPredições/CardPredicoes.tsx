import { Children } from "react";
import AccessibleTable from "../../Tabelas/TabelaPredicao";
import User from "../../../ui/img/user.png";
import { DivCard, DivInfos, PStatus } from "./CardPredicoesStyles";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";
import { Stack, IconButton } from "@mui/material";

interface CardPredicaoProps {
  NomeCliente: string;
  statusCliente: string;
  produtos: any[];
  id: string;
}

const CardPredicao: React.FC<CardPredicaoProps> = ({
  NomeCliente,
  statusCliente,
  produtos,
  id
}) => {
  return (
    <DivCard>
      <DivInfos>
        <div>
          <img src={User} alt="Logo do perfil" />
        </div>
        <div>
          <h3>{NomeCliente}</h3>
          <PStatus>{statusCliente}</PStatus>
        </div>
        <Link to={`/Predicao/${id}`}>
          <IconButton aria-label="menu">
            <ArrowForwardIosIcon />
          </IconButton>
        </Link>
        </DivInfos>
        <div>
          <AccessibleTable rows={produtos.slice(0, 3)} />
        </div>
    </DivCard>
  );
};

export default CardPredicao;
