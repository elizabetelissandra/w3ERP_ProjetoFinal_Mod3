// import { useState } from "react"
// import { theme } from "../../context/themeContext"
// import { ButtonOne, ButtonTwo } from "./buttonOne"
// import { Button } from "./buttonStyles"

// interface ButtonSwitchProps {

//     type?: "button" | "submit" | "reset" | undefined
//     className?: string
//     onClick?: () => void
//     onMouseDown?: () => void
//     buttonName?: string
//     selected: boolean
//     children?: React.ReactNode
// }

// const ButtonSwitch: React.FC<ButtonSwitchProps> = ({type, selected = false, className, onClick, onMouseDown, buttonName, children}) => {


//     return (
//         <>
//         {/* <Button 
//             theme={theme}
//             type={type}
//             className={`${className} ${selected ? 'buttonAlto' : 'buttonBaixo'}`}
//             onClick={onClick}
//             onMouseDown={onMouseDown}
//             style={{
//                 background: selected ? theme.palette.error.main : theme.palette.success.main}
//             }
//         >
//             {buttonName}
//         </Button> */}
//         <ButtonOne sx={{width: "100px", background: theme.palette.success.main}} isActive={isButtonOneActive} onClick={() => setIsButtonOneActive(true)} > {children} </ButtonOne>
//         <ButtonTwo sx={{background: theme.palette.error.main}} isActive={!isButtonOneActive} onClick={() => setIsButtonOneActive(false)}>{children} </ButtonTwo>
//     </>
//     );
// };
// export default ButtonSwitch

import React, { useState } from 'react';
import { ButtonOne, ButtonTwo } from './buttonOne';


const ButtomComponent = () => { 
  const [isButtonOneActive, setIsButtonOneActive] = useState(true);

  return (
    <div>
      <ButtonOne isActive={isButtonOneActive} onClick={() => setIsButtonOneActive(true)} />
      <ButtonTwo isActive={!isButtonOneActive} onClick={() => setIsButtonOneActive(false)} />
    </div>
  );
}

export default ButtomComponent;