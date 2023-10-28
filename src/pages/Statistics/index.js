import React, { useContext, useEffect, useState } from "react";
import UnchainedLogo from "../../components/UnchainedLogo";
import {
  Row,
  Container,
  Title,
  Wrapper,
  Topic,
  ReadingTime,
  ReadingTimeContainer,
  RightArrowIcon,
  LeftArrowIcon
} from "./styled";
import { SessionContext } from "../../context/session/SessionContext";
import StatsBar from "../../components/StatsBar";
import { NewsContext } from "../../context/news/NewsContext";

const Statistics = () => {
  const { user, getUser, mail } = useContext(SessionContext);
  const { topics } = useContext(NewsContext);

  const [readingTime, setReadingTime] = useState([]);

  useEffect(() => {
    const readingTimeData = [];
    if(!user) {
      return
    }
    topics.forEach((topic) => {
      if (topic.id === "home") return;
      readingTimeData.push({
        topic: topic.label,
        time: user[topic.readingTime],
      });
    });
    setReadingTime(readingTimeData);
  }, [user, topics]);

  useEffect(() => {
    getUser(mail)
  }, [mail, getUser])

  return (
    <Wrapper>
      <div>
        <UnchainedLogo />
      </div>
      <Container>
        <Row>
          <Title>Intereses</Title>
          <StatsBar />
        </Row>
        <Row>
          <Title>Tiempo de lectura promedio</Title>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            {readingTime.map((t) => {
              return (
                <ReadingTimeContainer>
                  <Topic>{t.topic}</Topic>
                  <ReadingTime>{t.time}min</ReadingTime>
                </ReadingTimeContainer>
              );
            })}
          </div>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Statistics;
