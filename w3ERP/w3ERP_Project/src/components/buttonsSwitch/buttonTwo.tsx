import { theme } from "../../styles/themeStyles";
import { ButtonsProps } from "./buttonOne";
import { ButtonTwoStyled } from "./buttonStyles";

export const ButtonTwo = ({ isSelected, onClick }: ButtonsProps) => {
    return (
      <>
        <ButtonTwoStyled theme={theme} isSelected={isSelected} onClick={onClick} >
          Em Baixa
        </ButtonTwoStyled>
      </>
    );
  };
  