import { Box } from "@mui/system";
import { Politics } from "../views/politics";
import { Toolbar } from "@mui/material";
import { Objective } from "../views/objective";
import BasicModal from "../../components/modal-ui";

export const HomeLayout = () => {
  
  return (
    <>
      <Box
        component="main"
        sx={{
          display: "flex",
          alignItems: "center",
          flexGrow: 1,
          flexDirection: "column",
          p: 5,
        }}
        className="animate__fadeIn  animate__animated"
      >

        <Toolbar />
        <Politics />
        <Objective />
        <BasicModal/>
      </Box>
    </>

  );
};