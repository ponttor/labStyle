import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../AuthContext';

export default function Lesson14() {
  const { isAuthenticated } = useContext(AuthContext);
  const history = useHistory();
  return (
    <>
      {!isAuthenticated && history.push('/login')}
      <div>Lesson14</div>
    </>
  );
}
