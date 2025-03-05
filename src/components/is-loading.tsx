import { Box, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const IsLoading = () => {
    const { state } = useSelector((state: RootState) => state.isLoading);
    if (!state) return false;

  return (
    state && 
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", 
        zIndex: 1300, 
      }}
      className="animate__fadeIn  animate__animated"
    >
      <CircularProgress color="primary" />
    </Box>
  );
};
