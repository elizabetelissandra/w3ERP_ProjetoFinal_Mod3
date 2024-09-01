import styled, {keyframes} from "styled-components";

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  50% { transform: translateX(10px); }
  75% { transform: translateX(-10px); }
  100% { transform: translateX(0); }
`;

export const DivModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    
`


export const DivModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFFFFF;
    padding: 20px;
    border-radius: 8px;
    animation: ${shake} 0.5s ease-in-out;
`

export const DivButtonModal = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
`

export const ButtonClose = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
`

