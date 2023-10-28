import styled from "styled-components";
import Colors from "../../utils/theme/colors";

export const Wrapper = styled.div`
  padding-top: 22px;

  @media (max-width: 670px) {
    padding-top: 0;
  }

  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  flex-direction: column;
  padding: 0 20px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 4px #c9c9c9;
  padding: 20px;
  background-color: white;
  gap: 10px
`;

export const Title = styled.p`
  margin: 0;
  font-family: Montserrat;
  font-size: 12px;
  letter-spacing: 0px;
  text-transform: uppercase;
  @media (min-width: 700px) {
    font-size: 20px;
  }
`;

export const ReadingTimeContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between; 
  gap: 15px;
`;

export const Topic = styled.p`
  font-family: Montserrat;
  font-size: 12px;
  letter-spacing: 0px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const ReadingTime = styled(Topic)`
  font-weight: normal;
  text-transform: none;
  color: ${Colors.gray};
`;