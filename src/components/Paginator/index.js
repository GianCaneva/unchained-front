import React, { useContext, useEffect, useState } from "react";
import {
  ChevronIconContainer,
  ChevronRightIcon,
  ChevronLeftIcon,
  NewsContainer,
  PaginatorFooter,
  Title,
  Wrapper,
  PageNumber,
  PageNumberContainer,
  Container,
} from "./styled";
import SpecificNews from "../SpecificNews";
import { NewsContext } from "../../context/news/NewsContext";
import { SessionContext } from "../../context/session/SessionContext";
import Loading from "../../components/Loading";
import {get} from 'lodash'

const NEWS_TEST = [
  {
    topic: "TECNOLOGÍA",
    summary:
      "La compañía de Elon Musk anunció que aceptará la criptomoneda como forma de pago. El bitcoin subió 15% tras el anuncio.",
    id: 1,
  },
  {
    topic: "TECNOLOGÍA",
    summary:
      "La compañía de Elon Musk anunció que aceptará la criptomoneda como forma de pago. El bitcoin subió 15% tras el anuncio.",
    id: 2,
  },
  {
    topic: "TECNOLOGÍA",
    summary:
      "La compañía de Elon Musk anunció que aceptará la criptomoneda como forma de pago. El bitcoin subió 15% tras el anuncio.",
    id: 3,
  },
  {
    topic: "TECNOLOGÍA",
    summary:
      "La compañía de Elon Musk anunció que aceptará la criptomoneda como forma de pago. El bitcoin subió 15% tras el anuncio.",
    id: 4,
  },
  {
    topic: "TECNOLOGÍA",
    summary:
      "La compañía de Elon Musk anunció que aceptará la criptomoneda como forma de pago. El bitcoin subió 15% tras el anuncio.",
    id: 5,
  },
  {
    topic: "TECNOLOGÍA",
    summary:
      "La compañía de Elon Musk anunció que aceptará la criptomoneda como forma de pago. El bitcoin subió 15% tras el anuncio.",
    id: 6,
  },
];

const Paginator = () => {
  const { fetchNews, currentTopic, news, totalPages} = useContext(NewsContext);
  const { token, userId } = useContext(SessionContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [newsAmountToShow, setNewsAmountToShow] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchNews(
      currentTopic,
      currentPage - 1,
      token,
      userId,
      () => setLoading(false),
      () => setLoading(false)
    );
  }, [currentTopic, currentPage, token, fetchNews, userId]);

  useEffect(() => {
    let amount = [];
    for (let i = 0; i < totalPages; i++) {
      amount.push(i + 1);
    }
    setNewsAmountToShow(amount);
  }, [totalPages]);

  const moveToPage = (page) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);
  };

  return (
    <Wrapper>
      <Title>ÚLTIMAS NOTICIAS</Title>
      <NewsContainer>
        {news.map(
          (
            article,
            index
          ) => (
            <SpecificNews key={index} article={article} />
          )
        )}
      </NewsContainer>
      <PaginatorFooter>
        <ChevronIconContainer onClick={() => moveToPage(currentPage - 1)}>
          <ChevronLeftIcon />
        </ChevronIconContainer>
        <Container>
          {newsAmountToShow.map((n) => {
            return (
              <PageNumberContainer key={n} onClick={() => moveToPage(n)}>
                <PageNumber isSelected={n === currentPage}>{n}</PageNumber>
              </PageNumberContainer>
            );
          })}
        </Container>
        <ChevronIconContainer onClick={() => moveToPage(currentPage + 1)}>
          <ChevronRightIcon />
        </ChevronIconContainer>
      </PaginatorFooter>
    </Wrapper>
  );
};

export default Paginator;
