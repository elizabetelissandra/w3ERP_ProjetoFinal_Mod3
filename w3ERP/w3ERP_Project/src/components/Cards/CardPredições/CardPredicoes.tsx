import { Children } from "react";
import AccessibleTable from "../../Tabelas/TabelaPredicao";
import User from "../../../ui/img/user.png";
import { DivBotoes, DivCard, DivInfos, PStatus } from "./CardPredicoesStyles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import { Stack, IconButton } from "@mui/material";
import { theme } from "../../../styles/themeStyles";
import TablesComponent from "../../Tabelas/TablesComponent";

interface CardPredicaoProps {
  NomeCliente: string;
  statusCliente: string;
  id: string;
  children?: React.ReactNode;
}

const CardPredicao: React.FC<CardPredicaoProps> = ({
  NomeCliente,
  statusCliente,
  id,
  children,
}) => {
  return (
    <DivCard theme={theme}>
      <DivInfos>
        <DivBotoes>
          <div>
            <img src={User} alt="Logo do perfil" />
          </div>
          <div>
            <h3>{NomeCliente}</h3>
            <PStatus theme={theme}>{statusCliente}</PStatus>
          </div>
        </DivBotoes>
        <Link to={`/Predicao/${id}`}>
          <IconButton aria-label="menu">
            <ArrowForwardIosIcon />
          </IconButton>
        </Link>
      </DivInfos>
      <div>{children}</div>
    </DivCard>
  );
};

export default CardPredicao;
