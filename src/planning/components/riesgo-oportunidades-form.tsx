import { Autocomplete, Container, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import { getContextAnalysisThunks } from "../../store/slices/context-analysis/thunks";
import { getInterestedPartiesThunks } from "../../store/slices/interested-parties/thunks";
import { getProcessDefinitionThunks } from "../../store/slices/process-definition/thunks";
import { useForm } from "../../hooks/useForm";
import { FormScreen } from './../../layouts/form-screen';


export const RiesgoOportunidadeForm = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { analysis } = useSelector((state: RootState) => state.analysisContext)
    const { interestedParties } = useSelector((state: RootState) => state.interestedParties)
    const { processDefinitions } = useSelector((state: RootState) => state.processDefinitions)

    const processAlcanzados = processDefinitions.filter((process) => process.alcanzado === true)

    const { formState, onInputChange, onResetForm } = useForm({
        analysisValue: '',
        interestedPartiesValue: '',
        processValue: '',
        riesgoOportunidadValue: '',
        descriptionROValue: ''

    })

    const { analysisValue } = formState

    useEffect(() => {
        dispatch(getContextAnalysisThunks())
        dispatch(getInterestedPartiesThunks())
        dispatch(getProcessDefinitionThunks())
    }, [])



    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                width: "100%",
                backgroundColor: "rgba(214, 104, 104, 0.13)",
                padding: "5px"
            }}
        >


            {analysis &&

                <Autocomplete
                    sx={{
                        minWidth: "300px",
                        margin: "5px"
                    }}
                    options={analysis}
                    getOptionLabel={(option) => option.description}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Relacion con el contexto"
                            fullWidth
                            required
                        />
                    )}
                    value={analysis.find((item) => item.id === formState.analysisValue) || null}
                    onChange={(_, newValue) =>
                        onInputChange({
                            target: {
                                name: "analysisValue",
                                value: newValue ? newValue.id : ""
                            }
                        })
                    }
                    isOptionEqualToValue={(option, value) => option.id === value?.id}
                    renderOption={(props, option) => {

                        let color = 'black';
                        if (option.type === 'Fortaleza') {
                            color = 'green';
                        } else if (option.type === 'Debilidad') {
                            color = 'red';
                        } else if (option.type === 'Oportunidad') {
                            color = 'blue';
                        } else if (option.type === 'Amenaza') {
                            color = 'orange';
                        }

                        return (
                            <li
                                {...props}
                                key={option.id}
                                style={{
                                    color: color,
                                    fontWeight: option.type ? 'bold' : 'normal'
                                }}
                            >
                                {option.description}
                            </li>
                        );
                    }}
                />

            }

            {
                interestedParties &&

                <Autocomplete
                    sx={{
                        minWidth: "300px",
                        margin: "5px"
                    }}
                    options={interestedParties}
                    getOptionLabel={(option) => option.name}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Parte interesada"
                            fullWidth
                            required
                        />
                    )}
                    value={interestedParties.find((item) => item.id === formState.interestedPartiesValue) || null}
                    onChange={(_, newValue) =>
                        onInputChange({
                            target: {
                                name: "interestedPartiesValue",
                                value: newValue ? newValue.id : ""
                            }
                        })
                    }
                    isOptionEqualToValue={(option, value) => option.id === value?.id}
                    renderOption={(props, option) => {
                        return (
                            <li
                                {...props}
                                key={option.id}
                            >
                                {option.name}
                            </li>
                        );
                    }}
                />
            }

            {
                processAlcanzados &&

                <Autocomplete
                    sx={{
                        minWidth: "300px",
                        margin: "5px"
                    }}
                    options={processAlcanzados}
                    getOptionLabel={(option) => option.name}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Proceso"
                            fullWidth
                            required
                        />
                    )}
                    value={processAlcanzados.find((item) => item.id === formState.processValue) || null}
                    onChange={(_, newValue) =>
                        onInputChange({
                            target: {
                                name: "processValue",
                                value: newValue ? newValue.id : ""
                            }
                        })
                    }
                    isOptionEqualToValue={(option, value) => option.id === value?.id}
                    renderOption={(props, option) => {
                        return (
                            <li
                                {...props}
                                key={option.id}
                            >
                                {option.name}
                            </li>
                        );
                    }}
                />
            }

            <FormControl
                sx={{
                    margin: "5px",
                    width: "150px"

                }}
            >
                <InputLabel>R/O</InputLabel>
                <Select
                    name="type"
                    label="Tipo"
                >
                    <MenuItem value="Riesgo">Riesgo</MenuItem>
                    <MenuItem value="Oportunidad">Oportunidad</MenuItem>
                </Select>
            </FormControl>

            <TextField
                id="introduction-field"
                label="Descripcion"
                variant="outlined"
                name="introductionValue"
                multiline
                sx={{
                    margin: "5px",

                }}
            />

        </Container>
    )
}
