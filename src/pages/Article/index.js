import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NewsContext } from "../../context/news/NewsContext";
import { SessionContext } from "../../context/session/SessionContext";
import {get} from "lodash"
import { Wrapper, Body, RightSideBar, Container, Title, Text, ButtonContainer } from "./styled";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Newsletter from "../../components/Newsletter";
import SocialBar from "../../components/SocialBar";
import Button from "../../components/Button";
import Loading from "../../components/Loading";

const Article = ({}) => {

  const match = { params: useParams() };
  const urlTopic = get(match, 'params.urlTopic', null)
  const urlArticleId = get(match, 'params.articleId', null)
  const {currentTopic, setCurrentTopic, currentArticle, 
    fetchArticle, setNewsTime, currentArticleId, setCurrentArticleId} = useContext(NewsContext)
  const {token, userId} = useContext(SessionContext)

  const [step, setStep] = useState(0)
  const [loading, setLoading] = useState(false)
  const [initTime, setInitTime] = useState(0)
  const [sentStats, setSentStats] = useState(false)

  const articleTitle = get(currentArticle, 'title', "")
  const articleText = get(currentArticle, 'article', "")

  useEffect(() => {
    if(urlTopic && (!currentTopic || currentTopic!= urlTopic)){
      setCurrentTopic(urlTopic)
    }
  }, [urlTopic])

  useEffect(() => {
    setLoading(true)
    if(urlArticleId && (!currentArticleId || currentArticleId != urlArticleId)){
      setCurrentArticleId(urlArticleId)
    }
    fetchArticle(urlArticleId, 0, token, userId, () => {setLoading(false);}, () => {setLoading(false);})
  }, [urlArticleId])

  useEffect(() => {
    return () => {
      const endTime = new Date().getTime();
      const seconds = Math.floor((endTime - initTime) / 1000);
      if(sentStats){
        const minutes = seconds / 60;
        setNewsTime(userId, currentTopic, minutes, token, () => {}, () => {});
      }
      else{
        setSentStats(true)
      }
    };
  }, [initTime])

  useEffect(() => {
    const now = new Date().getTime();
    setInitTime(now)
  }, [])

  const updateArticle = (newStep) => {
    setLoading(true)
    setStep(newStep)
    fetchArticle(urlArticleId, newStep, token, userId ,() => {setLoading(false)}, () => {setLoading(false)})
  }

  return (
    <Wrapper>
      {loading && <Loading />}
      <Header />
      <Body>
        <Container>
          <Title>{articleTitle.replace(/\\/g, '')}</Title>
          <Text>{articleText.replace(/\\/g, '')}</Text>
          {step < 3 && (
            <ButtonContainer>
              <Button text={"Extender noticia"} onPress={() => updateArticle(step + 1)}/>
            </ButtonContainer>
          )}
        </Container>
        <RightSideBar>
          <SocialBar />
        </RightSideBar>
      </Body>
      <Newsletter />
      <Footer />
    </Wrapper>
  );
};

export default Article;
