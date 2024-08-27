import { ButtonOneStyled, ButtonTwoStyled } from "./buttonStyles";

export interface ButtonsProps {
  isSelected: boolean;
  onClick: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
}



export const ButtonOne = ({ isSelected, onClick }: ButtonsProps) => {
  return (
    <>
      <ButtonOneStyled isSelected={isSelected} onClick={onClick}>
        Em Alta
      </ButtonOneStyled>
    </>
  );
};

export const ButtonTwo = ({ isSelected, onClick }: ButtonsProps) => {
  return (
    <>
      <ButtonTwoStyled isSelected={isSelected} onClick={onClick} >
        Em Baixa
      </ButtonTwoStyled>
    </>
  );
};

