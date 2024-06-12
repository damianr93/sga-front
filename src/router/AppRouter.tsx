import { Navigate, Route, Routes } from "react-router-dom"
import { Dashboard } from "../pages/dashboard"
import { LoadData } from "../pages/load-data"

export const AppRouter = () => {

    return(
    <>
    <Routes>
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="load-data" element={<LoadData/>} />

        <Route path="/" element={<Navigate to="dashboard"/>} />
    </Routes>

    </>
    )
}