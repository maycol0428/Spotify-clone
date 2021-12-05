import React from "react";
import { SpotifyAuth, Scopes } from "react-spotify-auth";
import styled from "styled-components";
import { SPOTIFY_CLIENT_ID, SPOTIFY_FULL_URL } from "../api/SpotifyLogic";
import "react-spotify-auth/dist/index.css";
const Login = () => {
  return (
    <Container>
      <img src="/logos/spotifylogo.png" alt="Spotify-Logo" />
      <Button href={SPOTIFY_FULL_URL}>Login with spotify</Button>
      {/* <SpotifyAuth
        redirectUri="http://localhost:3000/"
        clientID={SPOTIFY_CLIENT_ID}
        scopes={[Scopes.userReadPrivate, "user-read-email", Scopes.userModifyPlaybackState]}
      /> */}
    </Container>
  );
};

export default Login;

const Container = styled.div`
  background-color: black;
  display: grid;
  place-items: center;
  height: 100vh;
  > img {
    width: 100%;
    max-width: 500px;
  }
`;
const Button = styled.a`
  padding: 20px;
  background-color: #1db954;
  border-radius: 90px;
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
`;
