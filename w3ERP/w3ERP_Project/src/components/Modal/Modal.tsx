import React, { useState } from "react";
import { ButtonClose, DivButtonModal, DivModal, DivModalContent } from "./ModalStyles";
import CloseIcon from "@mui/icons-material/Close";

interface ModalProps {
    OpenModal: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({OpenModal, onClose}) => {


  return (
    <>
    {OpenModal &&
    <DivModal >
      <DivModalContent>
        <DivButtonModal>
          <ButtonClose onClick={() => onClose()}>
            <CloseIcon />
          </ButtonClose>
        </DivButtonModal>
        <h1>E-mail ou senha incorreta!</h1>
        <p>Tente novamente.</p>
      </DivModalContent>
    </DivModal>
    }
    </>
  )
}

export default Modal;
