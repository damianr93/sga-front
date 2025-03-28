import React from "react";
import { Add, Delete } from "@mui/icons-material";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { AppDispatch } from "../store/store";
import { postPoliticsThunks } from "../store/slices/politics/thunks";

export const PoliticsForm = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { id, politics, introduction } = useSelector((state: any) => state.politics);

  const [introductionValue, setIntroductionValue] = useState(introduction || "");
  const [politicsValues, setPoliticsValues] = useState<string[]>(politics || []);

  const handleIntroductionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIntroductionValue(event.target.value);
  };

  const handlePoliticsChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setPoliticsValues((prev) => {
      const newPoliticsValues = [...prev];
      newPoliticsValues[index] = event.target.value;
      return newPoliticsValues;
    });
  };

  const addPolitics = () => {
    setPoliticsValues((prev) => [...prev, ""]);
  };

  const deletePolitic = (index: number) => {
    setPoliticsValues((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(postPoliticsThunks(id, introductionValue, politicsValues));
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
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Sombra para resaltar el formulario
      }}
    >
      <Typography variant="h3" align="center" width="100%">
        Puede editar su información
      </Typography>

      <form onSubmit={onSubmit}>
        <Stack spacing={2}>
          <TextField
            id="introduction-field"
            label="Política de la empresa"
            variant="outlined"
            name="introductionValue"
            value={introductionValue}
            onChange={handleIntroductionChange}
            multiline
            sx={{
              marginTop: "5px",
              width: "100%",
            }}
          />

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {politicsValues.map((text, index) => (
              <Box key={index} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <TextField
                  id={`politic-field-${index}`}
                  label={`Política ${index + 1}`}
                  variant="outlined"
                  value={text}
                  onChange={handlePoliticsChange(index)}
                  multiline
                  sx={{ marginTop: "15px", width: "80%" }}
                />
                <Button onClick={() => deletePolitic(index)} sx={{ marginLeft: "10px" }}>
                  <Delete />
                </Button>
              </Box>
            ))}
            <Button
            onClick={addPolitics}
            variant="outlined"
            startIcon={<Add />}
            sx={{
              marginTop:'10px',
              alignSelf: "center",
            }}
          >
            Agregar Política
          </Button> 
          </Box>

          <Button variant="contained" onClick={onSubmit} sx={{ marginTop: "20px", padding: "10px 20px" }}>
            Submit
          </Button>
        </Stack>
      </form>
    </Box>

  );
};