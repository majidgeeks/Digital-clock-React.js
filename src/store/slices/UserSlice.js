import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  reducers: {
    addUser(state, action) {
      // console.log("action in adduser====>",action.payload)
      let insertUser = [...state.users];
      insertUser.push(action.payload);
      state.users = insertUser;
      console.log("insertUser", insertUser);
    },
    updateUser(state, action) {
      // update data using id
      // console.log("state update",state)
      console.log("action.payload update id", action.payload);
      const userIndex = state.users.findIndex(
        (item) => item.id === action.payload
      );
      if (userIndex >= 0) {
        return;
      }
      const updatedUser = { ...action.payload };
      console.log("state.users update", state.users);
      state.users[userIndex] = updatedUser;
    },
    deleteUser(state, action) {
      state.users = state.users.filter((item) => item.id !== action.payload);
      // delete using user id
    },
    deleteAllUsers(state, action) {
      state.users = [];
    },
  },
});

export default userSlice.reducer;
export const { addUser, deleteUser, deleteAllUsers, updateUser } =
  userSlice.actions;
