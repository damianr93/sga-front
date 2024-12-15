import { Route, Routes } from "react-router-dom";
import { UserRoutes } from "./userRoutes";
import { LoginPage } from "../login/pages/login";
import { PrivateRouters } from "./PrivateRouters";
import { PublicRouters } from "./PublicRouters";

export const AppRouter = () => {
  return (
    <Routes>

      <Route
        path="/login/*"
        element={
          <PublicRouters>
            <LoginPage />
          </PublicRouters>
        }
      />

      <Route
        path="/*"
        element={
          <PrivateRouters>
            <UserRoutes />
          </PrivateRouters>
        }
      />
    </Routes>
  );
};
