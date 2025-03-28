import { Add, Delete } from "@mui/icons-material";
import { Box, Button, IconButton, Stack, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteTargetThunk, postTargetsThunks } from "../store/slices/targets/thunks";

export const TargetsForm = () => {
  const { targets } = useSelector((state: any) => state.targets);
  const dispatch = useDispatch()
  const [tgts, setTgts] = useState(targets);

  const handleTargetsChange = (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setTgts(tgts.map((target: any) => {
      if (target.id === id) {
        return {
          ...target,
          description: event.target.value,
        };
      }
      return target;
    }));
  };

  const addTarget = () => {
    const newTarget = {
      id: `post${tgts.length + 1}`, 
      description: `nueva politica ${tgts.length + 1}`,
    };
    setTgts([...tgts, newTarget]);
  };

  const deleteTarget = (id: string) => {
    const newTargetsValues = tgts.filter((target: any) => target.id !== id);
    setTgts(newTargetsValues);
    dispatch(deleteTargetThunk(id))
  };

  const onSubmit = async () => {

    const dataToSend = tgts.map((target: any) => ({
      id: target.id || '',
      description: target.description,
    }));

    try {
     
      dispatch(postTargetsThunks(dataToSend))

    } catch (error) {

      console.error('Error al enviar los datos:', error);
      
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
          {tgts.map((target: any) => (
            <Box
              key={target.id} // Asegúrate de usar target.id aquí
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <TextField
                label="Objetivo"
                variant="outlined"
                value={target.description}
                onChange={handleTargetsChange(target.id)}
                multiline
                fullWidth
              />
              <IconButton onClick={() => deleteTarget(target.id)} color="error">
                <Delete />
              </IconButton>
            </Box>
          ))}

          <Button
            onClick={addTarget}
            variant="outlined"
            startIcon={<Add />}
            sx={{
              alignSelf: "center",
            }}
          >
            Agregar objetivo
          </Button>

          <Button variant="contained" onClick={onSubmit} fullWidth>
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
