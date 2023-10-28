import React, { useContext, useState } from "react";
import { Wrapper, NewsletterImage, InfoContainer, Title, Subtitle, ButtonContainer, IconContainer, ButtonIcon, ButtonText } from "./styled";
import NEWSLETTER from '../../assets/newsletter.png'
import UnchainedInput from "../UnchainedInput";
import { isInvalidMail } from '../../utils/validations'
import { SessionContext } from "../../context/session/SessionContext";
import { get } from "lodash";

const Newsletter = () => {

  const [mail, setMail] = useState('')
  const [mailError, setMailError] = useState('')

  const {user, suscribeNewsletter, userId} = useContext(SessionContext)

  const showNewsletter = get(user, 'newsletter', 'N') === 'N'

  const onSubmit = () => {
    if(isInvalidMail(mail)) {
      setMailError("Formato de mail inválido")
      return
    }
    suscribeNewsletter(mail, userId)
  } 

  if(!showNewsletter) return null

  return (
    <Wrapper>
      <NewsletterImage src={NEWSLETTER}/>
      <InfoContainer>
        <Title>SUSCRIBITE A NUESTRO NEWSLETTER</Title>
        <Subtitle>
          Suscríbase a nuestro boletín diario y reciba lo mejor de UNCHAINED en su buzón.
        </Subtitle>
        <UnchainedInput placeholder="Su email" value={mail} 
          onChange={(value) => {
            setMail(value)
            setMailError("")
          }} 
          error={mailError}/>
        <ButtonContainer onClick={onSubmit}>
          <IconContainer>
            <ButtonIcon />
          </IconContainer>
          <ButtonText>Suscribirse</ButtonText>
        </ButtonContainer>
      </InfoContainer>
    </Wrapper>
  );
};

export default Newsletter;
