import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { useForm } from "../hooks/useForm";
import { patchContextAnalysisThunks } from "../store/slices/context-analysis/thunks";

interface Analysis {
  id: string;
  type: string;
  description: string;
}

export const ContextAnalysisItemsForm = () => {
  const { id } = useSelector((state: any) => state.editForms);

  const analysis: Analysis[] = useSelector(
    (state: any) => state.analysisContext.analysis
  );

  const foundItem = analysis.find((item) => item.id === id);

  const dispatch = useDispatch<AppDispatch>();

  const { onInputChange, formState } = useForm({
    id: foundItem!.id,
    type: foundItem!.type,
    description: foundItem!.description,
  });

  const { type, description } = formState;

  const onSubmit = () => {
    dispatch(patchContextAnalysisThunks(id, type, description));
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "10px",
        width: "900px",
        maxHeight: "75vh",
        overflowY: "auto",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <form>
        <Typography variant="h4" align="center" gutterBottom>
          Puede editar su información
        </Typography>

        <Stack spacing={2}>
          <FormControl fullWidth>
            <InputLabel id="tipo-select-label">Tipo</InputLabel>
            <Select
              labelId="tipo-select-label"
              id="tipo-select"
              name="type"
              value={type}
              label="Tipo"
              onChange={onInputChange}
            >
              <MenuItem value="Fortaleza">Fortaleza</MenuItem>
              <MenuItem value="Debilidad">Debilidad</MenuItem>
              <MenuItem value="Oportunidad">Oportunidad</MenuItem>
              <MenuItem value="Amenaza">Amenaza</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Descripción"
            variant="outlined"
            name="description"
            value={description}
            onChange={onInputChange}
            multiline
            fullWidth
          />

          <Button variant="contained" onClick={onSubmit} fullWidth>
            Submit
          </Button>
        </Stack>
      </form>
    </Box>

  );
};
