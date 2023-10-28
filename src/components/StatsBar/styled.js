import styled from "styled-components";

import {PlusSquare} from "@styled-icons/boxicons-solid/PlusSquare"
import {MinusSquare} from '@styled-icons/boxicons-solid/MinusSquare'

export const Wrapper = styled.div`
  
`;

export const LeftArrowIcon = styled(MinusSquare)`
  width: 25px;
  height: 25px;
`;

export const RightArrowIcon = styled(PlusSquare)`
  width: 25px;
  height: 25px;
`;



export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 600px;
  gap: 10px;
  justify-content: center;
`;

export const Container = styled.div`
`;

