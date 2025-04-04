import { Autocomplete, Box, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import { getContextAnalysisThunks } from "../../store/slices/context-analysis/thunks";
import { getInterestedPartiesThunks } from "../../store/slices/interested-parties/thunks";
import { getProcessDefinitionThunks } from "../../store/slices/process-definition/thunks";
import { useForm } from "../../hooks/useForm";
import { patchRiskOrOpportunitiesThunks, postRiskOrOpportunitiesThunks } from "../../store/slices/risk-opportunities/thunks";
import { conflictosGremialesCriterio, costoCorreccionCriterio, dañoPotencialPersonasMedAmbCriterio, incumplimientoLetalCriterio, ocurrenciasCriterios, perdidaImagenCriterio, perdidaPotencialClientesCriterio, probabilidadCriterios } from "../../utils/evaluacionRiesgos";

export const RiesgoOportunidadeForm = () => {
    let initialValues = {
        idvalue: '',
        contexto: '',
        partesInteresadas: '',
        process: '',
        type: '',
        description: '',
        probabilidad: 0,
        ocurrencia: 0,
        perdidaDeClientesPotencial: 0,
        dañoPotencial: 0,
        conflictosGremialesPosibles: 0,
        incumplimientoLegal: 0,
        perdidaDeImagen: 0,
        costoCorreccion: 0,
    }
    const dispatch = useDispatch<AppDispatch>()
    const { analysis } = useSelector((state: RootState) => state.analysisContext)
    const { interestedParties } = useSelector((state: RootState) => state.interestedParties)
    const { processDefinitions } = useSelector((state: RootState) => state.processDefinitions)
    const { id } = useSelector((state: RootState) => state.editForms)

    if (id !== undefined) {
        const { riskOrOpportunities } = useSelector((state: RootState) => state.riskOrOpportunities)

        const riskOrOpportunityToEdit = riskOrOpportunities.find((riskOrOpportunity) => riskOrOpportunity.id === id)

        if (riskOrOpportunityToEdit) {
            initialValues = {
                idvalue: riskOrOpportunityToEdit.id,
                contexto: riskOrOpportunityToEdit.contexto.id,
                partesInteresadas: riskOrOpportunityToEdit.partesInteresadas.id,
                process: riskOrOpportunityToEdit.process.id,
                type: riskOrOpportunityToEdit.type,
                description: riskOrOpportunityToEdit.description,
                probabilidad: +riskOrOpportunityToEdit.probabilidad!,
                ocurrencia: +riskOrOpportunityToEdit.ocurrencia!,
                perdidaDeClientesPotencial: +riskOrOpportunityToEdit.perdidaDeClientesPotencial!,
                dañoPotencial: +riskOrOpportunityToEdit.dañoPotencial!,
                conflictosGremialesPosibles: +riskOrOpportunityToEdit.conflictosGremialesPosibles!,
                incumplimientoLegal: +riskOrOpportunityToEdit.incumplimientoLegal!,
                perdidaDeImagen: +riskOrOpportunityToEdit.perdidaDeImagen!,
                costoCorreccion: +riskOrOpportunityToEdit.costoCorreccion!,
            }
        }

    }


    const processAlcanzados = processDefinitions.filter((process) => process.alcanzado === true)

    const { formState, onInputChange, onResetForm } = useForm(initialValues)

    const {
        idvalue,
        contexto,
        partesInteresadas,
        process,
        type,
        description,
        probabilidad,
        ocurrencia,
        perdidaDeClientesPotencial,
        dañoPotencial,
        conflictosGremialesPosibles,
        incumplimientoLegal,
        perdidaDeImagen,
        costoCorreccion,
    } = formState

    useEffect(() => {
        dispatch(getContextAnalysisThunks())
        dispatch(getInterestedPartiesThunks())
        dispatch(getProcessDefinitionThunks())
    }, [])


    const onSubmit = async () => {


        if (idvalue !== undefined) {
            dispatch(patchRiskOrOpportunitiesThunks(
                {
                    id: idvalue,
                    contexto,
                    partesInteresadas,
                    process,
                    type,
                    description,
                    probabilidad,
                    ocurrencia,
                    perdidaDeClientesPotencial,
                    dañoPotencial,
                    conflictosGremialesPosibles,
                    incumplimientoLegal,
                    perdidaDeImagen,
                    costoCorreccion,
                }
            ))
        } else {
            dispatch(postRiskOrOpportunitiesThunks({
                contexto,
                partesInteresadas,
                process,
                type,
                description,
                probabilidad,
                ocurrencia,
                perdidaDeClientesPotencial,
                dañoPotencial,
                conflictosGremialesPosibles,
                incumplimientoLegal,
                perdidaDeImagen,
                costoCorreccion,
            }))
        }

        onResetForm()
    }

    return (
        <Container
            sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between"
            }}
        >
            {/* SECCIÓN 1: INFORMACIÓN GENERAL */}
            <Box
                sx={{
                    width: "100%",
                    mb: 3,
                    borderBottom: "1px solid #e0e0e0",
                    pb: 1
                }}
            >
                <Typography variant="h6" gutterBottom sx={{ color: "rgb(110, 40, 100)", fontWeight: "500" }}>
                    Información General
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
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
                                    label="Relación con el contexto"
                                    fullWidth
                                    required
                                />
                            )}
                            value={analysis.find((item) => item.id === contexto) || null}
                            onChange={(_, newValue) =>
                                onInputChange({
                                    target: {
                                        name: "contexto",
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

                    {interestedParties &&
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
                            value={interestedParties.find((item) => item.id === partesInteresadas) || null}
                            onChange={(_, newValue) =>
                                onInputChange({
                                    target: {
                                        name: "partesInteresadas",
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

                    {processAlcanzados &&
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
                            value={processAlcanzados.find((item) => item.id === process) || null}
                            onChange={(_, newValue) =>
                                onInputChange({
                                    target: {
                                        name: "process",
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
                            value={type}
                            onChange={onInputChange}
                        >
                            <MenuItem value="riesgo">Riesgo</MenuItem>
                            <MenuItem value="oportunidad">Oportunidad</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        id="introduction-field"
                        label="Descripción"
                        variant="outlined"
                        name="description"
                        value={description}
                        onChange={onInputChange}
                        multiline
                        sx={{
                            margin: "5px",
                            width: "100%"
                        }}
                    />
                </Box>
            </Box>

            {/* SECCIÓN 2: EVALUACIÓN DE PROBABILIDAD */}
            <Box
                sx={{
                    width: "100%",
                    mb: 3,
                    borderBottom: "1px solid #e0e0e0",
                    pb: 1
                }}
            >
                <Typography variant="h6" gutterBottom sx={{ color: "rgb(110, 40, 100)", fontWeight: "500" }}>
                    Evaluación de Probabilidad
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start" }}>
                    <FormControl
                        sx={{
                            margin: "5px",
                            minWidth: "300px"
                        }}
                    >
                        <InputLabel>Probabilidad</InputLabel>
                        <Select
                            name="probabilidad"
                            label="probabilidad"
                            value={probabilidad}
                            onChange={onInputChange}
                        >
                            {probabilidadCriterios && probabilidadCriterios.map((prob) => (
                                <MenuItem key={prob.valor} value={prob.valor}>{prob.item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl
                        sx={{
                            margin: "5px",
                            minWidth: "300px"
                        }}
                    >
                        <InputLabel>¿Cuántas veces ocurrió?</InputLabel>
                        <Select
                            name="ocurrencia"
                            label="ocurrencia"
                            value={ocurrencia}
                            onChange={onInputChange}
                        >
                            {ocurrenciasCriterios && ocurrenciasCriterios.map((ocurr) => (
                                <MenuItem key={ocurr.valor} value={ocurr.valor}>{ocurr.item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            </Box>

            {/* SECCIÓN 3: EVALUACIÓN DE IMPACTO */}
            <Box
                sx={{
                    width: "100%",
                    mb: 3
                }}
            >
                <Typography variant="h6" gutterBottom sx={{ color: "rgb(110, 40, 100)", fontWeight: "500" }}>
                    Evaluación de Impacto
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                    <FormControl
                        sx={{
                            margin: "5px",
                            minWidth: "300px"
                        }}
                    >
                        <InputLabel>Pérdida potencial de clientes</InputLabel>
                        <Select
                            name="perdidaDeClientesPotencial"
                            label="perdidaDeClientesPotencial"
                            value={perdidaDeClientesPotencial}
                            onChange={onInputChange}
                        >
                            {perdidaPotencialClientesCriterio && perdidaPotencialClientesCriterio.map((criterio) => (
                                <MenuItem key={criterio.valor} value={criterio.valor}>{criterio.item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl
                        sx={{
                            margin: "5px",
                            minWidth: "300px"
                        }}
                    >
                        <InputLabel>Daños Potenciales Personas/ambiente</InputLabel>
                        <Select
                            name="dañoPotencial"
                            label="dañoPotencial"
                            value={dañoPotencial}
                            onChange={onInputChange}
                        >
                            {dañoPotencialPersonasMedAmbCriterio && dañoPotencialPersonasMedAmbCriterio.map((criterio) => (
                                <MenuItem key={criterio.valor} value={criterio.valor}>{criterio.item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl
                        sx={{
                            margin: "5px",
                            minWidth: "300px"
                        }}
                    >
                        <InputLabel>Conflictos gremiales</InputLabel>
                        <Select
                            name="conflictosGremialesPosibles"
                            label="conflictosGremialesPosibles"
                            value={conflictosGremialesPosibles}
                            onChange={onInputChange}
                        >
                            {conflictosGremialesCriterio && conflictosGremialesCriterio.map((criterio) => (
                                <MenuItem key={criterio.valor} value={criterio.valor}>{criterio.item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl
                        sx={{
                            margin: "5px",
                            minWidth: "300px"
                        }}
                    >
                        <InputLabel>Incumplimiento legal</InputLabel>
                        <Select
                            name="incumplimientoLegal"
                            label="incumplimientoLegal"
                            value={incumplimientoLegal}
                            onChange={onInputChange}
                        >
                            {incumplimientoLetalCriterio && incumplimientoLetalCriterio.map((criterio) => (
                                <MenuItem key={criterio.valor} value={criterio.valor}>{criterio.item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl
                        sx={{
                            margin: "5px",
                            minWidth: "300px"
                        }}
                    >
                        <InputLabel>Pérdida de imagen</InputLabel>
                        <Select
                            name="perdidaDeImagen"
                            label="perdidaDeImagen"
                            value={perdidaDeImagen}
                            onChange={onInputChange}
                        >
                            {perdidaImagenCriterio && perdidaImagenCriterio.map((criterio) => (
                                <MenuItem key={criterio.valor} value={criterio.valor}>{criterio.item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl
                        sx={{
                            margin: "5px",
                            minWidth: "300px"
                        }}
                    >
                        <InputLabel>Costo de corrección</InputLabel>
                        <Select
                            name="costoCorreccion"
                            label="costoCorreccion"
                            value={costoCorreccion}
                            onChange={onInputChange}
                        >
                            {costoCorreccionCriterio && costoCorreccionCriterio.map((criterio) => (
                                <MenuItem key={criterio.valor} value={criterio.valor}>{criterio.item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            </Box>

            {/* BOTÓN DE ENVÍO */}
            <Box sx={{ width: "100%", mt: 2 }}>
                <Button
                    variant="contained"
                    onClick={onSubmit}
                    fullWidth
                    sx={{
                        py: 1,
                        fontWeight: "bold"
                    }}
                >
                    Agregar {type ? type : 'Riesgo o Oportunidad'}
                </Button>
            </Box>
        </Container>
    )
}
