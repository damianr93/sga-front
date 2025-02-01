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
import { AppDispatch, RootState } from "../store/store";
import { useForm } from "../hooks/useForm";
import {
  patchProcessDefinitionsThunks,
  postProcessDefinitionsThunks,
} from "../store/slices/process-definition/thunks";

interface ProcessDefinitions {
  id: string;
  area: string;
  name: string;
  type: string;
  description: string;
}

export const ProcessDefinitionsForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  let initialValues = {
    id: "",
    area: "",
    name: "",
    type: "",
    description: "",
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
        }
      : {
          id: "",
          area: "",
          name: "",
          type: "",
          description: "",
        };
  }

  const { onInputChange, formState } = useForm(initialValues);

  let { area, name, type, description } = formState;

  const onSubmit = () => {
    if (id) {
      dispatch(
        patchProcessDefinitionsThunks(id, area, name, type, description)
      );
    } else {
      dispatch(postProcessDefinitionsThunks(area, name, type, description));
    }
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

        <TextField
          id="outlined-textarea"
          label="Area"
          variant="outlined"
          name="area"
          value={area}
          onChange={onInputChange}
          multiline
          sx={{
            marginTop: "5px",
            width: "100%",
          }}
        />

        <TextField
          id="outlined-textarea"
          label="Nombre del proceso"
          variant="outlined"
          name="name"
          value={name}
          onChange={onInputChange}
          multiline
          sx={{
            marginTop: "5px",
            width: "100%",
          }}
        />

        <TextField
          id="outlined-textarea"
          label="Descripcion del proceso"
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

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Tipo de proceso</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="type"
            value={type}
            label="Tipo de proceso"
            onChange={onInputChange}
          >
            <MenuItem value="Estrategicos">Estrategicos</MenuItem>
            <MenuItem value="Operativo">Operativo</MenuItem>
            <MenuItem value="Soporte">Soporte</MenuItem>
          </Select>
        </FormControl>
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
