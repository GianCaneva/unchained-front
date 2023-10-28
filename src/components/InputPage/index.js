import React from "react";
import { Container, FormContainer, Wrapper } from "./styled";
import UnchainedLogo from "../UnchainedLogo";
import UnchainedInput from "../UnchainedInput";
import SmallButton from "../SmallButton";
import { ButtonsContainer } from "./styled";

const InputPage = ({
  inputs,
  form,
  errorForm,
  placeholders,
  setForm,
  setErrorForm,
  buttonLabel,
  onSubmit,
  secondButtonLabel,
  onSubmitSecondButton,
  isLoading,
}) => {
  return (
    <Wrapper>
      <Container>
        <UnchainedLogo />
        <FormContainer>
          {inputs.map((i) => (
            <UnchainedInput
              value={form[i]}
              key={i}
              error={errorForm[i]}
              placeholder={placeholders[i]}
              onChange={(v) => {
                setForm({ ...form, [i]: v });
                setErrorForm({ ...errorForm, [i]: "" });
              }}
            />
          ))}
        </FormContainer>
        <ButtonsContainer>
          {!!secondButtonLabel && <SmallButton text={secondButtonLabel} onPress={onSubmitSecondButton} isSecondary={true} isLoading={isLoading}/>}
          <SmallButton text={buttonLabel} onPress={onSubmit} isLoading={isLoading}/>
        </ButtonsContainer>
      </Container>
    </Wrapper>
  );
};

export default InputPage;
