import { combineReducers, createReducer } from "@reduxjs/toolkit";

const InitialState = { name: "", email: "" };

const user = createReducer(InitialState, {});

const token = createReducer(null, {});

const error = createReducer(null, {});

const auth = combineReducers({
  user,
  token,
  error,
});

export default auth;
