export const saveToken = (token:string, username:string) => {
    if(!token || !username) {
        return
    };
    const user = {token, username};
    localStorage.setItem("authToken", JSON.stringify(user));
  };

export const getToken = () => {
    return localStorage.getItem("authToken");
};

export const removeToken = () => {
    localStorage.removeItem("authToken");
};
