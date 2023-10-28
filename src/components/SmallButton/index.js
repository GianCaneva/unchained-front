import React from "react";
import { Wrapper, Text, SpinnerWrapper } from "./styled";

const SmallButton = ({text = "", onPress = () => {}, isSecondary = false, isLoading = false}) => {

  return (
    <Wrapper onClick={onPress} isSecondary={isSecondary}>
      { isLoading ? <SpinnerWrapper isSecondary={isSecondary}/> : <Text isSecondary={isSecondary}>{text}</Text>}
    </Wrapper>
  );
};

export default SmallButton;
