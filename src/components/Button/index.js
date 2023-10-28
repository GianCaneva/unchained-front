import React from "react";
import { Wrapper, Text } from "./styled";

const Button = ({text = "", onPress = () => {}}) => {

  return (
    <Wrapper onClick={onPress}>
        <Text>{text}</Text>
    </Wrapper>
  );
};

export default Button;
