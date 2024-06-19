import { Navigate, Route, Routes } from "react-router-dom"
import { Dashboard } from "../pages/dashboard"
import { LoadData } from "../pages/load-data"
import { HomeScreen } from "../pages/home"

export const AppRouter = () => {

    return(
    <>
    <Routes>

        <Route path="/" element={<HomeScreen/>} />
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="load-data" element={<LoadData/>} />

        <Route path="/*" element={<Navigate to="/"/>} />
    </Routes>

    </>
    )
}