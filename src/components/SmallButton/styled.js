import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerWrapper = styled.div`
  border: 4px solid ${props => props.isSecondary ? '#A697C9' : 'rgba(255, 255, 255, 0.3)'};
  border-top: 4px solid ${props => props.isSecondary ? '#806799' : 'rgba(255, 255, 255, 0.8)'};;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: ${spin} 1s linear infinite;
  margin-right: 10px; /* Ajusta el espaciado como desees */
`;

export const Wrapper = styled.button`
  border-radius: 6px;
  background-color: ${props => props.isSecondary ? 'white' : '#806799'};
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  padding: 10px 30px;
  border: ${props => props.isSecondary ? '1px solid #806799' : 'none'};
  justify-content: center;
;
`

export const Text = styled.label`
  font-family: Chonburi;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0px;
  text-align: center;
  flex:1;
  color: ${props => props.isSecondary ? '#806799' : 'white'};;
  cursor: pointer
`