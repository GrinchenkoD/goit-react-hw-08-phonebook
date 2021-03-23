import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./auth.actions";

const InitialState = { name: "", email: "" };

const user = createReducer(InitialState, {});

const token = createReducer(null, {});

const cleanError = () => null;
const handleError = (_, action) => action.payload;

const error = createReducer(null, {
  [registerError]: (_, action) => action.payload,
  [loginError]: handleError,
  [logoutError]: handleError,
  [getCurrentUserError]: handleError,
  [registerRequest]: cleanError,
  [loginRequest]: cleanError,
  [logoutRequest]: cleanError,
  [getCurrentUserRequest]: cleanError,
});

const auth = combineReducers({
  user,
  token,
  error,
});

export default auth;
