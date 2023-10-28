import styled from "styled-components";

export const Wrapper = styled.div``;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding: 30px 20px;
  @media (min-width: 920px) {
    flex-direction: row;
    padding: 50px 80px;
  }
`;

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

//TODO: cuando tengamos las lista de noticias, tenemos que ver a partir de que width le agregamos el margin-left auto

export const RightSideBar = styled.div`
  display: none;
  @media (min-width: 960px) {
    display: flex;
    margin-left: auto
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  padding-top: 50px;
  @media (min-width: 500px) {
    height: 300px;
  }
  @media (min-width: 800px) {
    height: 500px;
  }
  @media (min-width: 1000px) {
    height: 580px;
  }
`;
