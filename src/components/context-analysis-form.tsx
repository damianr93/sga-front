import { Close } from "@mui/icons-material";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useDispatch} from "react-redux";
import { AppDispatch } from "../store/store";
import { setEditForms } from "../store/slices/edit-forms/edit-slice";

export const ContextAnalysisForm = () => {
  const dispatch = useDispatch<AppDispatch>();


  const onSubmit = () => {
    // dispatch()
  }

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
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Age"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Fortaleza</MenuItem>
            <MenuItem value={20}>Debilidad</MenuItem>
            <MenuItem value={30}>Oportunidad</MenuItem>
            <MenuItem value={30}>Amenaza</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-textarea"
          label="Descripcion"
          variant="outlined"
          // value={introductionValue}
          // onChange={handleIntroductionChange}
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
