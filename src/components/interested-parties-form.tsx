import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { setEditForms } from "../store/slices/edit-forms/edit-slice";
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
        padding: "25px",
        borderRadius: "5px",
        width: "900px",
        maxHeight: "75vh",
        overflowY: "scroll",
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
        <TextField
          id="outlined-textarea"
          label="Identificacion de la parte interesada"
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
          label="Requisito de la Parte interesada"
          variant="outlined"
          name="requeriment"
          value={requeriment}
          onChange={onInputChange}
          multiline
          sx={{
            marginTop: "5px",
            width: "100%",
          }}
        />
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                name="legalRequirement"
                checked={legalRequirement}
                onChange={onInputChange}
              />
            }
            label="El requerimiento de la parte interesada es ademas un requisito legal"
          />
        </Box>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            La parte interesada es interna o externa?
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="intExt"
            value={intExt}
            label="Interno o externo"
            onChange={onInputChange}
          >
            <MenuItem value="Interno">Interno</MenuItem>
            <MenuItem value="Externo">Externo</MenuItem>
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
