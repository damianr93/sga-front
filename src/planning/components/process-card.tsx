import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { setEditForms } from "../../store/slices/edit-forms/edit-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { deleteProcessDefinitionThunks } from "../../store/slices/process-definition/thunks";
import { Delete, Edit } from "@mui/icons-material";

export default function ProcessDefinitionCard({
  id,
  process,
  area,
  description,
}: {
  id: string;
  process: string;
  area: string;
  description: string;
}) {
  const dispatch = useDispatch<AppDispatch>();
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
        <Typography variant="body2">
          {description ? description : "description"}
          <br />
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
        }}
      >
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
