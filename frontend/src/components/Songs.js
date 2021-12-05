import React from "react";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
import { SelectorPlaylist } from "../redux/playlistSlice";
import Song from "./Song";

const Songs = () => {
  const { playlist } = useSelector(SelectorPlaylist);
  return (
    <Container>
      {playlist?.tracks.items.map((track, i) => {
        return <Song key={track.track.id} order={i} track={track}></Song>;
      })}
    </Container>
  );
};

export default Songs;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 120px;
  overflow: overlay;
  ::-webkit-scrollbar {
    width: 0px;
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(90, 90, 90);
    -webkit-border-radius: 8px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
  }
`;
