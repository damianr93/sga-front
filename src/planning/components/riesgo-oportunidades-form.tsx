import { Autocomplete, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import { getContextAnalysisThunks } from "../../store/slices/context-analysis/thunks";
import { getInterestedPartiesThunks } from "../../store/slices/interested-parties/thunks";
import { getProcessDefinitionThunks } from "../../store/slices/process-definition/thunks";
import { useForm } from "../../hooks/useForm";
import { postRiskOrOpportunitiesThunks } from "../../store/slices/risk-opportunities/thunks";


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

    const { analysisValue, interestedPartiesValue, processValue, riesgoOportunidadValue, descriptionROValue } = formState

    useEffect(() => {
        dispatch(getContextAnalysisThunks())
        dispatch(getInterestedPartiesThunks())
        dispatch(getProcessDefinitionThunks())
    }, [])


    const onSubmit = async () => {

        dispatch(postRiskOrOpportunitiesThunks({
            contexto: analysisValue,
            partesInteresadas: interestedPartiesValue,
            process: processValue,
            type: riesgoOportunidadValue,
            description: descriptionROValue
        }))

        onResetForm()
    }

    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                flexWrap: "wrap",
                width: "100%",
                padding: "5px"
            }}
            className="animate__bounceIn animate__animated"
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
                    value={analysis.find((item) => item.id === analysisValue) || null}
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
                    value={interestedParties.find((item) => item.id === interestedPartiesValue) || null}
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
                    value={processAlcanzados.find((item) => item.id === processValue) || null}
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
                    name="riesgoOportunidadValue"
                    label="Tipo"
                    value={riesgoOportunidadValue}
                    onChange={onInputChange}
                >
                    <MenuItem value="riesgo">Riesgo</MenuItem>
                    <MenuItem value="oportunidad">Oportunidad</MenuItem>
                </Select>
            </FormControl>

            <TextField
                id="introduction-field"
                label="Descripcion"
                variant="outlined"
                name="descriptionROValue"
                value={descriptionROValue}
                onChange={onInputChange}
                multiline
                sx={{
                    margin: "5px",
                    width: "100%"

                }}
            />

            <Button variant="contained" onClick={onSubmit} fullWidth>
                Agregar {riesgoOportunidadValue ? riesgoOportunidadValue : 'Riesgo o Oportunidad'}
            </Button>

        </Container>
    )
}
