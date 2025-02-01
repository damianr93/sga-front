import Modal from "react-modal";
import { TargetsForm } from "./targets-form";
import { PoliticsForm } from "./politics-form";
import { ContextAnalysisForm } from "./context-analysis-form";
import { ContextAnalysisItemsForm } from "./context-analysis-items-form";
import { InterestedPartiesForm } from "./interested-parties-form";
import { ProcessDefinitionsForm } from "./process-definitions-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setEditForms } from "../store/slices/edit-forms/edit-slice";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const FormModal = () => {
  const {state} = useSelector((state:RootState) => state.editForms)
  const dispatch = useDispatch();

  const onCloseModal = () => {
    dispatch(setEditForms({ from: "" }))
  };

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
    <Modal isOpen={state} onRequestClose={onCloseModal} style={customStyles}>
      {formSelected()}  
    </Modal>
  );
};
