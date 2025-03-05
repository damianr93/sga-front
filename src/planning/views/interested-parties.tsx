import { Box, Fab } from "@mui/material";
import PartiesBasicTable from "../components/interesed-parties-table";
import { setEditForms } from "../../store/slices/edit-forms/edit-slice";
import { Add } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import { useEffect } from "react";
import { getInterestedPartiesThunks } from "../../store/slices/interested-parties/thunks";
import { getUserLogged } from "../../utils/storage";

export const InterestedParties = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { interestedParties } = useSelector(
    (state: any) => state.interestedParties
  );
  const items = getUserLogged();
  if (!items) {
    return null;
  }

  const { role } = JSON.parse(items);

  useEffect(() => {
    dispatch(getInterestedPartiesThunks());
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        minHeight: "80vh",
      }}
    >
      {role === "admin" && (
        <Fab
          onClick={() => dispatch(setEditForms({ from: "interested-parties" }))}
          color="primary"
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
          }}
        >
          <Add />
        </Fab>
      )}
      <PartiesBasicTable rows={interestedParties} />
    </Box>
  );
};
