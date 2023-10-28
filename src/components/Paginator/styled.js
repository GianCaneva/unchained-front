import styled from "styled-components";
import Colors from "../../utils/theme/colors";
import { ChevronLeft } from "@styled-icons/bootstrap/ChevronLeft";
import { ChevronRight } from "@styled-icons/bootstrap/ChevronRight";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Title = styled.p`
  color: ${Colors.black};
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin: 0;
  @media (max-width: 590px) {
    text-align: center;
  }
`;

export const NewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 elementos por fila */
  grid-gap: 20px 0;
  justify-content: space-between;
  padding: 20px 0 20px 20px;

  @media (max-width: 1170px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 590px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
`;

export const PaginatorFooter = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;

export const ChevronIconContainer = styled.div`
  align-items: center;
  display: flex;
`;

export const ChevronRightIcon = styled(ChevronRight)`
  width: 18px;
  height: 18px;
  color: ${Colors.black};
  cursor: pointer;
  margin-left: 10px;
`;

export const ChevronLeftIcon = styled(ChevronLeft)`
  width: 18px;
  height: 18px;
  color: ${Colors.black};
  cursor: pointer;
  margin-right: 10px;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
`;

export const PageNumberContainer = styled.div`
  cursor: pointer;
`;

export const PageNumber = styled.p`
  color: ${Colors.black};
  margin: 0;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: ${(props) => (props.isSelected ? 700 : 400)};
  line-height: 17px;
`;
