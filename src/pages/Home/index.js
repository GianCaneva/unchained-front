import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NewsContext } from "../../context/news/NewsContext";
import { SessionContext } from "../../context/session/SessionContext";
import { get } from "lodash";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import homePhoto from "../../assets/home.png";
import { Body, Image, NewsContainer, RightSideBar, Wrapper } from "./styled";
import SocialBar from "../../components/SocialBar";
import Newsletter from "../../components/Newsletter"
import Paginator from "../../components/Paginator";

const Home = () => {
  const match = { params: useParams() };
  const urlTopic = get(match, "params.urlTopic", null);
  const {setCurrentTopic, topics } = useContext(NewsContext);
  const { recoverUser, user, mail, getUser } = useContext(SessionContext);
  let navigate = useNavigate();

  useEffect(() => {
    if (urlTopic && topics.findIndex((t) => t.id === urlTopic) === -1) {
      navigate(`/home`);
      return;
    }
      setCurrentTopic(urlTopic ? urlTopic : 'home');
  }, [urlTopic, navigate, topics, setCurrentTopic]);

  useEffect(() => {
    if(!user){
      recoverUser()
    }
    getUser(mail)
  }, [mail, getUser])



  return (
    <Wrapper>
      <Header />
      <Image src={homePhoto} />
      <Body>
        <NewsContainer>
          <Paginator />
        </NewsContainer>
        <RightSideBar>
          <SocialBar />
        </RightSideBar>
      </Body>
      <Newsletter />
      <Footer />
    </Wrapper>
  );
};

export default Home;
