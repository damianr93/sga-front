import { Box, Fab, Typography } from "@mui/material"
import { setEditForms } from "../../store/slices/edit-forms/edit-slice"
import { Add } from "@mui/icons-material"
import { getUserLogged } from "../../utils/storage";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { getProcessDefinitionThunks } from "../../store/slices/process-definition/thunks";
import { useEffect } from "react";
import ProcessDefinitionCard from "../components/process-card";

export const ProcesosAlcanzados = () => {

    const { processDefinitions } = useSelector(
        (state: RootState) => state.processDefinitions
      );
    
      const dispatch = useDispatch<AppDispatch>();
    
      useEffect(() => {
        dispatch(getProcessDefinitionThunks());
      }, []);
    
      const items = getUserLogged();
      if (!items) {
        return null;
      }
    
      const { role } = JSON.parse(items);

  return (
    <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
    padding: 3,
  }}
>
  {/* Título estilizado */}
  <Typography
    variant="h4"
    sx={{
      fontWeight: "bold",
      color: "rgb(110, 40, 100)",
      textAlign: "center",
      marginBottom: 3,
      fontSize: { xs: "1.8rem", sm: "2.2rem" },
    }}
  >
    Alcance del Sistema de Gestión Ambiental
  </Typography>

  {/* Descripción estilizada */}
  <Typography
    variant="body1"
    sx={{
      color: "#555",
      fontSize: { xs: "1rem", sm: "1.2rem" },
      margin: "0 auto",
      lineHeight: 1.6,
      marginBottom: 2,
    }}
  >
    Posterior a la definición de sus procesos, en este espacio podrá visualizar, quitar o agregar procesos al alcance de su sistema de gestión ambiental.
  </Typography>

  {/* Contenedor de procesos en columnas */}
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, // Columnas responsivas
      gap: 3,
      width: "100%",
    }}
  >
    {/* Procesos Estratégicos */}
    <Box
      sx={{
        backgroundColor: "#72b2cf96",
        padding: "16px",
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "rgb(110, 40, 100)",
          textAlign: "center",
          fontSize: { xs: "1.5rem", sm: "1.8rem" },
        }}
      >
        Procesos Estratégicos
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {processDefinitions
          ?.filter((process) => process.alcanzado && process.type === "Estrategicos")
          .map((process) => (
            <ProcessDefinitionCard
              key={process.id}
              id={process.id}
              process={process.name}
              area={process.area}
              description={process.description}
              alcanzado={process.alcanzado}
            />
          ))}
      </Box>
    </Box>

    {/* Procesos Operativos */}
    <Box
      sx={{
        backgroundColor: "rgba(110, 40, 99, 0.34)",
        padding: "16px",
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "rgb(110, 40, 100)",
          textAlign: "center",
          fontSize: { xs: "1.5rem", sm: "1.8rem" },
        }}
      >
        Procesos Operativos
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {processDefinitions
          ?.filter((process) => process.alcanzado && process.type === "Operativo")
          .map((process) => (
            <ProcessDefinitionCard
              key={process.id}
              id={process.id}
              process={process.name}
              area={process.area}
              description={process.description}
              alcanzado={process.alcanzado}
            />
          ))}
      </Box>
    </Box>

    {/* Procesos de Soporte */}
    <Box
      sx={{
        backgroundColor: "#72b2cf96",
        padding: "16px",
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "rgb(110, 40, 100)",
          textAlign: "center",
          fontSize: { xs: "1.5rem", sm: "1.8rem" },
        }}
      >
        Procesos de Soporte
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {processDefinitions
          ?.filter((process) => process.alcanzado && process.type === "Soporte")
          .map((process) => (
            <ProcessDefinitionCard
              key={process.id}
              id={process.id}
              process={process.name}
              area={process.area}
              description={process.description}
              alcanzado={process.alcanzado}
            />
          ))}
      </Box>
    </Box>
  </Box>

  {/* Botón flotante de agregar (visible solo para administradores) */}
  {role === "admin" && (
    <Fab
      onClick={() => dispatch(setEditForms({ from: "procesos-alcanzados" }))}
      color="primary"
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        boxShadow: 3,
      }}
    >
      <Add />
    </Fab>
  )}
</Box>
  )
}
