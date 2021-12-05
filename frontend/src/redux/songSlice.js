import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songId: null,
  isPlaying: false,
};

export const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    SET_SONG: (state, action) => {
      state.song = action.payload.song;
      state.isPlaying = action.payload.isPlaying;
    },
  },
});

export const { SET_SONG } = songSlice.actions;
export const SelectorSong = (state) => state.song;

export default songSlice.reducer;
