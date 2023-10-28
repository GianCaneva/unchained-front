import styled from "styled-components";
import Colors from "../../utils/theme/colors";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  cursor: pointer;
`;

export const TitleText = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.p`
  color: ${Colors.black};
  font-family: "Montagu Slab";
  font-size: 40px;
  line-height: 51px;
  margin: 0;
  font-weight: 500;
`;

export const TitleAI = styled(Title)`
  color: ${Colors.red};
`;

export const Subtitle = styled.p`
  color: ${Colors.black};
  margin: 0;
  font-family: "Montserrat";
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
`;
