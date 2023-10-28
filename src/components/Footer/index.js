import React, { useContext, useEffect, useState } from "react";
import { Column, Info, InstagramIcon, Social, Title, Topics, TwitterIcon, Wrapper, YoutubeIcon, FacebookIcon, Row, TopicRow, Section } from "./styled";
import useScreenSize from "../../hooks/useScreenSize";
import {NewsContext} from "../../context/news/NewsContext"
import { useNavigate } from "react-router-dom";


const SOCIALS = [
  {icon: <InstagramIcon onClick={() => window.open('https://www.instagram.com/f1/?hl=es-la', '_blank')}/>, key: 'instagram'},
  {icon: <TwitterIcon onClick={() => window.open('https://twitter.com/F1?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor', '_blank')}/>, key: 'tw'},
  {icon: <FacebookIcon onClick={() => window.open('https://www.facebook.com/Formula1/?locale=es_LA', '_blank')}/>, key: 'gb'},
  {icon: <YoutubeIcon onClick={() => window.open('https://www.youtube.com/@Formula1', '_blank')}/>, key: 'yt'}
]

const Footer = ({}) => {
  const [topicsRow, setTopicsRow] = useState([])
  const { width } = useScreenSize()
  const {topics, setCurrentTopic, currentTopic} = useContext(NewsContext)
  let navigate = useNavigate();

  useEffect(() => {
    let amount = 5;
    if (width < 1000){
      amount = 4
    }
    if (width < 760) {
      amount = 2
    }
    if (width < 650) {
      amount = 1
    }
    const filteredTopics = topics.filter((ft) => ft.id!= "home")
    const auxList = filteredTopics.reduce((result, current, index) => {
      const subindex = Math.floor(index / amount);
      if (!result[subindex]) {
        result[subindex] = [];
      }
      result[subindex].push(current);
      return result;
    }, []);
    setTopicsRow(auxList)
  }, [width, topics])

  const onSelectTopic = (id) => {
    setCurrentTopic(id)
    navigate(`/home/${id}`)
  }

  return (
    <Wrapper>
        <Topics>
          {
            topicsRow.map((tp, i) => (
              <TopicRow key={`topic-row-${i}`}>
                {tp.map((t) => (
                  <Section key={t.id} onClick={() => onSelectTopic(t.id)} selected={t.id === currentTopic}>{t.label}</Section>
                ))}
              </TopicRow>
            ))
          }
        </Topics>
        <Social>
          <Column>
            <Title>Seguinos</Title>
            <Row>
              {SOCIALS.map((s) => (
                <div key={s.key}>
                  {s.icon}
                </div>
              ))}
            </Row>
          </Column>
          <Column>
            <Title>Sobre nosotros</Title>
            <Info>
                © 2019 orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l
            </Info>
          </Column>
        </Social>
    </Wrapper>
  );
};

export default Footer;
