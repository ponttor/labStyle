import React, { useContext } from 'react';
import {
  useHistory,
} from 'react-router-dom';
import AuthContext from '../AuthContext';
import ListLessonsMap from './ListLessonsMap.jsx';
import Trieda from './Trieda.jsx';

const Chat = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const history = useHistory();
  return (
    <>
      {!isAuthenticated && history.push('/login')}
      <Trieda />
      {/* <ListLessonsMap /> */}
      {/* <div className="d-flex justify-content-around align-items-center"> */}
      {/* <div className="card" style={{ width: "18rem" }}> */}

      {/* <LessonsMap /> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
};
export default Chat;
