import { TurnedInNot } from "@mui/icons-material"
import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { InterestedParties } from "../views/interested-parties"
// import { ContextAnalysis } from "../views/context-analysis"

const iso = [
  '4.1 Analisis del contexto',
  '4.2 Partes Interesadas',
  '4.3 Alcance del SGA',
  '4.4 Establecimiento de Procesos',
  '6.1 Acciones para abordar riesgos y oportunidades',
  '6.1.2 Aspectos ambientales',
  '6.1.4 Planificación de acciones',
]

export const PlanningLayout = ({ drawerWidth = 0 }) => {
  return (
    <Grid container
      columns={5}
      sx={{ marginTop: `${drawerWidth}px` }}>
      <Grid item
        xs={1}
        sx={{
          backgroundColor: "white",
          minHeight: `calc(100vh - ${drawerWidth}px)`
        }}>

        <List>
          {
            iso.map(text => {
              return (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <TurnedInNot />
                    </ListItemIcon>
                    <Grid container>
                      <ListItemText primary={text} />
                      <ListItemText secondary={'Exercitation cillum irure elit consectetur.'} />
                    </Grid>
                  </ListItemButton>
                </ListItem>
              )
            })
          }
        </List>
      </Grid>
      <Grid item
        xs={4}
        sx={{
          minHeight: `calc(100vh - ${drawerWidth}px)`,
          padding: '30px'
        }}>

        {/* <ContextAnalysis /> */}
        <InterestedParties />

      </Grid>
    </Grid>
  )
}
