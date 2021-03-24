const getIsAuthSelector = (state) => state.auth.token;
const getNameSelector = (state) => state.auth.user.name;

export { getIsAuthSelector, getNameSelector };
