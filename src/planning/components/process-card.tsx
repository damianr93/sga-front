import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import SaveIcon from '@mui/icons-material/Save';
import Typography from "@mui/material/Typography";
import { setEditForms } from "../../store/slices/edit-forms/edit-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { deleteProcessDefinitionThunks, patchProcessDefinitionsThunks } from "../../store/slices/process-definition/thunks";
import { Delete, Edit } from "@mui/icons-material";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useEffect, useState } from "react";

export default function ProcessDefinitionCard({
  id,
  process,
  area,
  description,
  alcanzado,
}: {
  id: string;
  process: string;
  area: string;
  description: string;
  alcanzado: boolean
}) {
  const dispatch = useDispatch<AppDispatch>();

  const [estaAlcanzado, setEstaAlcanzado] = useState(alcanzado)
  const [isModified, setIsModified] = useState(false)

  useEffect(() => {
    setEstaAlcanzado(alcanzado)
  }, [alcanzado])


  const handleChangeStateAlcanzado = () => {
    setIsModified((prev) => !prev)
    setEstaAlcanzado((prev) => !prev);
  };

  const saveChangeStateAlcanzado = () => {
    setIsModified((prev) => !prev)
    dispatch(patchProcessDefinitionsThunks(id, { alcanzado: estaAlcanzado }))
  }

  return (
    <Card
      sx={{
        minWidth: 100,
        maxWidth: 300,
        margin: "10px",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {process ? process : "Proceso"}
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          Area: {area ? area : "area"}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            overflow: "auto",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            maxHeight: 100,
          }}
        >
          {description ? description : "description"}
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              name="alcanzado"
              checked={estaAlcanzado}
              onChange={handleChangeStateAlcanzado}
            />
          }
          label='alcanzado'
        />
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        {
          isModified &&
          <Button
            onClick={saveChangeStateAlcanzado}
          >
            <SaveIcon />
          </Button>
        }


        <Button
          onClick={() =>
            dispatch(
              setEditForms({
                from: "process-definitions",
                id: id,
              })
            )
          }
          className="editButton"
          sx={{
            opacity: 0.2,
            transition: "opacity 0.3s",
          }}
        >
          <Edit />
        </Button>
        <Button
          onClick={() => dispatch(deleteProcessDefinitionThunks(id))}
          sx={{
            opacity: 0.2,
            transition: "opacity 0.3s",
            "&:hover": {
              opacity: 1,
            },
          }}
        >
          <Delete />
        </Button>
      </CardActions>
    </Card>
  );
}
