import { Close } from "@mui/icons-material";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { setEditForms } from "../store/slices/edit-forms/edit-slice";
import { useForm } from "../hooks/useForm";
import { postContextAnalysisThunks } from "../store/slices/context-analysis/thunks";
import { updateAnalisisContext } from "../store/slices/context-analysis/context-analysis-slice";

export const ContextAnalysisForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { onInputChange, formState } = useForm({
    type: "",
    description: ""
  });

  const { type, description } = formState;

  const onSubmit = () => {
    dispatch(postContextAnalysisThunks(type, description));
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "25px",
        borderRadius: "5px",
        width: "900px",
        maxHeight: "75vh",
        overflowY: "scroll"
      }}
    >
      <form>
        <h3>
          Puede editar su informacion
          <Button
            onClick={() => dispatch(setEditForms({ from: "" }))}
            className="editButton"
            sx={{
              opacity: 0.2,
              transition: "opacity 0.3s",
            }}
          >
            <Close />
          </Button>
        </h3>
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
            margin: "10px"
          }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};
