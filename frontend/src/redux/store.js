import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import tokenReducer from "./tokenSlice";
import playlistIdReducer from "./playlistIdSlice";
import playlistReducer from "./playlistSlice";
import songReducer from "./songSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    token: tokenReducer,
    playlistId: playlistIdReducer,
    playlist: playlistReducer,
    song: songReducer,
  },
});
