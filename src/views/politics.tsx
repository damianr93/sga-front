import { Box, Button, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Close, Edit } from "@mui/icons-material";
import { useState } from "react";


export const Politics = () => {
    const [editing, setEditing] = useState(false)
    return (
        <>
           
            <Grid container
                direction='row'
                justifyContent='center'
                alignItems='center'
                sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.853)",
                    borderRadius: "10px",
                    width: "75%",
                    margin: "5px",
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
                        Política de la empresa
                        <Button
                            onClick={() => setEditing(true)}
                            className="editButton"
                            sx={{
                                opacity: 0.2,
                                transition: 'opacity 0.3s',
                            }}
                        >
                            <Edit />
                        </Button>
                    </Typography>

                    <Box mt={2} >
                        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                            En línea con nuestro compromiso de contribuir al Desarrollo Sustentable, BOSETTI Automotores S.R.L. tiene un enfoque sistemático hacia la Salud, la Seguridad y la Gestión Ambiental a fin de lograr un mejoramiento continuo en su desempeño.
                        </Typography>
                        <Typography variant="body1" mt={2} sx={{ fontWeight: "bold" }}>
                            BOSETTI Automotores S.R.L. aborda estas cuestiones con la misma atención que cualquier otra actividad crítica de sus negocios, fijando metas para mejorar.
                        </Typography>
                        <Typography variant="body1" mt={2} sx={{ fontWeight: "bold" }}>
                            BOSETTI AUTOMOTORES S.R.L. en la comercialización y servicios posventa de vehículos se compromete a:
                        </Typography>
                    </Box>
                    <List >
                        {[
                            "Un control y uso racional de los recursos renovables, en el lavado de vehículos, y en el uso de la energía eléctrica dentro de la empresa",
                            "Optimizar la utilización de productos químicos focalizados en el cuidado del medio ambiente",
                            "Gestionar correctamente los residuos derivados de nuestras actividades de posventa como hidrocarburos, filtros y metales, conforme a la legislación vigente, buscando minimizar el impacto ambiental",
                            "Aplicar medidas preventivas tendientes a evitar impactos en el medio ambiental",
                            "En la medida de lo posible, aplicar tecnologías alternativas que mejoren nuestro desempeño ambiental",
                            "Buscar mejoras que contribuyan a la prevención, reducción y reparación de los impactos ambientales negativos significativos",
                            "Contribuir a la concientización en materia de cuidado medioambiental"
                        ].map((text, index) => (
                            <ListItem key={index}>
                                <ListItemIcon >
                                    <ArrowRightIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </>
    )
}

