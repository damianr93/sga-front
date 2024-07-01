import { Close } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";

interface EditFormProps {
    setEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EditForm:React.FC<EditFormProps> = ({setEditing}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.774)",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          padding: "5px",
          borderRadius: "5px",
        }}
      >
        <form>
          <h3>
            Puede editar su informacion
            <Button
              onClick={() => setEditing(false)}
              className="editButton"
              sx={{
                opacity: 0.2,
                transition: "opacity 0.3s",
              }}
            >
              <Close />
            </Button>
          </h3>
          <TextField
            id="outlined-textarea"
            label="Politica de la empresa"
            variant="outlined"
            multiline
            sx={{ marginTop: "15px", 
                width:"100%",
                minHeight:"300px"
            }}
          />
        </form>
      </Box>
    </Box>
  );
};
