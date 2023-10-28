import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px
`

export const Input = styled.input`
  width: 350px;
  height: 42px;
  border-radius: 2px;
  border: 0px;
  border-bottom: 1px solid ${props => props.hasError ? 'red' : '#c0c0c0' } !important;
  background: transparent !important;

  input::placeholder {
    font-size: 20px;
  };

  &:focus-visible {
    outline: none;
    border-bottom: 1px solid #806799 !important;
  }
;
`

export const Error = styled.label`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  color: red;
;
`