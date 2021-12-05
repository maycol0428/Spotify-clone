import { ChevronDown, Search } from "@styled-icons/boxicons-regular";
import { shuffle } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import useSpotify from "../hooks/useSpotify";
import { SelectorPlaylistId } from "../redux/playlistIdSlice";
import { SelectorPlaylist, SET_PLAYLIST } from "../redux/playlistSlice";
import { SelectorUser } from "../redux/userSlice";
import { size } from "../settings/FontSize";
import Categories from "./Categories";
import Songs from "./Songs";

const colors = ["#be4d25", "#121b10", "#9925be", "#49be25", "#2596be", "#bea925", "#76b5c5"];

const Header = () => {
  const { user } = useSelector(SelectorUser);
  const [color, setColor] = useState(null);
  const { playlistId } = useSelector(SelectorPlaylistId);
  const { playlist } = useSelector(SelectorPlaylist);
  const { spotify } = useSpotify();
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    spotify.getCategories().then((data) => {
      setCategories(data.categories.items);
    });
  }, []);
  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [playlistId]);
  useEffect(() => {
    if (playlistId) {
      spotify.getPlaylist(playlistId).then((data) => {
        dispatch(SET_PLAYLIST(data));
      });
    }
  }, [playlistId]);
  return (
    <Container>
      <Right>
        <img src="/noavatar/noavatar.png" alt="" />
        <p>{user.email}</p>
        <ChevronDown size={25}></ChevronDown>
      </Right>
      {playlist ? (
        <Section color={color}>
          <img src={playlist?.images[0].url} alt="" />
          <div>
            <p>PLAYLIST</p>
            <h1>{playlist?.name}</h1>
          </div>
        </Section>
      ) : (
        <Categories categories={categories}></Categories>
      )}

      <Songs></Songs>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
  color: white;
  position: relative;
`;
const Right = styled.div`
  display: flex;
  position: absolute;
  background-color: black;
  top: 30px;
  right: 30px;
  align-items: center;
  padding: 4px;
  transition: all 0.2s ease;
  opacity: 1;
  border-radius: 40px;
  :hover {
    opacity: 0.9;
  }

  img {
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
  }
  p {
    margin-left: 10px;
    font-weight: bolder;
  }
`;
const Section = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  gap: 10px;
  height: 35vh;
  color: white;
  padding: 10px;
  background: rgb(0, 0, 0);
  ${(props) =>
    props.color &&
    css`
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.9612480886850153) 21%,
        ${props.color} 100%
      );
    `}

  img {
    height: 140px;
    width: 140px;
    object-fit: contain;
  }
`;
