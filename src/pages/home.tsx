import { Grid } from "@mui/material"
import { HomeLayout } from "../layouts/home"
import { NavBar } from "../components/app-bar"
import Image from '../../public/img/environment-2196690_1280.jpg'
import { useState } from "react";


export const HomeScreen = () => {
    const [viewSelected, setViewSelected] = useState<React.ReactElement | null>(<HomeLayout />)


    return (

        <Grid
            container
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{
                backgroundImage: `url(${Image})`,
                backgroundSize: "cover",
                backgroundRepeat: "repeat-y",
                minHeight: "100vh",
            }}>
            <NavBar setViewSelected={setViewSelected} />
            {viewSelected}
        </Grid>


    )
}
