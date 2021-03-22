import axios from "axios";
import {
  removeContactError,
  removeContactSuccess,
  removeContactRequest,
  addContactError,
  addContactSuccess,
  addContactRequest,
  getContactsError,
  getContactsSuccess,
  getContactsRequest,
} from "./contacts.actions";

axios.defaults.baseURL = "http://localhost:3004";

const getContacts = () => async (dispatch) => {
  dispatch(getContactsRequest());
  try {
    const { data } = await axios.get("/contacts");
    dispatch(getContactsSuccess(data));
  } catch (error) {
    dispatch(getContactsError(error));
  }
};

const addContact = (contact) => async (dispatch) => {
  dispatch(addContactRequest());
  try {
    const { data } = await axios.post("/contacts", contact);

    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

const removeContact = (id) => async (dispatch) => {
  dispatch(removeContactRequest());
  try {
    const { status } = await axios.delete(`/contacts/${id}`);
    if (status === 200) {
      dispatch(removeContactSuccess(id));
    }
  } catch (error) {
    dispatch(removeContactError(error));
  }
};

export { getContacts, addContact, removeContact };
