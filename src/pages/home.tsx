import { Grid } from "@mui/material"
// import { HomeLayout } from "../layouts/home"
import { NavBar } from "../components/app-bar"
import Image from '../../public/img/environment-2196690_1280.jpg'
import { PlanningLayout } from "../layouts/planning";

const drawerWidth = 65;

export const HomeScreen = () => {


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
            <NavBar drawerWidth={drawerWidth} />
            {/* <HomeLayout /> */}
            <PlanningLayout drawerWidth={drawerWidth}/>
        </Grid>


    )
}
