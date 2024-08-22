import { theme } from "../../context/themeContext"
import { Button } from "./buttonStyles"

interface ButtonSwitchProps {

    type?: "button" | "submit" | "reset" | undefined
    className?: string
    onClick?: () => void
    onMouseDown?: () => void
    buttonName?: string
    selected: boolean
}

const ButtonSwitch: React.FC<ButtonSwitchProps> = ({type, selected = false, className, onClick, onMouseDown, buttonName}) => {


    return (
        <Button 
            theme={theme}
            type={type}
            className={`${className} ${selected ? 'buttonAlto' : 'buttonBaixo'}`}
            onClick={onClick}
            onMouseDown={onMouseDown}
            style={{
                background: selected ? theme.palette.error.main : theme.palette.success.main}
            }
        >
            {buttonName}
        </Button>
    );
};
export default ButtonSwitch