import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NewsContext } from "../../context/news/NewsContext";
import {
  Container,
  NewsContainer,
  NewsSummary,
  Topic,
  TopicContainer,
} from "./styled";

const SpecificNews = ({ article }) => {
  const { section, title, id } = article;
  const { setCurrentArticleId, setCurrentTopic } = useContext(NewsContext);

  let navigate = useNavigate();

  const navigateToArticle = () => {
    // TODO:  tenemos que guardar el tipo, y guardamos su id para buscarla despues.
    setCurrentArticleId(id);
    setCurrentTopic(section);
    navigate(`/article/${section}/${id}`);
  };
  return (
    <Container onClick={navigateToArticle}>
      <TopicContainer>
        <Topic>{section}</Topic>
      </TopicContainer>
      <NewsContainer>
        <NewsSummary>{title.replace(/\\/g, '')}</NewsSummary>
      </NewsContainer>
    </Container>
  );
};

export default SpecificNews;
