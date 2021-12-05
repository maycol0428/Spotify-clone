import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Navigate, useLocation } from "react-router";
import styled from "styled-components";
import { size } from "./settings/FontSize";
import { useEffect, useState } from "react";
import { getTokenFromURL } from "./api/SpotifyLogic";
import { useDispatch, useSelector } from "react-redux";
import { SelectorUser, SET_USER } from "./redux/userSlice";
import Spotify from "spotify-web-api-js";
import { SelectorToken, SET_TOKEN } from "./redux/tokenSlice";
const spotify = new Spotify();
function App() {
  const { user } = useSelector(SelectorUser);
  const { token } = useSelector(SelectorToken);
  const dispatch = useDispatch();
  useEffect(() => {
    const access_token = getTokenFromURL();
    console.log(window.location.hash);
    window.history.replaceState({}, document.title, window.location.href.split("#")[0]);
    if (access_token) {
      dispatch(SET_TOKEN(access_token));
    }
    if (token) {
      spotify.setAccessToken(token);
      spotify.getMe().then((user) => {
        dispatch(SET_USER(user));
      });
    }
  }, [dispatch, token]);
  if (!user) {
    return <Login></Login>;
  }
  return (
    <StyledApp>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  ${size.xs}
`;
