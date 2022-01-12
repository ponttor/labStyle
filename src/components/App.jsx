import React from "react";
import { createBrowserHistory } from "history";
import {
  Switch,
  Route,
  Router,
  Redirect,
  useHistory,
  BrowserRouter,
} from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import Login from "./Login.jsx";
import Page404 from "./NotFoundPage.jsx";
import Chat from "./Chat.jsx";
import Nav from "./Nav.jsx";
import Signup from "./Signup.jsx";
import Lesson1 from "./Lessons/Lesson1.jsx";
import Lesson2 from "./Lessons/Lesson2.jsx";
import Lesson3 from "./Lessons/Lesson3.jsx";
import Lesson4 from "./Lessons/Lesson4.jsx";
import Lesson5 from "./Lessons/Lesson5.jsx";
import Lesson6 from "./Lessons/Lesson6.jsx";
import Lesson7 from "./Lessons/Lesson7.jsx";
import Lesson8 from "./Lessons/Lesson8.jsx";
import Lesson9 from "./Lessons/Lesson9.jsx";
import Lesson10 from "./Lessons/Lesson10.jsx";
import Lesson11 from "./Lessons/Lesson11.jsx";
import Lesson12 from "./Lessons/Lesson12.jsx";
import Lesson13 from "./Lessons/Lesson13.jsx";
import Lesson14 from "./Lessons/Lesson14.jsx";
import AuthProvider from "./AuthProvider.jsx";
import {
  addNewChannel,
  deleteChannel,
  updateChannel,
} from "../slices/channelsSlice.jsx";
import { updateMessages } from "../slices/messagesSlice.jsx";

const App = ({ socket }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(history);
  // const history = createBrowserHistory();

  window.socket = socket;
  socket.on("newMessage", (message) => {
    dispatch(updateMessages(message));
  });
  socket.on("newChannel", (data) => {
    dispatch(addNewChannel(data));
  });
  socket.on("removeChannel", (data) => {
    dispatch(deleteChannel(data.id));
  });
  socket.on("renameChannel", ({ id, name }) => {
    dispatch(updateChannel({ id, name }));
  });

  // const notify = () => toast('Wow so easy!');

  // const isAuth = localStorage.getItem("token");
  // console.log(`isAuth: ${isAuth}`);

  // const pageRender = () => {
  //   isAuth ? history.push("/") : history.push("/login");
  // };

  // Auth: login, logout, user
  //AuthProvider props.
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          {/* <Router history={history}> */}
          <Switch>
            <Route exact path="/">
              <Nav />
              <Chat />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>

            <Route exact path="/lesson1">
              <Lesson1 />
            </Route>
            <Route exact path="/lesson2">
              <Lesson2 />
            </Route>
            <Route exact path="/lesson3">
              <Lesson3 />
            </Route>
            <Route exact path="/lesson4">
              <Lesson4 />
            </Route>
            <Route exact path="/lesson5">
              <Lesson5 />
            </Route>
            <Route exact path="/lesson6">
              <Lesson6 />
            </Route>
            <Route exact path="/lesson7">
              <Lesson7 />
            </Route>
            <Route exact path="/lesson8">
              <Lesson8 />
            </Route>
            <Route exact path="/lesson9">
              <Lesson9 />
            </Route>
            <Route exact path="/lesson10">
              <Lesson10 />
            </Route>
            <Route exact path="/lesson11">
              <Lesson11 />
            </Route>
            <Route exact path="/lesson12">
              <Lesson12 />
            </Route>
            <Route exact path="/lesson13">
              <Lesson13 />
            </Route>
            <Route exact path="/lesson14">
              <Lesson14 />
            </Route>

            <Route exact path="*" component={Page404} />
          </Switch>
          {/* </Router> */}
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
