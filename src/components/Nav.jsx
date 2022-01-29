import React, { useContext } from 'react';
import i18next from 'i18next';
import AuthContext from '../AuthContext';

export default function Nav() {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <div className="navbar-brand">{i18next.t('title')}</div>
        {isAuthenticated && <button onClick={console.log('account')} className="btn btn-primary" type="button">Account</button>}
      </div>
    </nav>
  );
}
