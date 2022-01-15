import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../AuthContext';
import IpadLogin from './IpadLogin.jsx';
import MobileLogin from './MobileLogin.jsx';
import PKLogin from './PKLogin.jsx';

const Login = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const history = useHistory();

  return (
    <>
      {isAuthenticated && history.push('/')}

      <div className="overflow-hidden">
        <div className="col-12 d-block d-md-none">
          <MobileLogin />
        </div>

        <div className="col-12 d-none d-md-block d-lg-none p-0">
          <IpadLogin />
        </div>

        <div className="col-12 d-none d-lg-block p-0">
          <PKLogin />
        </div>
      </div>

    </>
  );
};

export default Login;
