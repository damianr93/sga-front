import { Box, Fab, Grid, Typography } from "@mui/material";
import PartiesBasicTable from "../components/interesed-parties-table";
import { setEditForms } from "../../store/slices/edit-forms/edit-slice";
import { Add } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import { useEffect } from "react";
import { getInterestedPartiesThunks } from "../../store/slices/interested-parties/thunks";
import { getUserLogged } from "../../utils/storage";

export const InterestedParties = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { interestedParties } = useSelector(
    (state: any) => state.interestedParties
  );
  const items = getUserLogged();
  if (!items) {
    return null;
  }

  const { role } = JSON.parse(items);

  useEffect(() => {
    dispatch(getInterestedPartiesThunks());
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        width: "100%",
        padding: 3, // Puedes ajustar el padding según sea necesario
      }}
    >
      {/* Título estilizado */}
      <Grid item xs={12}>
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
          Partes Interesadas
        </Typography>
      </Grid>

      {/* Descripción estilizada */}
      <Grid item xs={12}>
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
          En esta sección puedes visualizar y gestionar las partes interesadas relacionadas con el Sistema de Gestión Ambiental (SGA) de la empresa. Las partes interesadas pueden tener requisitos que constituyen obligaciones tanto legales como internas. Es importante diferenciar entre los requisitos legales, que deben cumplirse conforme a las normativas externas, y los requisitos internos, definidos por la propia organización. Las partes interesadas pueden ser tanto internas como externas, y su gestión adecuada es clave para garantizar el cumplimiento del SGA.  
        </Typography>
      </Grid>

      {/* Botón de agregar análisis solo visible para administradores */}
      {role === "admin" && (
        <Fab
          onClick={() => dispatch(setEditForms({ from: "interested-parties" }))}
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

      {/* Tabla de análisis */}
      <Box
        sx={{
          width: "100%", // Asegura que ocupe el 100% del espacio disponible
          overflow: "visible", // Evita que se agregue un scroll
        }}
      >
        <PartiesBasicTable rows={interestedParties} />
      </Box>
    </Box>
  );
};
