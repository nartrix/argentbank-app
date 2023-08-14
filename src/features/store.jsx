import { configureStore } from "@reduxjs/toolkit";

import apiReducer from "./api";
import loginReducer from "./login";

const store = configureStore({
  reducer: {
    api: apiReducer,
    login: loginReducer,
  },
});

export default store;
