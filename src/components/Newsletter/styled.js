import styled from 'styled-components';
import {PaperPlane} from '@styled-icons/ionicons-sharp/PaperPlane'

export const Wrapper = styled.div`
  background-color: #f2f0f5;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    flex-direction: row;
    padding: 40px 40px;
  }
;
`

export const NewsletterImage = styled.img`
  width: 240px;
  height: 220px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 40px 0px;

  @media (min-width: 700px) {
    margin: 20px 40px;
  }
  
;
`

export const Title = styled.div`
  font-family: Chonburi;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0px;
  margin-bottom: 10px;
  @media (min-width: 700px) {
    font-size: 24px;
  }
;
`

export const Subtitle = styled.div`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 15px;
  @media (min-width: 700px) {
    font-size: 18px;
  }
;
`

export const IconContainer = styled.div`
  padding: 15px;
  background-color: #806799;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`


export const ButtonIcon = styled(PaperPlane)`
  width: 24px;
  height: 24px;
  color: #FFFFFF;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  gap: 15px;
  margin-top: 25px;
;
`

export const ButtonText = styled.label`
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0px;
  color: #806799;
  cursor: pointer;
;
`