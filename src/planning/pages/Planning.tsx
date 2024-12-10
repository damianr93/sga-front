import { Grid } from "@mui/material"
import { PlanningLayout } from "../layouts/planning"


export const PlanningPage = () => {

    return (

        <Grid
            container
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{
                backgroundColor:'#81a3b86a',
                minHeight: "100vh",
            }}>
                <PlanningLayout/>
        </Grid>


    )
}
