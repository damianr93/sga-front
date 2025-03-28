import { Box, Fab, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import { getProcessDefinitionThunks } from "../../store/slices/process-definition/thunks";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { setEditForms } from "../../store/slices/edit-forms/edit-slice";
import { Add } from "@mui/icons-material";
import ProcessDefinitionCard from "../components/process-card";

export const ProcessDefinition = () => {
  const { processDefinitions } = useSelector(
    (state: RootState) => state.processDefinitions
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProcessDefinitionThunks());
  }, []);

  return (
<Box
  sx={{
    backgroundColor: "#f4f6f8",
    padding: "16px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
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
    <Box
      sx={{
        display: "flex",
        overflowX: "auto", // Activa el scroll horizontal
        whiteSpace: "nowrap", // Evita que los elementos se envuelvan
        gap: "16px", // Espaciado entre los items
        justifyContent: 'flex-start',
        width: "100%", // Asegura que el contenedor ocupe todo el espacio disponible
      }}
    >
      {processDefinitions?.map((process) => {
        if (process.type === "Estrategicos") {
          return (
            <Box
              key={process.id}
              sx={{
                minWidth: "200px", // Ancho mínimo para cada tarjeta
                padding: "10px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <ProcessDefinitionCard
                id={process.id}
                process={process.name}
                area={process.area}
                description={process.description}
                alcanzado = {process.alcanzado}
              />
            </Box>
          );
        }
      })}
    </Box>
  </Box>

  {/* Flecha hacia abajo */}
  <Box sx={{ textAlign: "center" }}>
    <ArrowDownwardIcon fontSize="large" sx={{ color: "#2196f3" }} />
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
    <Box
      sx={{
        display: "flex",
        overflowX: "auto", // Activa el scroll horizontal
        whiteSpace: "nowrap", // Evita que los elementos se envuelvan
        gap: "16px", // Espaciado entre los items
        justifyContent: 'flex-start',
        width: "100%", // Asegura que el contenedor ocupe todo el espacio disponible
      }}
    >
      {processDefinitions?.map((process) => {
        if (process.type === "Operativo") {
          return (
            <Box
              key={process.id}
              sx={{
                minWidth: "200px", // Ancho mínimo para cada tarjeta
                padding: "10px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(188, 129, 129, 0.1)",
              }}
            >
              <ProcessDefinitionCard
                id={process.id}
                process={process.name}
                area={process.area}
                description={process.description}
                alcanzado={process.alcanzado}
              />
            </Box>
          );
        }
      })}
    </Box>
  </Box>

  {/* Flecha hacia arriba */}
  <Box sx={{ textAlign: "center" }}>
    <ArrowUpwardIcon fontSize="large" sx={{ color: "#2196f3" }} />
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
    <Box
      sx={{
        display: "flex",
        overflowX: "auto", // Activa el scroll horizontal
        whiteSpace: "nowrap", // Evita que los elementos se envuelvan
        gap: "16px", // Espaciado entre los items
        justifyContent: 'flex-start',
        width: "100%", // Asegura que el contenedor ocupe todo el espacio disponible
      }}
    >
      {processDefinitions?.map((process) => {
        if (process.type === "Soporte") {
          return (
            <Box
              key={process.id}
              sx={{
                minWidth: "200px", // Ancho mínimo para cada tarjeta
                padding: "10px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <ProcessDefinitionCard
                id={process.id}
                process={process.name}
                area={process.area}
                description={process.description}
                alcanzado={process.alcanzado}
              />
            </Box>
          );
        }
      })}
    </Box>
  </Box>

  {/* Botón flotante de agregar */}
  <Fab
    onClick={() => dispatch(setEditForms({ from: "process-definitions" }))} 
    color="primary"
    sx={{
      position: "fixed",
      bottom: 16,
      right: 16,
      boxShadow: 3,
    }}
    aria-label="Agregar proceso"
  >
    <Add />
  </Fab>
</Box>
  );
};
