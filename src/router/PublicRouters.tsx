import { Navigate } from "react-router-dom";

export const PublicRouters = ({ children }:any) => {
  const auth = false;

  return !auth ? children : <Navigate to='/home'/>;
};
