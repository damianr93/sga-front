import { Navigate } from "react-router-dom";

export const PrivateRouters = ({ children }:any) => {
  const auth = false;

  return auth ? children : <Navigate to='/login'/>;
};
