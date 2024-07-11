import { Close } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { useEffect } from "react";
import { postPoliticsThunks } from "../store/slices/politics/thunks";

interface EditFormProps {
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

interface PoliticsState {
  politics: string[];
  introduction: string;
}

interface RootState {
  politics: PoliticsState;
}


export const EditForm: React.FC<EditFormProps> = ({ setEditing }) => {

  const { politics, introduction } = useSelector((state: RootState) => state.politics)

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {

    dispatch(postPoliticsThunks());

  }, [])

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
            focused={{value={introduction}}}
            multiline
            sx={{
              marginTop: "15px",
              width: "100%",
              minHeight: "150px"
            }}
          />
          {politics && politics.map((text) => (
            <TextField
              id="outlined-textarea"
              label="Politica de la empresa"
              variant="outlined"
              placeholder={text}
              multiline
              sx={{ 
                marginTop:"15px",
                width: "100%",
              }}
            />
          ))}
          <Button
           variant="contained"
           sx={{
            margin:"10px"
           }}
           >
            Submit
           </Button>
        </form>
      </Box>
    </Box>
  );
};
