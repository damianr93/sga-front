import { Box, Button, Divider, Fab, FormControl, Grid, TextField, Toolbar, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { Add, Edit, Delete, Save } from "@mui/icons-material";
import { Action, Column } from './../components/customTable';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { setEditForms } from "../../store/slices/edit-forms/edit-slice";
import { createCriterioThunk, getCriteriosThunks, updateCriterioThunk } from "../../store/slices/criterios/thunks";
import CustomTableRiesgosOportunidades from "../components/customTableRiesgoOp";
import { EnviromentalAspectsForm } from "../components/enviromental-aspects-form";
import { deleteEnvironmentalAspectsThunks, getEnvironmentalAspectsThunks } from "../../store/slices/environmental-aspects/thunks";

const columns: Column[] = [
  { field: "condicion", headerName: "Condición", align: "center" },
  { field: "element", headerName: "Elemento", align: "center" },
  { field: "description", headerName: "Descripción del Riesgo Asociado", align: "center" },
  { field: "context.description", headerName: "Relacion con el contexto", align: "left" },
  // { field: "partesInteresadas.name", headerName: "Parte interesada", align: "center" },
  // { field: "partesInteresadas.requirement", headerName: "Requisito parte interesada", align: "left" },
  { field: "process.name", headerName: "Proceso", align: "left" },
  { field: "affectedResource", headerName: "Recurso afectado", align: "center" },
  { field: "operatingCondition", headerName: "Condicion de operación", align: "center" }
];

const actions: Action[] = [
  { name: "editar", icon: <Edit />, color: "primary", tooltip: "Editar R/O" },
  { name: "eliminar", icon: <Delete />, color: "secondary", tooltip: "Eliminar" }
];


export const AspectosAmbientales = () => {
  const [addingRecord, setAddingRecord] = useState(false)

  const dispatch = useDispatch<AppDispatch>()

  const { environmentalAspects } = useSelector((state:RootState) => state.environmentalAspects)
  const { criterios } = useSelector((state: RootState) => state.criterios)

  const criterioUmbral = criterios.find((criterio) => criterio.type === "umbral-riesgo")

  const [umbralValueState, setUmbralValueState] = useState(criterioUmbral ? criterioUmbral.valor : 0)

  useEffect(() => {
    dispatch(getEnvironmentalAspectsThunks())
    dispatch(getCriteriosThunks())
  }, [])

  const handleActionClick = (action: Action, row: any) => {
    if (action.name === "editar") {
      dispatch(setEditForms({ id: row.id, from: '' }))
    } else if (action.name === "eliminar") {
      console.log(row.id)
      dispatch(deleteEnvironmentalAspectsThunks(row.id))
    }
  };

  const onSubmitCriterio = () => {
    if (criterioUmbral !== undefined && criterioUmbral !== null && umbralValueState) {
      dispatch(updateCriterioThunk({
        _id: criterioUmbral._id,
        type: criterioUmbral.type,
        valor: +umbralValueState,

      }))
    } else if (umbralValueState) {
      dispatch(createCriterioThunk({
        type: 'umbral-riesgo',
        valor: +umbralValueState
      }))
    }
  }

  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: "100%",
        padding: 2
      }}>
      <Box
        sx={{
          position: 'absolute',
          right: '1%',
          top: '0px',
          margin: '1px',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          borderRadius: '15px',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            marginBottom: 3,
            color: "#555",
            fontSize: { xs: "0,5rem", sm: "1rem" },
            margin: "10px auto",
            lineHeight: 1.6,
          }}
        >
          {criterioUmbral ? `Umbral actual ${criterioUmbral.valor}` : 'Defina el umbral'}
        </Typography>
        <FormControl>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >


            <TextField
              id="introduction-field"
              type="number"
              label="umbral"
              variant="outlined"
              name="umbralValueState"
              value={umbralValueState}
              onChange={(event) => setUmbralValueState(+event.target.value)}
              inputProps={{
                min: 0,
                step: 1,
                max: 10
              }}
            />

            <Button onClick={onSubmitCriterio}>
              <Save />
            </Button>


          </Box>
        </FormControl>


      </Box>
      {/* Título estilizado */}
      <Grid item xs={12}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: 2,
            color: "rgb(110, 40, 100)",
            textAlign: "center",
            fontSize: { xs: "1.8rem", sm: "2.2rem" },
          }}
        >
          Aspectos Ambientales
        </Typography>
      </Grid>

      {/* Descripción estilizada */}
      <Grid item xs={12}>
        <Typography
          variant="body1"
          sx={{
            marginBottom: 3,
            color: "#555",
            fontSize: { xs: "1rem", sm: "1.2rem" },
            margin: "10px auto",
            lineHeight: 1.6,
          }}
        >
          En esta sección, puede analizar los Aspextos Ambientales, definiendo el umbral máximo a partir del cual se implementarán acciones correctivas.
        </Typography>
      </Grid>
      <Grid
        sx={{
          width: '100%',
          position: 'relative',
        }}
      >
        <Fab
          onClick={() => setAddingRecord(!addingRecord)}
          color="primary"
          sx={{
            position: 'absolute',
            top: '1px',
            right: '10px',
            backgroundColor: 'rgba(110, 40, 99, 0.17)'
          }}
        >
          {
            addingRecord ? '-' : <Add />
          }

        </Fab>
        {
          addingRecord &&
          <><EnviromentalAspectsForm /><Divider /><Toolbar /></>
        }
        <CustomTableRiesgosOportunidades
          columns={columns}
          data={environmentalAspects}
          actions={actions}
          onActionClick={handleActionClick}
          criterioUmbral={criterioUmbral ? criterioUmbral?.valor : 10}
          pagination={{
            rowsPerPage: 7,
          }}
        />
      </Grid>
    </Grid>
  )
}
