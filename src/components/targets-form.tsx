import { Add, Close, Delete } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { setEditForms } from "../store/slices/edit-forms/edit-slice";
import { useState } from "react";
import {  postPoliticsThunks } from "../store/slices/politics/thunks";


export const TargetsForm = () => {

  const { id, introduction, politics, targets } = useSelector((state: any) => state.politics)

  const dispatch = useDispatch<AppDispatch>();

  const [tgts, setTgts] = useState(targets)

  const handleTargetsChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTargetsValues = [...tgts];
    newTargetsValues[index] = event.target.value;
    setTgts(newTargetsValues);
  };

  const addTarget = () => {
    const newTargetsValues = [...tgts]
    newTargetsValues.push(`nueva politica ${newTargetsValues.length + 1}`)
    setTgts(newTargetsValues)
  }

  const deleteTarget = (index: number) => {
    const newTargetsValues = [...tgts]
    newTargetsValues.splice(index, 1)
    setTgts(newTargetsValues)
  }

  const onSubmit = () => {
    dispatch(postPoliticsThunks(id, introduction, politics, tgts))
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
          Puede editar sus objetivos
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          {tgts.map((text: string, index: number) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TextField
                id="outlined-textarea"
                label={`Politica ${index + 1}`}
                variant="outlined"
                value={text}
                onChange={handleTargetsChange(index)}
                multiline
                sx={{
                  marginTop: "15px",
                  width: "80%",
                }}
              />
              <Button onClick={() => deleteTarget(index)}>
                <Delete />
              </Button>
            </Box>
          ))}
          <Button onClick={addTarget}>
            <Add />
          </Button>
        </Box>
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