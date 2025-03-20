import {
  Button,
  Grid,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  Fab,
  ListItemIcon,
} from "@mui/material";
import { Add, Delete, Edit } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import { useEffect } from "react";
import { setEditForms } from "../../store/slices/edit-forms/edit-slice";
import {
  deleteContextAnalysisThunks,
  getContextAnalysisThunks,
} from "../../store/slices/context-analysis/thunks";
import { getUserLogged } from "../../utils/storage";

interface Analysis {
  id: string;
  type: AnalysisType;
  description: string;
}

type AnalysisType = "Fortaleza" | "Debilidad" | "Oportunidad" | "Amenaza";

const colors: Record<AnalysisType, string> = {
  Fortaleza: "#4CAF50", // Verde
  Debilidad: "#F44336", // Rojo
  Oportunidad: "#2196F3", // Azul
  Amenaza: "#FF9800", // Naranja
};

export const ContextAnalysis = () => {
  const analysis: Analysis[] = useSelector((state: any) => state.analysisContext.analysis);
  const item = getUserLogged();
  if (!item) {
    return null;
  }
  const { role } = JSON.parse(item);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getContextAnalysisThunks());
  }, [dispatch]);

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
      Análisis FODA
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
      En esta sección puedes visualizar y gestionar los análisis FODA (Fortalezas, Oportunidades, Debilidades y Amenazas) de la empresa. Si eres un administrador, puedes agregar, editar o eliminar análisis. Los usuarios pueden ver los análisis según su tipo y su rol.
    </Typography>
  </Grid>

  {/* Botón de agregar análisis solo visible para administradores */}
  {role === "admin" && (
    <Fab
      onClick={() => dispatch(setEditForms({ from: "foda-add" }))}
      color="primary"
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        boxShadow: 3,
      }}
      aria-label="Agregar nuevo análisis"
    >
      <Add />
    </Fab>
  )}

  {/* Mapeo de los tipos de análisis */}
  {(["Fortaleza", "Debilidad", "Oportunidad", "Amenaza"] as const).map((type: AnalysisType) => (
    <Grid item xs={12} sm={6} key={type}>
      <Paper
        sx={{
          padding: 3,
          height: "100%",
          borderRadius: 2,
          boxShadow: 3,
          borderLeft: `6px solid ${colors[type]}`,
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: colors[type], fontWeight: "bold", marginBottom: 1 }}
        >
          {type}
        </Typography>

        {analysis &&
          analysis
            .filter((elem) => elem.type === type)
            .map((item) => (
              <ListItem key={item.id} sx={{ paddingY: 1, display: "flex", alignItems: "center" }}>
                {role === "admin" && (
                  <Button
                    onClick={() => dispatch(setEditForms({ from: "foda-edit", id: item.id }))}
                    sx={{
                      opacity: 0.5,
                      transition: "opacity 0.3s, transform 0.2s",
                      "&:hover": { opacity: 1, transform: "scale(1.1)" },
                    }}
                    aria-label={`Editar análisis: ${item.description}`}
                  >
                    <ListItemIcon>
                      <Edit />
                    </ListItemIcon>
                  </Button>
                )}

                <ListItemText primary={item.description} sx={{ flexGrow: 1 }} />

                {role === "admin" && (
                  <Button
                    onClick={() => dispatch(deleteContextAnalysisThunks(item.id))}
                    sx={{
                      opacity: 0.5,
                      transition: "opacity 0.3s, transform 0.2s",
                      "&:hover": { opacity: 1, transform: "scale(1.1)" },
                    }}
                    aria-label={`Eliminar análisis: ${item.description}`}
                  >
                    <ListItemIcon>
                      <Delete />
                    </ListItemIcon>
                  </Button>
                )}
              </ListItem>
            ))}
      </Paper>
    </Grid>
  ))}
</Grid>

  );
};
