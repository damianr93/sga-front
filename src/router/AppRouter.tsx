import { Route, Routes } from "react-router-dom"
import { Login } from "../login/pages/login"
import { UserRoutes } from "./userRoutes"


export const AppRouter = () => {

    return(
    <>
    <Routes>

        <Route path="/login" element={<Login/>} />
        <Route path="/*" element={<UserRoutes/>} />

    </Routes>

    </>
    )
}