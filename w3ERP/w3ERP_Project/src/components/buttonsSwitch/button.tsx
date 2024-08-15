import { theme } from "../../context/themeContext"
import { Button } from "./buttonStyles"

interface ButtonSwitchProps {

    type?: "button" | "submit" | "reset" | undefined
    className?: string
    onClick?: () => void
    onMouseDown?: () => void
    buttonName?: string
}

const ButtonSwitch: React.FC<ButtonSwitchProps> = ({type, className, onClick, onMouseDown, buttonName}) => {


    return (
        <Button
            theme={theme}
            type={type}
            className={className}
            onClick={onClick}
            onMouseDown={onMouseDown}
        >
            {buttonName}
        </Button>
    );
};
export default ButtonSwitch