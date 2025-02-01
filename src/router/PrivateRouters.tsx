import { Navigate } from "react-router-dom";

export const PrivateRouters = ({ children }:any) => {
  const item = localStorage.getItem("authToken");
  const user = item ? true : false;

  return user ? children : <Navigate to='/login'/>;
};
