import React from "react";
import { Error, Input, Wrapper } from "./styled";

const UnchainedInput = ({value, onChange, error, placeholder, type = "text"}) => {

  return (
    <Wrapper>
      <Input placeholder={placeholder} value={value} onChange={(e) => onChange((e.target.value))} hasError={!!error} type={type} />
      {!!error && <Error>{error}</Error>}
    </Wrapper>
  )
};

export default UnchainedInput;
