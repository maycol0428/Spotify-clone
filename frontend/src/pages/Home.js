import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { getTokenFromURL } from "../api/SpotifyLogic";
import Body from "../components/Body";
import PlayMusic from "../components/PlayMusic";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <Container>
      <main>
        <Sidebar></Sidebar>
        <Body></Body>
      </main>
      <PlayMusic></PlayMusic>
    </Container>
  );
};

export default Home;
const Container = styled.div`
  background-color: #000000;
  overflow: hidden;
  height: 100vh;

  main {
    display: flex;
  }
`;
