import axios from "axios";
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

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const register = (credentials) => async (dispatch) => {
  // /users/signup
  dispatch(registerRequest());
  try {
    const { data } = await axios.post("/users/signup", credentials);
    console.log(data);
    dispatch(registerSuccess(data));
  } catch (error) {
    // console.log(error.response.data.message);
    dispatch(registerError(error.response.data.message));
  }
};

const logIn = (credentials) => (dispatch) => {};

const logOut = () => (dispatch) => {};

const getCurrentUser = () => (dispatch) => {};

export { register, logIn, logOut, getCurrentUser };
