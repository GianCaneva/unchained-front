import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 30px 0px;
  justify-content: center;
  align-items: center;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 20px;
`

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
`

export const Error = styled.label`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  color: red;
`

export const Text = styled.label`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  margin-top: 30px;
  max-width: 350px;
  text-align: center;
`