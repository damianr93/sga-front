import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Edit } from "@mui/icons-material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPoliticsThunks } from "../../store/slices/politics/thunks";
import { AppDispatch } from "../../store/store";
import { setEditForms } from "../../store/slices/edit-forms/edit-slice";
import { getUserLogged } from "../../utils/storage";

interface PoliticsState {
  politics: string[];
  introduction: string;
}

interface RootState {
  editForms: any;
  politics: PoliticsState;
}

export const Politics = () => {
  const { politics, introduction } = useSelector(
    (state: RootState) => state.politics
  );

  const item = getUserLogged();
  if (!item) {
    return null;
  }
  const { role } = JSON.parse(item);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getPoliticsThunks());
  }, []);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.853)",
          borderRadius: "10px",
          width: "75%",
          margin: "5px",
          padding: "16px",
          boxShadow: 3, // Añadir sombra para profundidad
        }}
      >
        <Grid item xs={12} sm={8} md={8}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" }, // Tamaño de fuente responsivo
              textAlign: "center",
              color: "#6e2864", // Color personalizado para el texto
              fontWeight: "bold",
              position: "relative",
              '&:hover .editButton': {
                opacity: 1,
              },
              '&:hover': {
                cursor: "pointer",
              },
            }}
          >
            Política de la empresa
            {role === "admin" && (
              <Button
                onClick={() => dispatch(setEditForms({ from: "politics" }))}
                className="editButton"
                sx={{
                  opacity: 0.2,
                  transition: "opacity 0.3s",
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  '&:hover': {
                    opacity: 1,
                  },
                }}
              >
                <Edit />
              </Button>
            )}
          </Typography>

          <Box mt={2} sx={{ width: "100%" }}>
            <Typography
              variant="body1"
              sx={{
                whiteSpace: "pre-wrap",
                fontWeight: "bold",
                width: "100%",
                color: "#555", // Color del texto
              }}
            >
              {introduction && introduction}
            </Typography>
          </Box>

          <List sx={{ marginTop: "16px" }}>
            {politics &&
              politics.map((text) => (
                <ListItem key={text} sx={{ borderBottom: "1px solid #e0e0e0", padding: "8px 0" }}>
                  <ListItemIcon>
                    <ArrowRightIcon fontSize="small" sx={{ color: "#2196f3" }} />
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ color: "#555" }} />
                </ListItem>
              ))}
          </List>
        </Grid>
      </Grid>
    </>
  );
};
