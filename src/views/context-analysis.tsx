import { Button, Grid, ListItem, ListItemText, Paper, Typography } from "@mui/material"
import { foda } from "../recursos/foda";
import { Add, Edit } from "@mui/icons-material";

const itemsFoda = foda

export const ContextAnalysis = () => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={6}>
                <Paper style={{ padding: '16px', height: '100%' }}>

                    <Typography variant="h6">
                        Fortalezas
                        <Button
                            className="editButton"
                            sx={{
                                opacity: 0.2,
                                transition: 'opacity 0.3s',
                            }}>
                            <Add />
                        </Button>
                    </Typography>
                    {
                        itemsFoda && itemsFoda.filter((elem) => elem.type === "Fortaleza").map((item, id) =>
                            <ListItem key={id}>
                                <Button
                                    className="editButton"
                                    sx={{
                                        opacity: 0.2,
                                        transition: 'opacity 0.3s',
                                    }}
                                >
                                    <Edit />
                                </Button>
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

                    <Typography variant="h6">
                        Debilidades
                        <Button
                            className="editButton"
                            sx={{
                                opacity: 0.2,
                                transition: 'opacity 0.3s',
                            }}>
                            <Add />
                        </Button>
                    </Typography>

                    {
                        itemsFoda && itemsFoda.filter((elem) => elem.type === "Debilidad").map((item, id) =>
                            <ListItem key={id}>
                                <Button
                                    className="editButton"
                                    sx={{
                                        opacity: 0.2,
                                        transition: 'opacity 0.3s',
                                    }}
                                >
                                    <Edit />
                                </Button>
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

                    <Typography variant="h6">
                        Oportunidades
                        <Button
                            className="editButton"
                            sx={{
                                opacity: 0.2,
                                transition: 'opacity 0.3s',
                            }}>
                            <Add />
                        </Button>
                    </Typography>

                    {
                        itemsFoda && itemsFoda.filter((elem) => elem.type === "Oportunidad").map((item, id) =>
                            <ListItem key={id}>
                                <Button
                                    className="editButton"
                                    sx={{
                                        opacity: 0.2,
                                        transition: 'opacity 0.3s',
                                    }}
                                >
                                    <Edit />
                                </Button>
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

                    <Typography variant="h6">
                        Amenazas
                        <Button
                            className="editButton"
                            sx={{
                                opacity: 0.2,
                                transition: 'opacity 0.3s',
                            }}
                        >
                            <Add />
                        </Button>
                    </Typography>

                    {
                        itemsFoda && itemsFoda.filter((elem) => elem.type === "Amenaza").map((item, id) =>
                            <ListItem key={id}>
                                <Button
                                    className="editButton"
                                    sx={{
                                        opacity: 0.2,
                                        transition: 'opacity 0.3s',
                                    }}
                                >
                                    <Edit />
                                </Button>
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
