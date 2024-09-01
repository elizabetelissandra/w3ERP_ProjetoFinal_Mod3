import { theme } from "../../styles/themeStyles";
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
      <ButtonOneStyled theme={theme} isSelected={isSelected} onClick={onClick}>
        Em Alta
      </ButtonOneStyled>
    </>
  );
};


