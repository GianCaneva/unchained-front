import React, {useCallback, useEffect, useState} from 'react';
import {STATS, SessionContext} from './SessionContext';
import api from '../../utils/api';
import {get} from 'lodash'

const SessionProvider = ({children}) => {
  const [mail, setMail] = useState(null)
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [stats, setStats] = useState(STATS)
  
  const userId = get(user, 'id')

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const mail = localStorage.getItem('mail');
    if (user){
      setUser(user)
    }
    if (mail){
      setMail(mail)
    }
  }, [])

  const recoverUser = useCallback(
    async () => {
      try {
        const user = localStorage.getItem('user');
        setUser(user)
      } catch (e) {
      }
    },
    [],
  );

  const login = useCallback(
    async (mail, pass, onSuccess = () => {}, onFailure = () => {}) => {
      try {
        const accessToken = await api.session.login(mail, pass);
        setMail(mail)
        setToken(accessToken)
        onSuccess()
        const apiUser = await api.session.getUser(mail)
        setUser(apiUser)
        localStorage.setItem('user', JSON.stringify(apiUser));
        localStorage.setItem('mail', mail);
      } catch (e) {
        onFailure('Usuario o Contraseña Incorrectos');
      }
    },
    [],
  );

  const getUser = useCallback(
    async (mail) => {
      try {
        const apiUser = await api.session.getUser(mail)
        setUser(apiUser)
      } catch (e) {
      }
    },
    [],
  );

  const createUser = useCallback(
    async (mail, pass, onSuccess = () => {}, onFailure = () => {}) => {
      try {
        const response = await api.session.createUser(mail, pass);
        setMail(mail)
        setToken(response)
        onSuccess()
      } catch (e) {
        onFailure('El mail ingresado ya se encuentraRegistrado');
      }
    },
    [],
  );

  const sendCode = useCallback(
    async (mail, onSuccess = () => {}, onFailure = () => {}) => {
      try {
        const response = await api.session.sendCode(mail);
        onSuccess()
      } catch (e) {
        onFailure('El mail ingresado no esta asociado a ninguna cuneta');
      }
    },
    [],
  );


  const deleteAccount = useCallback(
    async (userId, onSuccess = () => {}, onFailure = () => {}) => {
      try {
        await api.session.deleteAccount(userId);
        setMail(null)
        setToken(null)
        onSuccess()
      } catch (e) {
        onFailure();
      }
    },
    [],
  );
  
    const changePassword = useCallback(
      async (oldPass, newPass, userId, onSuccess = () => {}, onFailure = () => {}) => {
        try {
          const response = await api.session.changePassword(oldPass, newPass, userId);
          setToken(response)
          onSuccess()
        } catch (e) {
          onFailure();
        }
      },
      [],
    );

    const recoverPassword = useCallback(
      async (code, mail, newPass, onSuccess = () => {}, onFailure = () => {}) => {
        try {
          await api.session.changePassword(code, mail, newPass);
          onSuccess()
        } catch (e) {
          onFailure();
        }
      },
      [],
    );

    const suscribeNewsletter = useCallback(
      async (mail, id, onSuccess = () => {}, onFailure = () => {}) => {
        try {
          await api.session.suscribeNewsletter(userId);
          const apiUser = await api.session.getUser(mail)
          setUser(apiUser)
          onSuccess()
        } catch (e) {
          onFailure();
        }
      },
      [],
    );

    const fetchStats = useCallback(
      async (userId, onSuccess = () => {}, onFailure = () => {}) => {
        try {
          const stats = await api.session.fetchStats(userId);
          setStats(stats)
          onSuccess()
        } catch (e) {
          onFailure();
        }
      },
      [],
    );

    const modifyStats = useCallback(
      async (stats) => {
        try {
          await api.session.modifyStats(stats);
        } catch (e) {
        }
      },
      [],
    );

    const closeSession = useCallback(
      () => {
        localStorage.removeItem('user');
        localStorage.removeItem('mail');
      },
      [],
    );



  return (
    <SessionContext.Provider
      value={{
        mail,
        token,
        user,
        userId,
        showDeleteModal,
        setShowDeleteModal,
        stats,
        login,
        deleteAccount,
        changePassword,
        suscribeNewsletter,
        createUser,
        recoverPassword,
        sendCode,
        fetchStats,
        recoverUser,
        getUser,
        modifyStats,
        closeSession
      }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
