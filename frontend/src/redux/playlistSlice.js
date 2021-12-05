import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlist: null,
};

export const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    SET_PLAYLIST: (state, action) => {
      state.playlist = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { SET_PLAYLIST } = playlistSlice.actions;
export const SelectorPlaylist = (state) => state.playlist;

export default playlistSlice.reducer;
