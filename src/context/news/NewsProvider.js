import React, {useCallback, useState} from 'react';
import {ARTICLE, NewsContext, TOPICS} from './NewsContext';
import api from '../../utils/api';
import {get} from 'lodash'

const NewsProvider = ({children}) => {
  const [topics] = useState(TOPICS);
  const [currentTopic, setCurrentTopic] = useState('home')
  const [news, setNews] = useState([])
  const [currentArticleId, setCurrentArticleId] = useState(null)
  const [currentArticle, setCurrentArticle] = useState(ARTICLE)
  const [totalPages, setTotalPages] = useState(10)

  const fetchNews = useCallback(
    async (topic, page, token, userId, onSuccess = () => {}, onFailure = () => {}) => {
      try {
        const response = await api.news.fetchNews(topic, page, token, userId);
        const pages = get(response, 'totalPages', 10)
        const apiNews = get(response, 'content', [])
        setNews(apiNews)
        setTotalPages(pages)
        onSuccess()
      } catch (e) {
        onFailure();
      }
    },
    [],
  );

  const fetchArticle = useCallback(
    async (id, step,token, userId, onSuccess = () => {}, onFailure = () => {}) => {
      try {
        const response = await api.news.fetchArticle(id, step,token, userId);
        setCurrentArticle(response)
        onSuccess()
      } catch (e) {
        console.log("e",e)
        onFailure();
      }
    },
    [],
  );

  const setNewsTime = useCallback(
    async (id, topic, time, token, onSuccess = () => {}, onFailure = () => {}) => {
      try {
        await api.news.setNewsTime(id, topic, time, token);
        onSuccess()
      } catch (e) {
        onFailure();
      }
    },
    [],
  );

  return (
    <NewsContext.Provider
      value={{
        topics,
        currentTopic,
        news,
        currentArticle,
        totalPages,
        setCurrentTopic,
        fetchNews,
        fetchArticle,
        setNewsTime,
        currentArticleId, 
        setCurrentArticleId
      }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
