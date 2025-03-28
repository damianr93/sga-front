import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useEffect, useState } from "react";
import { getProcessDefinitionThunks, patchProcessDefinitionsThunks } from "../store/slices/process-definition/thunks";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";

export const ProcesosAlcanzadosForm = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { processDefinitions } = useSelector((state: RootState) => state.processDefinitions);

    const processes = processDefinitions.filter((process) => !process.alcanzado);

    const [selectedProcess, setSelectedProcess] = useState<string | null>(null);

    useEffect(() => {
        dispatch(getProcessDefinitionThunks());
    }, [dispatch]);

    const handleSelectChange = (event: SelectChangeEvent<string>) => {
        setSelectedProcess(event.target.value);
    };

    const handleSubmit = () => {
        if (selectedProcess) {
            const selectedProcessObject = processes.find((p) => p.id === selectedProcess);

            if (selectedProcessObject && selectedProcessObject.id) {
                dispatch(patchProcessDefinitionsThunks(selectedProcessObject.id, { alcanzado: true }))
            }
        }
    };

    return (
        <Box
            sx={{
                backgroundColor: "white",
                padding: "30px",
                borderRadius: "10px",
                width: "400px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Typography variant="h5" align="center" gutterBottom>
                Seleccione un Proceso
            </Typography>

            <FormControl fullWidth>
                <InputLabel>Proceso</InputLabel>
                <Select value={selectedProcess || ""} onChange={handleSelectChange}>
                    {processes.map((process) => (
                        <MenuItem key={process.id} value={process.id}>
                            {`${process.area} - ${process.name}`}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Button onClick={handleSubmit} variant="contained" sx={{ marginTop: 2 }} fullWidth>
                Confirmar
            </Button>
        </Box>
    );
};
