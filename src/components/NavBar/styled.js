import styled from "styled-components";
import Colors from "../../utils/theme/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 50px;
  margin: 0;
  padding-left: 0;
  list-style: none;

  @media (max-width: 670px) {
    display: none;
    transition: transform 0.3s ease-in-out;
  }
`;

export const TopicContainer = styled.div`
  padding: 0 20px;
  ${(props) => props.isSelected && `background-color: ${Colors.orange}`};
  transition: all 0.3s ease; 
`;

export const Topic = styled.p`
  color: ${Colors.black};
  margin: 0;
  font-family: "Montserrat";
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  cursor: pointer;
`;
