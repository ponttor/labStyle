import React, { useState } from 'react';
import _ from 'lodash';
import AuthContext from '../AuthContext';

const AuthProvider = ({ children }) => {
  const firstToken = localStorage.getItem('token');
  const [isAuthenticated, setIsAuthenticated] = useState(!!firstToken);
  const [token, setToken] = useState(firstToken);
  // const { userName } = localStorage.getItem('userName');
  // console.log(userName);
  // if (token) {
  //   setIsAuthenticated(true);
  // }

  const getNextId = () => Number(_.uniqueId());

  function login(name) {
    setIsAuthenticated(true);
    console.log(name);
    // localStorage.setItem('user', { name, id: getNextId(), token });
    // localStorage.setItem('user', name);
    // const user = localStorage.getItem('user');
    // console.log(user);
  }

  function logout() {
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  function signup(name) {
    setIsAuthenticated(true);
    localStorage.setItem('user', { name, id: getNextId(), token });
  }
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
