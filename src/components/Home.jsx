import React, { useContext } from 'react';
import {
  useHistory,
} from 'react-router-dom';
import AuthContext from '../AuthContext';
import CubeLessonsBox from './CubeLessonsBox.jsx';
import LessonsBoxMobile from './LessonsBoxMobile.jsx';

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const history = useHistory();
  return (
    <>
      {!isAuthenticated && history.push('/login')}

      <div className="overflow-hidden">
        <div className="col-12 d-block d-md-none">
          <LessonsBoxMobile />
        </div>

        <div className="col-12 d-none d-md-block d-lg-none p-0">
          {/* <LessonsBox /> */}
          <CubeLessonsBox />
        </div>

        <div className="col-12 d-none d-lg-block p-0">
          <CubeLessonsBox />
        </div>
      </div>
      {/* <ListLessonsMap /> */}
      {/* <div className="d-flex justify-content-around align-items-center"> */}
      {/* <div className="card" style={{ width: "18rem" }}> */}

      {/* <LessonsMap /> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
};
export default Home;
