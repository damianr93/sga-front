import { Box } from "@mui/material";
import PartiesBasicTable from "../components/interesed-parties-table";
import { partes } from "../recursos/partes";

const parts = partes
export const InterestedParties = () => {

  return (
    <Box
    sx={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        width: "100%",
        minHeight:"80vh"
    }}
    >
        <PartiesBasicTable rows={parts}/>
    </Box>
  );
};
