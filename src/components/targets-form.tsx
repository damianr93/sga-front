import { Add, Close, Delete } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { AppDispatch } from "../store/store";
import { postPoliticsThunks } from "../store/slices/politics/thunks";


interface EditFormProps {
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

interface PoliticsState {
  id: string;
  politics: string[];
  introduction: string;
}

interface RootState {
  politics: PoliticsState;
}

export const TargetsForm: React.FC<EditFormProps> = ({ setEditing }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { id, politics, introduction } = useSelector((state: RootState) => state.politics);

  const [introductionValue, setIntroductionValue] = useState(introduction);
  const [politicsValues, setPoliticsValues] = useState<string[]>(politics);

  const handleIntroductionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIntroductionValue(event.target.value);
  };

  const handlePoliticsChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPoliticsValues = [...politicsValues];
    newPoliticsValues[index] = event.target.value;
    setPoliticsValues(newPoliticsValues);
  };

  const addPolitics = () => {
    const newPoliticsValues = [...politicsValues]
    newPoliticsValues.push(`nueva politica ${newPoliticsValues.length + 1}`)
    setPoliticsValues(newPoliticsValues)
  }

  const deletePolitic = (index:number) => {
    const newPoliticsValues = [...politicsValues]
    newPoliticsValues.splice(index, 1)
    setPoliticsValues(newPoliticsValues)
  }

  const onSubmit = () => {
    dispatch(postPoliticsThunks(id, introductionValue, politicsValues))
  }

  return (

      <Box
        sx={{
          backgroundColor: "white",
          padding: "25px",
          borderRadius: "5px",
          width:"900px",
          maxHeight: "75vh",
          overflowY: "scroll"
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
            value={introductionValue}
            onChange={handleIntroductionChange}
            multiline
            sx={{
              marginTop: "5px",
              width: "100%",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column"
            }}
          >
            {politicsValues.map((text, index) => (
              <Box key={index}
              sx={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center"

              }}
              >
                <TextField
                  id="outlined-textarea"
                  label={`Politica ${index + 1}`}
                  variant="outlined"
                  value={text}
                  onChange={handlePoliticsChange(index)}
                  multiline
                  sx={{
                    marginTop: "15px",
                    width: "80%",
                  }}
                />
                <Button
                onClick={() => deletePolitic(index)}
                >
                  <Delete />
                </Button>
              </Box>

            ))}
            <Button
              onClick={addPolitics}
            >
              <Add />
            </Button>
          </Box>
          <Button
            variant="contained"
            onClick={onSubmit}
            sx={{
              margin: "10px"
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
  );
};
