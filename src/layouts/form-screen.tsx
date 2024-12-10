import { Box } from "@mui/material";
import { PoliticsForm } from "../components/politics-form";
import { TargetsForm } from "../components/targets-form";
import { useSelector } from "react-redux";
import { ContextAnalysisForm } from "../components/context-analysis-form";
import { ContextAnalysisItemsForm } from "../components/context-analysis-items-form";
import { InterestedPartiesForm } from "../components/interested-parties-form";
import { ProcessDefinitionsForm } from "../components/process-definitions-form";

interface EditState {
  from: string;
}

interface RootState {
  editForms: EditState;
}

export const FormScreen = () => {
  const from = useSelector((state: RootState) => state.editForms.from);

  const formSelected = () => {
    switch (from) {
      case "targets":
        return <TargetsForm />;
      case "politics":
        return <PoliticsForm />;
      case "foda-add":
        return <ContextAnalysisForm />;
      case "foda-edit":
        return <ContextAnalysisItemsForm />;
      case "interested-parties":
        return <InterestedPartiesForm />;
      case "process-definitions":
        return <ProcessDefinitionsForm />;
      default:
        break;
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.774)",
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
      }}
    >
      {formSelected()}
    </Box>
  );
};
