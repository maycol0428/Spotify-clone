import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlistId: null,
};

export const playlistIdSlice = createSlice({
  name: "playlistId",
  initialState,
  reducers: {
    SET_ID_PLAYLIST: (state, action) => {
      state.playlistId = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { SET_ID_PLAYLIST } = playlistIdSlice.actions;
export const SelectorPlaylistId = (state) => state.playlistId;

export default playlistIdSlice.reducer;
