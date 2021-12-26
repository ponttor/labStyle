import React, { useContext } from 'react';
import i18next from 'i18next';
import AuthContext from '../AuthContext';

export default function Nav() {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <div className="navbar-brand">{i18next.t('title')}</div>
        {isAuthenticated && <button onClick={logout} className="btn btn-primary" type="button">{i18next.t('logOutButton')}</button>}
      </div>
    </nav>
  );
}
