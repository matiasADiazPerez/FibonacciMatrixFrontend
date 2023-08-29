const login = (e) => {};

const logout = () => {
  setisAutheticated(false);
  console.log('loggedInUser:' + isAutheticated);
};

export default login;
export default logout;
