import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
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
        padding: "25px",
        borderRadius: "5px",
        width: "900px",
        maxHeight: "75vh",
        overflowY: "scroll",
      }}
    >
      <form>
        <Typography variant="h3" align="center" width="100%">
          Puede editar su información
        </Typography>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
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
          id="outlined-textarea"
          label="Descripción"
          variant="outlined"
          name="description"
          value={description}
          onChange={onInputChange}
          multiline
          sx={{
            marginTop: "5px",
            width: "100%",
          }}
        />
        <Button
          variant="contained"
          onClick={onSubmit}
          sx={{
            margin: "10px",
          }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};
