import axios from "axios";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const register = (credentials) => (dispatch) => {};

const logIn = (credentials) => (dispatch) => {};

const logOut = () => (dispatch) => {};

const getCurrentUser = () => (dispatch) => {};

export { register, logIn, logOut, getCurrentUser };
