import {
  Button,
  Grid,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  Fab,
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
  type: string;
  description: string;
}

export const ContextAnalysis = () => {
  const analysis: Analysis[] = useSelector(
    (state: any) => state.analysisContext.analysis
  );
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
    <Grid container spacing={1}>
      {role === "admin" && (<Fab
        onClick={() => dispatch(setEditForms({ from: "foda-add" }))}
        color="primary"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
        }}
      >
        <Add />
      </Fab>)}
      {["Fortaleza", "Debilidad", "Oportunidad", "Amenaza"].map((type) => (
        <Grid item xs={6} key={type}>
          <Paper style={{ padding: "16px", height: "100%" }}>
            <Typography variant="h6">{type}</Typography>
            {analysis &&
              analysis
                .filter((elem) => elem.type === type)
                .map((item) => (
                  <ListItem key={item.id}>
                    {role === "admin" && (
                      <Button
                        onClick={() =>
                          dispatch(
                            setEditForms({ from: "foda-edit", id: item.id })
                          )
                        }
                        sx={{
                          opacity: 0.2,
                          transition: "opacity 0.3s",
                          "&:hover": {
                            opacity: 1,
                          },
                        }}
                      >
                        <Edit />
                      </Button>
                    )}
                    <Grid container>
                      <ListItemText primary={item.description} />
                    </Grid>
                    {role === "admin" && (
                      <Button
                        onClick={() =>
                          dispatch(deleteContextAnalysisThunks(item.id))
                        }
                        sx={{
                          opacity: 0.2,
                          transition: "opacity 0.3s",
                          "&:hover": {
                            opacity: 1,
                          },
                        }}
                      >
                        <Delete />
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
