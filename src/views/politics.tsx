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
import { useEffect, useState } from "react";
import { getPolitics } from "../api/politics/politics";

interface PoliticsProps {
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
}


export const Politics: React.FC<PoliticsProps> = ({ setEditing }) => {
  const [politica, setPolitica] = useState<any>()
  const [intro, setIntro] = useState<any>()
  
  useEffect(() => {
    const fetchPolitics = async () => {
      try {

          const {introduction, politics} = await getPolitics();
          setPolitica(politics)
          setIntro(introduction)

      } catch (error) {

          console.error('Error al obtener los datos:', error);
      }
  }

  fetchPolitics()
  
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
              onClick={() => setEditing(true)}
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
              intro
            }
            </Typography> 
          </Box>
          <List>
            {politica && politica.map((text) => (
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
