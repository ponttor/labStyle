import React, { useContext } from 'react';
import {
  useHistory,
} from 'react-router-dom';
import AuthContext from '../AuthContext';
import CubeLessonsBox from './CubeLessonsBox.jsx';
import LessonsBoxMobile from './LessonsBoxMobile.jsx';
import Treasures from './Treasures.jsx';
import Bibliothek from './Bibliothek.jsx';
import BigButton from './BigButton.jsx';
import Telegram from './Telegram.jsx';
import Nav from './Nav.jsx';

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const history = useHistory();
  return (
    <>
      {!isAuthenticated && history.push('/login')}
      {/* <div className="overflow-hidden">
        <div className="col-12 d-block d-md-none">
          <LessonsBoxMobile />
        </div>

        <div className="col-12 d-none d-md-block d-lg-none p-0">
          <CubeLessonsBox />
        </div>

        <div className="col-12 d-none d-lg-block p-0">
          <CubeLessonsBox />
        </div>
      </div> */}
      <Nav />
      <CubeLessonsBox />
      <Treasures />
      <Bibliothek />
      <BigButton value={"Отзыв"} />
      <Telegram value={"Telegram"} />
      <BigButton value={"Дневник"} />
    </>
  );
};
export default Home;
