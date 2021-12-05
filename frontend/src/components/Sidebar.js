import React, { useEffect, useState } from "react";
import { Heart, Home, Library, LogOut, PlusCircle, Rss, Search } from "@styled-icons/boxicons-regular";
import { size } from "../settings/FontSize";
import styled from "styled-components";
import { LOGOUT, SelectorUser } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_TOKEN } from "../redux/tokenSlice";
import useSpotify from "../hooks/useSpotify";
import { SET_ID_PLAYLIST } from "../redux/playlistIdSlice";
import { device } from "../settings/BreakPoints";
import { Playlist as PlaylistIcon } from "@styled-icons/boxicons-solid";
const Sidebar = () => {
  const dispatch = useDispatch();
  const { spotify } = useSpotify();
  const [playlists, setPlaylists] = useState([]);
  const { user } = useSelector(SelectorUser);

  useEffect(() => {
    spotify.getUserPlaylists(user.id).then((data) => {
      setPlaylists(data.items);
    });
  }, []);
  return (
    <Container>
      <img src="/logos/spotifylogo.png" alt="Spotify-Logo" />
      <Wrapper>
        <Button>
          <Home size={25} />
          <p>Home</p>
        </Button>
        <Button>
          <Search size={25} />
          <p>Search</p>
        </Button>
        <Button>
          <Library size={25} />
          <p>Your Library</p>
        </Button>
        <Button
          onClick={() => {
            dispatch(REMOVE_TOKEN());
            dispatch(LOGOUT());
          }}
        >
          <LogOut size={25} />
          <p>Logout</p>
        </Button>
        <hr />
        <Button>
          <PlusCircle size={25} />
          <p>Created Playlist</p>
        </Button>
        <Button>
          <Heart size={25} />
          <p>Like Songs</p>
        </Button>
        <Button>
          <Rss size={25} />
          <p>Your Eppisodes</p>
        </Button>
        <hr />
        <Button>
          <PlaylistIcon size={25} />
          <p>Your Playlist</p>
        </Button>
        {playlists.map((playlist) => {
          return (
            <Playlist onClick={() => dispatch(SET_ID_PLAYLIST(playlist.id))} key={playlist.id}>
              {playlist.name}
            </Playlist>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
const Container = styled.div`
  flex: 0.2;
  padding: 20px;
  color: rgb(104, 104, 104);
  ${size.xs}
  min-width: 240px;
  height: 100vh;
  padding-bottom: 100px;
  overflow: overlay;
  border-right: 0.1px solid rgb(24, 24, 24);
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

  img {
    width: 100%;
    margin-bottom: 20px;
  }
  hr {
    width: 100%;
    height: 1px;
    border: none;
    background-color: rgb(24, 24, 24);
    border-radius: 20px;
  }
  button {
    transition: all 0.3s ease;
    :hover {
      color: white;
    }
  }
  @media ${device.tablet} {
    display: none;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Button = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Playlist = styled.p`
  cursor: pointer;
  transition: all 0.3s ease;
  padding-left: 2px;
  :hover {
    color: white;
  }
`;
