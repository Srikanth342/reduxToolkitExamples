import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersList: [
    { id: 1, name: "srikanth", email: "srikanthchowdary342@gmail.com" },
    { id: 2, name: "shiva gopi", email: "shivagopi123@gmail.com" },
    { id: 3, name: "Arun kumar", email: "arunkumar123@gmail.com" },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state?.usersList?.push(action?.payload);
    },
    removeUser: (state, action) => {
      const id = action.payload;
      state.usersList = state.usersList.filter((user) => user.id !== id);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const uu = state.usersList.find((user) => user.id === id);
      if (uu) {
        uu.name = name;
        uu.email = email;
      }
    },
  },
});

export default userSlice.reducer;
export const { addUser, removeUser, updateUser } = userSlice.actions;
