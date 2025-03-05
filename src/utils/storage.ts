export const saveUserLogged = (token: string, username: string, role: string) => {

  if (!token || !username || !role) {
    return;
  }
  const user = { token, username, role };
  localStorage.setItem("authToken", JSON.stringify(user));
};

export const getUserLogged = () => {
  return localStorage.getItem("authToken");
};

export const removeUserLogged = () => {
  localStorage.removeItem("authToken");
};
