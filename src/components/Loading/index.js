import React from 'react';
import {RingContainer,ErrorContainer} from "./styled"
import BarLoader from "react-spinners/BarLoader";

function Loading() {
  return (
    <ErrorContainer>
      <RingContainer>
      <BarLoader
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </RingContainer>
    </ErrorContainer>
  );
}


export default Loading;
