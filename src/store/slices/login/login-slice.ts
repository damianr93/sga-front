import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "userLogged",
  initialState: {
    id: "",
    username: "no hay usuario logeado",
    sector: "",
    access_token: "",
    logged: false,
  },
  reducers: {
    setUserLogged: (state, action) => {
      state = { ...action.payload.userLogged, logged: true };
      return state;
    },
  },
});

export const { setUserLogged } = loginSlice.actions;

export default loginSlice.reducer;
