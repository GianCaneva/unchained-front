import fetchApi from "../connector";
import fetchLoginApi from "../apiConnector";
import {get} from 'lodash'

export const login = (email, password) =>
  fetchLoginApi("/free/login", { method: "POST", data: { email, password } });

export const getUser = (email) =>
  fetchApi(`/free/user/getUser?email=${email}`, 
  { 
    method: "GET",
    // headers: {Authorization: `Bearer ${accessToken}`},
   });

export const createUser = (email, password) =>
  fetchApi("/free/user/register", { method: "POST", data: { email, password } });  

export const sendCode = (email) =>
  fetchApi("/free/user/forgotPassword", { method: "POST", data: { email } });  

export const deleteAccount = (userId) =>
  fetchApi(`/free/user/deleteUser?userId=${userId}`, { method: "POST"});

export const changePassword = (currentPassword, newPassword, userId) =>
  fetchApi(`/free/user/changePassword`, {
    method: "POST",
    data: { currentPassword, newPassword, userId },
  });

export const recoverPassword = (code, mail, newPass) =>
  fetchApi("/vi/session/change_password", {
    method: "POST",
    data: { code, mail, newPass },
  });  


export const suscribeNewsletter = (userId2) =>{
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = get(user, 'id')
  fetchApi("/free/user/subscribeNewsletter", { method: "POST", data: {userId} });
}

export const modifyStats = (stats) =>{
  const {id, politicsInterest, economyInterest, sportsInterest, socialInterest, internationalInterest, policeInterest} = stats
  return fetchApi("/free/user/modifyInterestSection", { method: "POST", data: {userId: id, policeInterest, economyInterest, sportsInterest, socialInterest, internationalInterest, politicsInterest} })}
