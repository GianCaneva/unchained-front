import styled from "styled-components";
import Colors from "../../utils/theme/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.lightGray};
  padding-top: 30px;
  justify-content: flex-end;
  box-shadow: 0px 1px 2px 0px rgba(90, 99, 114, 0.2);
  max-width: 250px;

`;

export const TopicContainer = styled.div`
  display: flex;
`;

export const Topic = styled.p`
  color: ${Colors.red};
  background-color: ${Colors.white};
  padding: 0 5px;
  text-transform: uppercase;
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 500;
  line-height: 17px;
  margin: 0;
`;

export const NewsContainer = styled.div`
  background-color: ${Colors.white};
  padding: 11px 20px;
  max-width: 215px;
`;

export const NewsSummary = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 4; /* Define el número máximo de líneas que deseas mostrar */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: Chonburi;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  color: ${Colors.black};
`;
