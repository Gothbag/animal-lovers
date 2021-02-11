import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    usersAdd: (state, action) => {
      return [...action.payload];
    }
  }
});

export const { usersAdd } = usersSlice.actions;

export const loadUsers = () => async dispatch => {
  const resp = await fetch("./data/users.json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const users = await resp.json();
  dispatch(usersAdd(users));
};

export const usersReducer = usersSlice.reducer;
