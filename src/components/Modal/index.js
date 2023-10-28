import React from "react";
import { ModalContent, ModalOverlay } from "./styled";

const Modal = ({children}) => {

  return (
    <ModalOverlay>
      <ModalContent>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
