import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { usersReducer } from "../redux/users";

export default configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer
  }
});
