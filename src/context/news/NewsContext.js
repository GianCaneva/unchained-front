import { createContext } from "react";

export const TOPICS = [
  {
    id: "home",
    label: "HOME"
  },
  {
    id: "POLITICS",
    label: "POLITICA",
    interestStat: "politicsInterest",
    readingTime: "politicsTime",
    graphLabel: 'POL'
  },
  {
    id: "ECONOMY",
    label: "ECONOMÍA",
    interestStat: "economyInterest",
    readingTime: "economyTime",
    graphLabel: 'ECO'
  },
  {
    id: "SPORTS",
    label: "DEPORTES",
    interestStat: "sportsInterest",
    readingTime: "sportsTime",
    graphLabel: 'DEP'
  },
  {
    id: "SOCIALS",
    label: "SOCIALES",
    interestStat: "socialInterest",
    readingTime: "socialTime",
    graphLabel: 'SOC'
  },
  {
    id: "INTERNATIONAL",
    label: "INTERNACIONAL",
    interestStat: "internationalInterest",
    readingTime: "internationalTime",
    graphLabel: 'INT'
  },
  {
    id: "POLICE",
    label: "POLICIAL",
    interestStat: "policeInterest",
    readingTime: "policeTime",
    graphLabel: 'PLC'
  },
];

export const ARTICLE = {
  title: "",
  body: ""
};


export const NewsContext = createContext({
  topics: TOPICS,
  currentTopic: "home",
  news: [],
  currentArticle: ARTICLE,
  totalPages: 10,
  currentArticleId: null,
  setCurrentTopic: (currentTopic) => {},
  fetchNews: async (topic, page, token, userId, onSuccess, onFailure) => {},
  fetchArticle: async (id, step, token, userId ,onSuccess, onFailure) => {},
  setNewsTime: async (id, topic, time, token, onSuccess, onFailure) => {},
  setCurrentArticleId: articleId => {}
});
