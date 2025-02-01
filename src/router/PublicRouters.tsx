import { Navigate } from "react-router-dom";

export const PublicRouters = ({ children }:any) => {
  const item = localStorage.getItem("authToken");
  const user = item ? true : false;

  return !user ? children : <Navigate to='/home'/>;
};
