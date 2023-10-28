import styled from "styled-components";
import Colors from "../../utils/theme/colors";

export const Wrapper = styled.div`
  background-color: ${Colors.white};
  padding-top: 22px;

  @media (max-width: 670px) {
    padding-top: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LoginWrapper = styled.div`
  padding-right: 72px;
  right: 0;
  position: absolute;
  cursor: pointer;
  @media (max-width: 1200px) {
    position: relative;
    padding-right: 30px;
  }

  @media (max-width: 670px) {
    padding-top: 5px;
    padding-right: 10px;
    z-index: 1;
  }
`;

export const ModalWrapper = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px
`

export const ModalText = styled.label`
  font-family: Chonburi;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0px;
  text-align: center;
  flex:1;
  color: #806799;
`

export const ModalButtons = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  display: flex;
`

export const ButtonContainer = styled.div`
  width: 50px;
`
