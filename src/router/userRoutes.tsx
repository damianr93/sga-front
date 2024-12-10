import { Route, Routes } from "react-router-dom";
import { NavBar } from "../components/app-bar";
import { HomePage} from "../home/pages/home";
import { PlanningPage } from "../planning/pages/Planning";
import { DashboardPage } from "../dashboard/pages/dashboard";
import { LoadDataPage } from "../dashboard/pages/load-data";

export const UserRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="planning" element={<PlanningPage />} />
        <Route path="Dashboard" element={<DashboardPage />} />
        <Route path="loadDataPage" element={<LoadDataPage />} />
      </Routes>
    </>
  );
};