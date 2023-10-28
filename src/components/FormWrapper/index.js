import React from "react";
import { Container, Wrapper } from "./styled";
import UnchainedLogo from "../UnchainedLogo";

const FormWrapper = ({
  children,
  withLogo = true
}) => {
  return (
    <Wrapper>
      <Container>
        {withLogo && <UnchainedLogo />}
        {children}
      </Container>
    </Wrapper>
  );
};

export default FormWrapper;
