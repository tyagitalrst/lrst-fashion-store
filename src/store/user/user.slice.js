import { createSlice } from "@reduxjs/toolkit";

export const USER_INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: USER_INITIAL_STATE,
  reducers: {
    googleSignInStart(state, action) {
      state.isLoading = true;
    },
    emailSignInStart(state, action) {
      state.isLoading = true;
    },
    signInSuccess(state, action) {
      state.currentUser = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    signInFailed(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    signUpStart(state, action) {
      state.isLoading = true;
    },
    signUpSuccess(state, action) {
      state.currentUser = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    signUpFailed(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    signOutStart(state, action) {
      state.isLoading = true;
    },
    signOutSuccess(state, action) {
      state.currentUser = null;
      state.isLoading = false;
      state.error = null;
    },
    signOutFailed(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    checkUserSession() {},
  },
});

export const {
  googleSignInStart,
  emailSignInStart,
  signInSuccess,
  signInFailed,
  signUpStart,
  signUpSuccess,
  signUpFailed,
  signOutStart,
  signOutSuccess,
  signOutFailed,
  checkUserSession,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
