import { Grid } from "@mui/material";
import { InterestedParties } from "../views/interested-parties";
import { ContextAnalysis } from "../views/context-analysis";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FormScreen } from "../../layouts/form-screen";
import { ProcessDefinition } from "../views/process-definition";
import Sidebar from "../components/Sidebar";
import { ProcesosAlcanzados } from "../views/procesos-alcanzados";
import { RiesgosOportunidades } from "../views/riesgos-oportunidades";
import { AspectosAmbientales } from "../views/AspectosAmbientales";

interface EditState {
  state: boolean;
}

interface RootState {
  editForms: EditState;
}

export const PlanningLayout = () => {
  const [viewSelected, setViewSelected] = useState<React.ReactElement | null>(null);
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
      case "4.3 Alcance del SGA":
        setViewSelected(<ProcesosAlcanzados />);
        break;
      case "6.1 Acciones para abordar riesgos y oportunidades":
      setViewSelected(<RiesgosOportunidades/>)  
      break
      case "6.1.2 Aspectos ambientales":
        setViewSelected(<AspectosAmbientales/>)  
        break
      default:
        setViewSelected(null);
        break;
    }
  };


  return (
    <Grid
      container
      sx={{
        marginTop: "65px",
        height: "calc(100vh - 65px)",
        display:"flex",
        justifyContent:"center",
      }}
      className="animate__animated animate__backInRight"
    >
      {state && <FormScreen />}
      <Sidebar renderContent={renderContent} />

      {/* Contenedor del contenido seleccionado */}
      <Grid
        item
        xs={12}
        sm={9}
        md={10}
        sx={{
          padding: { xs: "20px", sm: "30px" },
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        {viewSelected ?
          viewSelected :
          <ContextAnalysis />
        }
      </Grid>
    </Grid>

  );
};
