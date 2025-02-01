import { Box } from "@mui/system";
import { Politics } from "../views/politics";
import { Toolbar } from "@mui/material";
import { Objective } from "../views/objective";
import { FormScreen } from "../../layouts/form-screen";
import { useSelector } from "react-redux";
import { FormModal } from "../../components/modal";



interface EditState {
  state: boolean
}

interface RootState {
  editForms: EditState;
}

export const HomeLayout = () => {
  
  const state = useSelector((state:RootState) => state.editForms.state)

  return (
    <>
      {state && <FormScreen />}
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
        <FormModal/>
      </Box>
    </>

  );
};