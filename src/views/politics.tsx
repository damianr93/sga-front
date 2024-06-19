import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


export const Politics = () => {
    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid item xs={12} sm={8} md={8}>
                    <Typography variant="h1">Política de la empresa</Typography>
                    <Box mt={2}>
                        <Typography variant="body1">
                            En línea con nuestro compromiso de contribuir al Desarrollo Sustentable, BOSETTI Automotores S.R.L. tiene un enfoque sistemático hacia la Salud, la Seguridad y la Gestión Ambiental a fin de lograr un mejoramiento continuo en su desempeño.
                        </Typography>
                        <Typography variant="body1" mt={2}>
                            BOSETTI Automotores S.R.L. aborda estas cuestiones con la misma atención que cualquier otra actividad crítica de sus negocios, fijando metas para mejorar.
                        </Typography>
                        <Typography variant="body1" mt={2}>
                            BOSETTI AUTOMOTORES S.R.L. en la comercialización y servicios posventa de vehículos se compromete a:
                        </Typography>
                    </Box>
                    <List>
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
                                <ListItemIcon>
                                    <ArrowRightIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <img src="../public/img/environment-2196690_1280.jpg" alt="" width={500}/>
                </Grid>
            </Grid>
        </>
    )
}
