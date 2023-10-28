import styled from "styled-components";
import Colors from "../../utils/theme/colors";

export const Wrapper = styled.div`
  display: none;
  @media (max-width: 670px) {
    display: flex;
  }
`;

export const HamburgerContainer = styled.div`
  z-index: 3;
`;

export const Container = styled.div`
  z-index: 2;
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
  opacity: 0.9;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 65px;
  align-items: center;
  flex: 1;
`;

export const TopicContainer = styled.div`
  padding: 20px 0;
`;

export const Topic = styled.p`
  color: ${Colors.black};
  margin: 0;
  font-family: "Montserrat";
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
`;
