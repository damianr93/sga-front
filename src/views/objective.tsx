import { Edit } from '@mui/icons-material';
import { Button, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


export const Objective = () => {
    return (
        <>
            <Grid container
                direction='row'
                justifyContent='center'
                alignItems='center'
                sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.653)",
                    borderRadius: "10px",
                    width: "75%",
                }}>

                <Grid item
                    xs={12}
                    sm={8}
                    md={8}>

                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: 60,
                            textAlign: 'center',
                            '&:hover .editButton': {
                                opacity: 1,
                            },
                            '&:hover': {
                                cursor: 'pointer',
                            }
                        }}
                    >
                        Objetivos
                        <Button
                            className="editButton"
                            sx={{
                                opacity: 0.2,
                                transition: 'opacity 0.3s',
                            }}
                        >
                            <Edit />
                        </Button>
                    </Typography>


                    <List>
                        {[
                            "Que el consumo de agua por vehículo lavado no supere los 68 lts.",
                            "Que el consumo promedio de energía eléctrica en el segundo trimestre del año no supere los 67424 KWh.",
                        ].map((text, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <ArrowRightIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                {/* <Grid item xs={12} sm={4} md={4}>
            <img src="../public/img/environment-2196690_1280.jpg" alt="" width={500}/>
        </Grid> */}
            </Grid>
        </>
    );
};
