import { Autocomplete, Box, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import { getContextAnalysisThunks } from "../../store/slices/context-analysis/thunks";
import { getInterestedPartiesThunks } from "../../store/slices/interested-parties/thunks";
import { getProcessDefinitionThunks } from "../../store/slices/process-definition/thunks";
import { useForm } from "../../hooks/useForm";
import { patchEnvironmentalAspectsThunks, postEnvironmentalAspectsThunks } from "../../store/slices/environmental-aspects/thunks";
import { alcance, cumplimiento, exigencia, frecuencia, gestionExigenciaParteInteresada, requisitoLegal, severidad } from "../../utils/evaluacionAspectosAmbientales";

export const EnviromentalAspectsForm = () => {
    let initialValues = {
        idvalue: '',
        process: '',
        condicion: '',
        context: '',
        affectedResource: '',
        element: '',
        description: '',
        operatingCondition: '',
        legalRequeriment: 0,
        managementLegalRequeriment: 0,
        legalRequirementNumberOrId: '',
        legalRequirementDescrption: '',
        interestedPartiesIds: [''],
        interestedPartiesValue: 0,
        managementRequerimentPart: 0,
        impactFrequency: 0,
        severityImpact: 0,
        extentImpact: 0,
        significance: 0,
    }

    const dispatch = useDispatch<AppDispatch>()
    const { analysis } = useSelector((state: RootState) => state.analysisContext)
    const { interestedParties } = useSelector((state: RootState) => state.interestedParties)
    const { processDefinitions } = useSelector((state: RootState) => state.processDefinitions)
    const { id } = useSelector((state: RootState) => state.editForms)

    if (id !== undefined && id.length > 0) {
        const { environmentalAspects } = useSelector((state: RootState) => state.environmentalAspects)

        const environmentalAspectsToEdit = environmentalAspects.find((environmentalAspect) => environmentalAspect.id === id)

        if (environmentalAspectsToEdit) {
            initialValues = {
                idvalue: environmentalAspectsToEdit.id!,
                process: environmentalAspectsToEdit.process,
                condicion: environmentalAspectsToEdit.condicion,
                context: environmentalAspectsToEdit.context,
                affectedResource: environmentalAspectsToEdit.affectedResource,
                element: environmentalAspectsToEdit.element,
                description: environmentalAspectsToEdit.description,
                operatingCondition: environmentalAspectsToEdit.operatingCondition,
                legalRequeriment: environmentalAspectsToEdit.legalRequeriment,
                managementLegalRequeriment: environmentalAspectsToEdit.managementLegalRequeriment,
                legalRequirementNumberOrId: environmentalAspectsToEdit.legalRequirementNumberOrId,
                legalRequirementDescrption: environmentalAspectsToEdit.legalRequirementDescrption,
                interestedPartiesIds: environmentalAspectsToEdit.interestedParties,
                interestedPartiesValue: environmentalAspectsToEdit.interestedPartiesValue,
                managementRequerimentPart: environmentalAspectsToEdit.managementRequerimentPart,
                impactFrequency: environmentalAspectsToEdit.impactFrequency,
                severityImpact: environmentalAspectsToEdit.severityImpact,
                extentImpact: environmentalAspectsToEdit.extentImpact,
                significance: environmentalAspectsToEdit.significance,
            }
        }

    }


    const processAlcanzados = processDefinitions.filter((process) => process.alcanzado === true)

    const { formState, onInputChange, onResetForm } = useForm(initialValues)

    const {
        idvalue,
        process,
        condicion,
        context,
        affectedResource,
        element,
        description,
        operatingCondition,
        legalRequeriment,
        managementLegalRequeriment,
        legalRequirementNumberOrId,
        legalRequirementDescrption,
        interestedPartiesIds,
        interestedPartiesValue,
        managementRequerimentPart,
        impactFrequency,
        severityImpact,
        extentImpact,
        significance,
    } = formState

    useEffect(() => {
        dispatch(getContextAnalysisThunks())
        dispatch(getInterestedPartiesThunks())
        dispatch(getProcessDefinitionThunks())
    }, [])


    const onSubmit = async () => {


        if (idvalue !== undefined && idvalue.length > 0) {
            dispatch(patchEnvironmentalAspectsThunks(
                {
                    id: idvalue,
                    process,
                    condicion,
                    context,
                    affectedResource,
                    element,
                    description,
                    operatingCondition,
                    legalRequeriment,
                    managementLegalRequeriment,
                    legalRequirementNumberOrId,
                    legalRequirementDescrption,
                    interestedParties: interestedPartiesIds,
                    interestedPartiesValue,
                    managementRequerimentPart,
                    impactFrequency,
                    severityImpact,
                    extentImpact,
                    significance,
                }
            ))
        } else {
            dispatch(postEnvironmentalAspectsThunks({
                process,
                condicion,
                context,
                affectedResource,
                element,
                description,
                operatingCondition,
                legalRequeriment,
                managementLegalRequeriment,
                legalRequirementNumberOrId,
                legalRequirementDescrption,
                interestedParties: interestedPartiesIds,
                interestedPartiesValue,
                managementRequerimentPart,
                impactFrequency,
                severityImpact,
                extentImpact,
                significance,
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
                }}
            >
                <Typography variant="h6" gutterBottom sx={{ color: "rgb(110, 40, 100)", fontWeight: "500" }}>
                    Definicion del Aspecto ambiental
                </Typography>

                <Box sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                }}>
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
                            value={analysis.find((item) => item.id === context) || null}
                            onChange={(_, newValue) =>
                                onInputChange({
                                    target: {
                                        name: "context",
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

                    {interestedParties && (
                        <>
                            <Autocomplete
                                sx={{
                                    minWidth: "300px",
                                    margin: "5px"
                                }}
                                multiple
                                options={interestedParties}
                                getOptionLabel={(option) => option?.name || ''}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Partes interesadas"
                                        fullWidth
                                        required
                                    />
                                )}
                                value={interestedPartiesIds.map(id =>
                                    interestedParties.find(item => item.id === id) || null).filter(Boolean)}
                                onChange={(_, newValues) =>
                                    onInputChange({
                                        target: {
                                            name: "interestedPartiesIds",
                                            value: newValues.map(item => item?.id)
                                        }
                                    })
                                }
                                isOptionEqualToValue={(option, value) => option?.id === value?.id}
                                renderOption={(props, option) => {
                                    if (!option) return null;
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
                        </>
                    )}

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
                        <InputLabel>Condición</InputLabel>
                        <Select
                            name="condicion"
                            label="Tipo"
                            value={condicion}
                            onChange={onInputChange}
                        >
                            <MenuItem value="Emision">Emision</MenuItem>
                            <MenuItem value="Derrame">Derrame</MenuItem>
                            <MenuItem value="Residuo">Residuo</MenuItem>
                            <MenuItem value="Vertido">Vertido</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl
                        sx={{
                            margin: "5px",
                            width: "150px"
                        }}
                    >
                        <InputLabel>Recurso Afectado</InputLabel>
                        <Select
                            name="affectedResource"
                            label="Tipo"
                            value={affectedResource}
                            onChange={onInputChange}
                        >
                            <MenuItem value="Agua">Agua</MenuItem>
                            <MenuItem value="Aire">Aire</MenuItem>
                            <MenuItem value="Suelo">Suelo</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl
                        sx={{
                            margin: "5px",
                            minWidth: "300px"
                        }}
                    >
                        <InputLabel>Condicion de operacion</InputLabel>
                        <Select
                            name="operatingCondition"
                            label="Condición"
                            value={operatingCondition}
                            onChange={onInputChange}
                        >
                            <MenuItem value="Normal">Normal</MenuItem>
                            <MenuItem value="Anormal">Anormal</MenuItem>
                            <MenuItem value="Emergencia">Emergencia</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        id="introduction-field"
                        label="Elemento"
                        variant="outlined"
                        name="element"
                        value={element}
                        onChange={onInputChange}
                        multiline
                        sx={{
                            margin: "5px",
                            width: "100%"
                        }}
                    />

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

            {/* REQUISITO LEGAL */}

            <Box
                sx={{
                    width: "100%",
                    mb: 3,
                }}
            >
                <Typography variant="h6" gutterBottom sx={{ color: "rgb(110, 40, 100)", fontWeight: "500" }}>
                    Requisito legal
                </Typography>

                <Box sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between"
                }}>


                    <FormControl
                        sx={{
                            margin: "5px",
                            minWidth: "300px"
                        }}
                    >
                        <InputLabel>Requisito legal</InputLabel>
                        <Select
                            name="legalRequeriment"
                            label="Existencia"
                            value={legalRequeriment}
                            onChange={onInputChange}
                        >
                            {requisitoLegal && requisitoLegal.map((prob) => (
                                <MenuItem key={prob.value} value={prob.value}>{prob.item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl
                        sx={{
                            margin: "5px",
                            minWidth: "300px"
                        }}
                    >
                        <InputLabel>¿Se gestiona/cumple la norma?</InputLabel>
                        <Select
                            name="managementLegalRequeriment"
                            label="Cumplimiento"
                            value={managementLegalRequeriment}
                            onChange={onInputChange}
                        >
                            {cumplimiento && cumplimiento.map((cump) => (
                                <MenuItem key={cump.value} value={cump.value}>{cump.item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <TextField
                        id="Nnorma-field"
                        label="N° Norma"
                        variant="outlined"
                        name="legalRequirementNumberOrId"
                        value={legalRequirementNumberOrId}
                        onChange={onInputChange}
                        multiline
                        sx={{
                            margin: "5px",
                            width: "100%"
                        }}
                    />

                    <TextField
                        id="legalRequisito-field"
                        label="Obligacion"
                        variant="outlined"
                        name="legalRequirementDescrption"
                        value={legalRequirementDescrption}
                        onChange={onInputChange}
                        multiline
                        sx={{
                            margin: "5px",
                            width: "100%"
                        }}
                    />

                </Box>

                {/* PARTE INTERESADA */}

                <Typography variant="h6" gutterBottom sx={{ color: "rgb(110, 40, 100)", fontWeight: "500" }}>
                    Exigencia de la parte interesada
                </Typography>

                <Box sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between"
                }}>

                    <FormControl
                        sx={{
                            margin: "5px",
                            minWidth: "300px"
                        }}
                    >
                        <InputLabel>¿Existe parte interesada?</InputLabel>
                        <Select
                            name="interestedPartiesValue"
                            label="Existencia de parte interesada"
                            value={interestedPartiesValue}
                            onChange={onInputChange}
                        >
                            {exigencia && exigencia.map((exig) => (
                                <MenuItem key={exig.value} value={exig.value}>{exig.item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl
                        sx={{
                            margin: "5px",
                            minWidth: "300px"
                        }}
                    >
                        <InputLabel>¿Se gestiona?</InputLabel>
                        <Select
                            name="managementRequerimentPart"
                            label="Existencia de parte interesada"
                            value={managementRequerimentPart}
                            onChange={onInputChange}
                        >
                            {gestionExigenciaParteInteresada && gestionExigenciaParteInteresada.map((gestion) => (
                                <MenuItem key={gestion.value} value={gestion.value}>{gestion.item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                </Box>

                {/* IMPACTO AMBIENTAL */}

                <Typography variant="h6" gutterBottom sx={{ color: "rgb(110, 40, 100)", fontWeight: "500" }}>
                    Impacto ambiental
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between"
                    }}>

                    <FormControl
                        sx={{
                            margin: "5px",
                            minWidth: "300px"
                        }}
                    >
                        <InputLabel>frecuencia</InputLabel>
                        <Select
                            name="impactFrequency"
                            label="Frecuencia de ocurrencia"
                            value={impactFrequency}
                            onChange={onInputChange}
                        >
                            {frecuencia && frecuencia.map((frec) => (
                                <MenuItem key={frec.value} value={frec.value}>{frec.item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl
                        sx={{
                            margin: "5px",
                            minWidth: "300px"
                        }}
                    >
                        <InputLabel>Severidad</InputLabel>
                        <Select
                            name="severityImpact"
                            label="Severidad"
                            value={severityImpact}
                            onChange={onInputChange}
                        >
                            {severidad && severidad.map((sev) => (
                                <MenuItem key={sev.value} value={sev.value}>{sev.item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl
                        sx={{
                            margin: "5px",
                            minWidth: "300px"
                        }}
                    >
                        <InputLabel>Alcance</InputLabel>
                        <Select
                            name="extentImpact"
                            label="Alcance del impacto"
                            value={extentImpact}
                            onChange={onInputChange}
                        >
                            {alcance && alcance.map((alc) => (
                                <MenuItem key={alc.value} value={alc.value}>{alc.item}</MenuItem>
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
                    Agregar Aspecto Ambiental
                </Button>
            </Box>
        </Container >
    )
}
