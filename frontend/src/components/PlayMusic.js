import { PlayCircle, Repeat, Shuffle, SkipNext, SkipPrevious, VolumeFull } from "@styled-icons/boxicons-regular";
import { Playlist } from "@styled-icons/boxicons-solid";
import React from "react";
import styled from "styled-components";
import { size } from "../settings/FontSize";
import Slider from "@mui/material/Slider";
const PlayMusic = () => {
  return (
    <Container>
      <Left>
        <img src="/posters/manaposter.jpg" alt="" />
        <div>
          <h4>Eres mi Religion</h4>
          <p>Mana</p>
        </div>
      </Left>
      <Center>
        <Shuffle size={40}></Shuffle>
        <SkipPrevious size={40}></SkipPrevious>
        <PlayCircle size={40}></PlayCircle>
        <SkipNext size={40}></SkipNext>
        <Repeat size={40}></Repeat>
      </Center>
      <Right>
        <Playlist size={40}></Playlist>
        <VolumeFull size={40}></VolumeFull>
        <Slider
          min={0}
          defaultValue={5}
          max={10}
          sx={{
            maxWidth: 100,
            color: "#00ff00",
            "& .MuiSlider-track": {
              border: "none",
            },
            "& .MuiSlider-thumb": {
              width: 24,
              height: 24,
              backgroundColor: "#00ff00",
              "&:before": {
                boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
              },
              "&:hover, &.Mui-focusVisible, &.Mui-active": {
                boxShadow: "none",
              },
            },
          }}
        />
      </Right>
    </Container>
  );
};

export default PlayMusic;

const Container = styled.div`
  height: 100px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #181818;
  color: white;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgb(50, 50, 50);
`;

const Left = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  img {
    max-height: 70%;
    max-width: 70px;
    object-fit: contain;
  }
  h4 {
    ${size.md}
  }
`;
const Center = styled.div`
  flex: 0.4;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Right = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
