import { Grid, Typography} from "@mui/material"
import { RiesgoOportunidadeForm } from './../components/riesgo-oportunidades-form';

export const RiesgosOportunidades = () => {
  return (
    <Grid container spacing={2} sx={{ width: "100%", padding: 2 }}>
    {/* Título estilizado */}
    <Grid item xs={12}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          marginBottom: 2,
          color: "rgb(110, 40, 100)",
          textAlign: "center",
          fontSize: { xs: "1.8rem", sm: "2.2rem" },
        }}
      >
        Riesgos y oportunidades
      </Typography>
    </Grid>
  
    {/* Descripción estilizada */}
    <Grid item xs={12}>
      <Typography
        variant="body1"
        sx={{
          marginBottom: 3,
          color: "#555",
          fontSize: { xs: "1rem", sm: "1.2rem" },
          margin: "10px auto", 
          lineHeight: 1.6, 
        }}
      >
        En esta sección, puede analizar los riesgos y oportunidades en relación con su contexto, definiendo el umbral máximo a partir del cual se implementarán acciones correctivas.
      </Typography>
    </Grid>
    <RiesgoOportunidadeForm/>

    </Grid>
  )
}
