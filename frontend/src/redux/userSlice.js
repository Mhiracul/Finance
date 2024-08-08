import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  fullName: "",

  country: "",
  _id: "",
  role: "",
  status: "",
  image: "",
  bitcoinWalletAddress: "",
  accountNo: "",
  resetToken: "", // Add the role field
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      state._id = action.payload.data._id;
      state.fullName = action.payload.fullName || "";
      state.lastName = action.payload.data.lastName;
      state.userName = action.payload.data.userName;
      state.country = action.payload.data.country;
      state.email = action.payload.data.email;
      state.role = action.payload.data.role;
      state.resetToken = action.payload.data.resetToken;
      state.status = action.payload.data.status;
      state.image = action.payload.data.image; // Set the role field
      state.accountBalnace = action.payload.data.accountNo; // Set the role field
      state.bitcoinWalletAddress = action.payload.data.bitcoinWalletAddress; // Set the role field
    },
    logoutRedux: (state) => {
      state._id = "";
      state.fullName = "";
      state.lastName = "";
      state.userName = "";
      state.country = "";
      state.email = "";
      state.role = ""; // Reset the role field
      state.status = ""; // Reset the role field
      state.image = "";
      state.resetToken = "";
      state.accountBalance = "";
      state.bitcoinWalletAddress = "";
      // Reset the role field
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    updateUser: (state, action) => {
      // Update the user data using the payload
      const {
        _id,
        fullName,
        lastName,
        userName,
        email,
        country,
        role,
        status,
        image,
        accountNo,
        resetToken,
        bitcoinWalletAddress,
      } = action.payload;
      state._id = _id;
      state.fullName = fullName;
      state.lastName = lastName;
      state.userName = userName;
      state.country = country;
      state.email = email;
      state.role = role;
      state.resetToken = resetToken;
      state.status = status;
      state.image = image;
      state.accountNo = accountNo;
      state.bitcoinWalletAddress = bitcoinWalletAddress;
    },
  },
});

export const { loginRedux, logoutRedux, setUsers, updateUser } =
  userSlice.actions;
export default userSlice.reducer;
