import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  firstName: "",
  lastName: "",
  email: "",
  token: "",
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    updateToken(state, actions) {
      state.token = actions.payload.token;
    },
    login(state, actions) {
      state.isAuthenticated = true;
      state.firstName = actions.payload.firstName;
      state.lastName = actions.payload.lastName;
      state.email = actions.payload.email;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.token = "";
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
