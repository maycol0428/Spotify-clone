import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SET_USER: (state, action) => {
      state.user = action.payload;
    },
    LOGOUT: (state, action) => {
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { SET_USER, LOGOUT } = userSlice.actions;
export const SelectorUser = (state) => state.user;

export default userSlice.reducer;
