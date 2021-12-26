import React, { useEffect, useContext } from "react";
import AuthContext from '../AuthContext';
import { Switch, Route, Router, Redirect, useHistory } from "react-router-dom";
import { Image } from "cloudinary-react";

const Chat = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const history = useHistory();
  return (
    <>
      {!isAuthenticated && history.push("/login")}
      <div className="d-flex justify-content-around align-items-center">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title text-center">Секретная страничка</h5>
          </div>
          <Image
            cloudName="ponttor"
            publicId="36444556_ts17zx"
            width="300"
            crop="scale"
          />
          <p className="card-text text-center ">
            Она доступна только для авторизованных участников. Здесь может быть
            карта курса, ссылки на уроки и любой функционал.
          </p>
        </div>
      </div>
    </>
  );
};
export default Chat;
