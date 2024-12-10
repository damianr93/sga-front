import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Edit } from "@mui/icons-material";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPoliticsThunks } from "../../store/slices/politics/thunks";
import { AppDispatch } from "../../store/store";
import { setEditForms } from "../../store/slices/edit-forms/edit-slice";


interface PoliticsState {
  politics: string[];
  introduction: string;
}

interface RootState {
  editForms: any;
  politics: PoliticsState;
}

export const Politics = () => {

  const {politics, introduction} = useSelector((state:RootState) => state.politics)  
  
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {

    dispatch(getPoliticsThunks());
  
  }, [])
  

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.853)",
          borderRadius: "10px",
          width: "75%",
          margin: "5px",
        }}
      >
        <Grid item xs={12} sm={8} md={8}>
          <Typography
            variant="h1"
            sx={{
              fontSize: 60,
              textAlign: "center",
              "&:hover .editButton": {
                opacity: 1,
              },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Política de la empresa
            <Button
              onClick={() => dispatch(setEditForms({from:"politics"}))}
              className="editButton"
              sx={{
                opacity: 0.2,
                transition: "opacity 0.3s",
              }}
            >
              <Edit />
            </Button>
          </Typography>

          <Box mt={2} sx={{width:"100%"}}>
          <Typography
              variant="body1"
              sx={{ whiteSpace: "pre-wrap", fontWeight: "bold", width:"100%"}}
            >
            {
              introduction && introduction
            }
            </Typography> 
          </Box>
          <List>
            {politics && politics.map((text) => (
              <ListItem key={text}>
                <ListItemIcon>
                  <ArrowRightIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </>
  );
};
