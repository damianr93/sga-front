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
import { AppDispatch } from "../store/store";
import { useForm } from "../hooks/useForm";
import {
  patchInterestedPartiesThunks,
  postInterestedPartiesThunks,
} from "../store/slices/interested-parties/thunks";

interface interestedPart {
  id: string;
  name: string;
  requirement: string;
  legalRequirement: boolean;
  intExt: string;
}

export const InterestedPartiesForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  let initialValues = {
    name: "",
    requeriment: "",
    legalRequirement: false,
    intExt: "",
  };

  const { id } = useSelector((state: any) => state.editForms);

  if (id) {
    const interestedParties: interestedPart[] = useSelector(
      (state: any) => state.interestedParties.interestedParties
    );

    const itemFound = interestedParties.find((item) => item.id === id);

    initialValues = itemFound
      ? {
        name: itemFound.name,
        requeriment: itemFound.requirement,
        legalRequirement: itemFound.legalRequirement,
        intExt: itemFound.intExt,
      }
      : {
        name: "",
        requeriment: "",
        legalRequirement: false,
        intExt: "",
      };
  }

  const { onInputChange, formState } = useForm(initialValues);

  let { name, requeriment, legalRequirement, intExt } = formState;

  const onSubmit = () => {
    if (id) {
      dispatch(
        patchInterestedPartiesThunks(
          id,
          name,
          requeriment,
          legalRequirement,
          intExt
        )
      );
    } else {
      dispatch(
        postInterestedPartiesThunks(name, requeriment, legalRequirement, intExt)
      );
    }
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
            label="Identificación de la parte interesada"
            variant="outlined"
            name="name"
            value={name}
            onChange={onInputChange}
            multiline
            fullWidth
          />

          <TextField
            label="Requisito de la Parte interesada"
            variant="outlined"
            name="requeriment"
            value={requeriment}
            onChange={onInputChange}
            multiline
            fullWidth
          />

          <FormControlLabel
            control={
              <Checkbox
                name="legalRequirement"
                checked={legalRequirement}
                onChange={onInputChange}
              />
            }
            label="El requerimiento de la parte interesada es además un requisito legal"
          />

          <FormControl fullWidth>
            <InputLabel id="part-select-label">La parte interesada es interna o externa?</InputLabel>
            <Select
              labelId="part-select-label"
              id="part-select"
              name="intExt"
              value={intExt}
              label="Interno o Externo"
              onChange={onInputChange}
            >
              <MenuItem value="Interno">Interno</MenuItem>
              <MenuItem value="Externo">Externo</MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained" onClick={onSubmit} fullWidth>
            Submit
          </Button>
        </Stack>
      </form>
    </Box>

  );
};
