import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useForm } from "../hooks/useForm";
import {
  patchProcessDefinitionsThunks,
  postProcessDefinitionsThunks,
} from "../store/slices/process-definition/thunks";
import { setEditForms } from "../store/slices/edit-forms/edit-slice";

interface ProcessDefinitions {
  id: string;
  area: string;
  name: string;
  type: string;
  description: string;
  alcanzado:boolean
}

export const ProcessDefinitionsForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  let initialValues = {
    id: "",
    area: "",
    name: "",
    type: "",
    description: "",
    alcanzado: false

  };

  const { id } = useSelector((state: RootState) => state.editForms);

  if (id) {
    const process: ProcessDefinitions[] = useSelector(
      (state: RootState) => state.processDefinitions.processDefinitions
    );

    const itemFound = process.find((item) => item.id === id);

    initialValues = itemFound
      ? {
        id: itemFound.id,
        area: itemFound.area,
        name: itemFound.name,
        type: itemFound.type,
        description: itemFound.description,
        alcanzado: itemFound.alcanzado
      }
      : {
        id: "",
        area: "",
        name: "",
        type: "",
        description: "",
        alcanzado:false
      };
  }

  const { onInputChange, formState } = useForm(initialValues);

  let { area, name, type, description, alcanzado } = formState;

  const onSubmit = () => {
    if (id) {
      dispatch(
        patchProcessDefinitionsThunks(id, {area, name, type, description, alcanzado})
      );
    } else {
      dispatch(postProcessDefinitionsThunks(area, name, type, description, alcanzado));
    }

    dispatch(setEditForms({from:''}))

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
          <TextField
            label="Área"
            variant="outlined"
            name="area"
            value={area}
            onChange={onInputChange}
            multiline
            fullWidth
          />

          <TextField
            label="Nombre del proceso"
            variant="outlined"
            name="name"
            value={name}
            onChange={onInputChange}
            multiline
            fullWidth
          />

          <TextField
            label="Descripción del proceso"
            variant="outlined"
            name="description"
            value={description}
            onChange={onInputChange}
            multiline
            fullWidth
          />

          <FormControl fullWidth>
            <InputLabel>Tipo de proceso</InputLabel>
            <Select
              name="type"
              value={type}
              label="Tipo de proceso"
              onChange={onInputChange}
            >
              <MenuItem value="Estrategicos">Estratégicos</MenuItem>
              <MenuItem value="Operativo">Operativo</MenuItem>
              <MenuItem value="Soporte">Soporte</MenuItem>
            </Select>
          </FormControl>
          
          <FormControlLabel
            control={
              <Checkbox
                name="alcanzado"
                checked={alcanzado}
                onChange={onInputChange}
              />
            }
            label="¿El proceso se encuentra abarcado por el SGA?"
          />

          <Button variant="contained" onClick={onSubmit} fullWidth>
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
