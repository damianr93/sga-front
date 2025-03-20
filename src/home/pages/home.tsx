import { Grid } from "@mui/material"
import { HomeLayout } from "../layouts/home"

export const HomePage = () => {

    return (

        <Grid
            container
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{
                minHeight: "100vh",
            }}>
                <HomeLayout/>
        </Grid>


    )
}
