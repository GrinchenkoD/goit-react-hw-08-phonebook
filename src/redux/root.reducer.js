import auth from "./auth/auth.reducer";
import phoneReducer from "./contacts/contacts.reducer";

const rootReducer = {
  contacts: phoneReducer,
  auth: auth,
};

export default rootReducer;
