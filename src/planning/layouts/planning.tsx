import { TurnedInNot } from "@mui/icons-material";
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { InterestedParties } from "../views/interested-parties";
import { ContextAnalysis } from "../views/context-analysis";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FormScreen } from "../../layouts/form-screen";
import { ProcessDefinition } from "../views/process-definition";

const iso = [
  {
    primary: "4.1 Analisis del contexto",
    secondary: "Descripción del análisis del contexto",
  },
  {
    primary: "4.2 Partes Interesadas",
    secondary: "Descripción de las partes interesadas",
  },
  {
    primary: "4.3 Alcance del SGA",
    secondary: "Descripción del alcance del SGA",
  },
  {
    primary: "4.4 Establecimiento de Procesos",
    secondary: "Descripción del establecimiento de procesos",
  },
  {
    primary: "6.1 Acciones para abordar riesgos y oportunidades",
    secondary: "Descripción de acciones para abordar riesgos y oportunidades",
  },
  {
    primary: "6.1.2 Aspectos ambientales",
    secondary: "Descripción de los aspectos ambientales",
  },
  {
    primary: "6.1.4 Planificación de acciones",
    secondary: "Descripción de la planificación de acciones",
  },
];

interface EditState {
  state: boolean;
}

interface RootState {
  editForms: EditState;
}

export const PlanningLayout = () => {
  const [viewSelected, setViewSelected] = useState<React.ReactElement | null>();

  const state = useSelector((state: RootState) => state.editForms.state);

  const renderContent = (option: string) => {
    switch (option) {
      case "4.1 Analisis del contexto":
        setViewSelected(<ContextAnalysis />);
        break;

      case "4.2 Partes Interesadas":
        setViewSelected(<InterestedParties />);
        break;

      case "4.4 Establecimiento de Procesos":
        setViewSelected(<ProcessDefinition />);
        break;

      case "Dashboard":
        break;
    }
  };

  return (
    <Grid container columns={5} sx={{ marginTop: `65px` }}>
      <Grid
        item
        xs={1}
        sx={{
          backgroundColor: "white",
          minHeight: `calc(100vh - 65px)`,
        }}
      >
        {state && <FormScreen />}

        <List>
          {iso.map(({ primary, secondary }) => (
            <ListItem key={primary} disablePadding>
              <ListItemButton onClick={() => renderContent(primary)}>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={primary} />
                  <ListItemText secondary={secondary} />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid
        item
        xs={4}
        sx={{
          minHeight: `calc(100vh - 65px)`,
          padding: "30px",
        }}
      >
        {viewSelected}
      </Grid>
    </Grid>
  );
};
