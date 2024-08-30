

import React, { useState } from 'react';
import { ButtonOne } from './buttonOne';
import { ButtonTwo } from './buttonTwo';


const ButtomComponent = () => { 
  const [isButtonOneActive, setIsButtonOneActive] = useState(true);

  return (
    <div>
      <ButtonOne isSelected={isButtonOneActive} onClick={() => setIsButtonOneActive(true)} />
      <ButtonTwo isSelected={!isButtonOneActive} onClick={() => setIsButtonOneActive(false)} />
    </div>
  );
}

export default ButtomComponent;