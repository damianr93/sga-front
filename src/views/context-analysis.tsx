import { Grid, ListItem, ListItemText, Paper, Typography } from "@mui/material"
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { foda } from "../recursos/foda";

const itemsFoda = foda

export const ContextAnalysis = () => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={6}>
                <Paper style={{ padding: '16px', height: '100%' }}>

                    <Typography variant="h6">Fortalezas</Typography>
                    {
                        itemsFoda && itemsFoda.filter((elem) => elem.type === "Fortaleza").map((item, id) =>
                            <ListItem key={id}>
                                <LabelImportantIcon fontSize="small" />
                                <Grid container>
                                    <ListItemText primary={item.message} />
                                </Grid>
                            </ListItem>
                        )
                    }

                </Paper>
            </Grid>

            <Grid item xs={6}>
                <Paper style={{ padding: '16px', height: '100%' }}>

                    <Typography variant="h6">Oportunidades</Typography>

                    {
                        itemsFoda && itemsFoda.filter((elem) => elem.type === "Oportunidad").map((item, id) =>
                            <ListItem key={id}>
                                <LabelImportantIcon fontSize="small" />
                                <Grid container>
                                    <ListItemText primary={item.message} />
                                </Grid>
                            </ListItem>
                        )
                    }



                </Paper>
            </Grid>

            <Grid item xs={6}>
                <Paper style={{ padding: '16px', height: '100%' }}>

                    <Typography variant="h6">Debilidades</Typography>

                    {
                        itemsFoda && itemsFoda.filter((elem) => elem.type === "Debilidad").map((item, id) =>
                            <ListItem key={id}>
                                <LabelImportantIcon fontSize="small" />
                                <Grid container>
                                    <ListItemText primary={item.message} />
                                </Grid>
                            </ListItem>
                        )
                    }

                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper style={{ padding: '16px', height: '100%' }}>

                    <Typography variant="h6">Amenazas</Typography>

                    {
                        itemsFoda && itemsFoda.filter((elem) => elem.type === "Amenaza").map((item, id) =>
                            <ListItem key={id}>
                                <LabelImportantIcon fontSize="small" />
                                <Grid container>
                                    <ListItemText primary={item.message} />
                                </Grid>
                            </ListItem>
                        )
                    }

                </Paper>
            </Grid>
        </Grid>
    )
}
