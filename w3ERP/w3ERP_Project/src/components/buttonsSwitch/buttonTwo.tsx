import { ButtonsProps } from "./buttonOne";
import { ButtonTwoStyled } from "./buttonStyles";

export const ButtonTwo = ({ isSelected, onClick }: ButtonsProps) => {
    return (
      <>
        <ButtonTwoStyled isSelected={isSelected} onClick={onClick} >
          Em Baixa
        </ButtonTwoStyled>
      </>
    );
  };
  