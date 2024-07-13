import { Box } from "@mui/system";
import { Politics } from "../views/politics";
import { Toolbar } from "@mui/material";
import { Objective } from "../views/objective";
import { useState } from "react";
import { FormScreen } from "./form-screen";

export const HomeLayout = () => {
  const [editing, setEditing] = useState(false);
  return (
    <>
      {editing && <FormScreen setEditing={setEditing} />}
      <Box
        component="main"
        sx={{
          display: "flex",
          alignItems: "center",
          flexGrow: 1,
          flexDirection: "column",
          p: 5,
        }}
      >

        <Toolbar />
        <Politics setEditing={setEditing} />
        <Objective setEditing={setEditing} />
      </Box>
    </>

  );
};