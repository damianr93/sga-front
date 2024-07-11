import { Box } from "@mui/system";
import { Politics } from "../views/politics";
import { Toolbar } from "@mui/material";
import { Objective } from "../views/objective";
import { useState } from "react";
import { EditForm } from "../components/editForm";

export const HomeLayout = () => {
  const [editing, setEditing] = useState(false);
  return (
    <>
      {editing && <EditForm setEditing={setEditing} />}
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
