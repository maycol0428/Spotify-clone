import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SelectorToken } from "../redux/tokenSlice";
import Spotify from "spotify-web-api-js";

const useSpotify = () => {
  const { token } = useSelector(SelectorToken);
  let spotify = null;

  spotify = new Spotify();
  spotify.setAccessToken(token);

  return { spotify };
};

export default useSpotify;
