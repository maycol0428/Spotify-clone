import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    SET_TOKEN: (state, action) => {
      localStorage.setItem("token", action.payload);
      state.token = action.payload;
    },
    REMOVE_TOKEN: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { SET_TOKEN, REMOVE_TOKEN } = tokenSlice.actions;
export const SelectorToken = (state) => state.token;

export default tokenSlice.reducer;
