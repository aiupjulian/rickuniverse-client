import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getLocalStorageItem, Keys } from "../../utils/localStorage";
import { RootState } from "../store";

export interface AuthState {
  token?: string;
}

const initialState: AuthState = {
  token: getLocalStorageItem(Keys.TOKEN) || undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.token = undefined;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const selectToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
