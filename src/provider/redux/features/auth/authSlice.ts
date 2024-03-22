import { AuthState } from "@/types/auth-types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.isAuthenticated = true;
      state.user = user;
      state.token = accessToken;
    },
    logout: (state) => {
      (state.user = null), (state.token = null), (state.isAuthenticated = true);
    },
    authFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setCredentials, logout, authFailure } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: { auth: { user: any } }) =>
  state.auth.user;
export const selectCurrentToken = (state: { auth: { token: any } }) =>
  state.auth.token;
