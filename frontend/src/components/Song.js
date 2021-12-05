import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import useSpotify from "../hooks/useSpotify";
import { SelectorSong, SET_SONG } from "../redux/songSlice";
import { device } from "../settings/BreakPoints";
import { millisToMinutesAndSeconds } from "../utils/time";
const Song = ({ order, track }) => {
  const { spotify } = useSpotify();
  const dispatch = useDispatch();
  const { songId, isPlaying } = useSelector(SelectorSong);
  function playSong() {
    dispatch(
      SET_SONG({
        songId: track.track.id,
        isPlaying: true,
      })
    );
    spotify.play({
      uris: [track.track.uri],
    });
  }
  return (
    <Container onClick={playSong}>
      <Wrapper>
        <p>{order + 1}</p>
        <img src={track.track.album.images[0].url} alt="image" />
        <div>
          <p className="name-song">{track.track.name}</p>
          <p>{track.track.artists[0].name}</p>
        </div>
      </Wrapper>
      <Wrapper2>
        <p className="album-name">{track.track.album.name}</p>
        <p>{millisToMinutesAndSeconds(track.track.duration_ms)}</p>
      </Wrapper2>
    </Container>
  );
};

export default Song;
const Container = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px 20px;
  border-radius: 20px;
  transition: all 0.2s ease;
  grid-gap: 20px;
  img {
    width: 50px;
    height: 50px;
  }
  :hover {
    background-color: #181818;
  }

  @media ${device.tablet} {
    grid-template-columns: 2.5fr 1fr;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  p {
    min-width: 20px;
  }
  > div {
    width: 100%;
    overflow: hidden;
  }
  .name-song {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  @media ${device.tablet} {
    justify-content: flex-end;
    .album-name {
      display: none;
    }
  }
`;
