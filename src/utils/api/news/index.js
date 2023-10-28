import fetchApi from "../connector";

export const fetchNews = (topic, page, token, userId) =>
  fetchApi(`/free/news/${topic === "home" ? "home" : "section"}?userId=${userId}&page=${page}${topic !== "home" ? `&section=${topic}` : "" }`, { });

export const fetchArticle = (id, step, token, userId) =>
  fetchApi(`/free/article/getArticle?userId=${userId}&newsId=${id}&extension=${step}`, {});

export const setNewsTime = (userId, section, time, token) =>
  fetchApi(`/free/user/modifyReadTime`, { method: "POST", data: { userId, section, time } });
