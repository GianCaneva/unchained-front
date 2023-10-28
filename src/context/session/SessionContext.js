import {createContext} from 'react';

export const STATS = {
  politicsInterest: 0,
  politicsTime: 0,
  economyInterest: 0,
  economyTime: 0,
  sportsInterest: 0,
  sportsTime: 0,
  socialInterest: 0,
  socialTime: 0,
  internationalInterest: 0,
  internationalTime: 0,
  policeTime: 0,
  policeInterest: 0
}

export const SessionContext = createContext({
  mail: null,
  token: null,
  user: null,
  showDeleteModal: false,
  setShowDeleteModal: () => {},
  userId: null,
  stats: STATS,
  login: async (mail, pass, onSuccess, onFailure) => {},
  createUser: async (mail, pass, onSuccess, onFailure) => {},
  deleteAccount: async (userId, onSuccess, onFailure) => {},
  changePassword: async (oldPass, newPass, userId, onSuccess, onFailure) => {},
  recoverPassword: async (code, mail, newPass, onSuccess, onFailure) => {},
  suscribeNewsletter: async (mail, id, onSuccess, onFailure) => {},
  sendCode: async (mail, onSuccess, onFailure) => {},
  fetchStats: async (userId, onSuccess, onFailure) => {},
  recoverUser: async () => {},
  getUser: async (mail) => {},
  modifyStats: async (stats) => {},
  closeSession: () => {}
});
