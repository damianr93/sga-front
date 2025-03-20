import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setEditForms } from '../store/slices/edit-forms/edit-slice';
import { TargetsForm } from './targets-form';
import { PoliticsForm } from './politics-form';
import { ContextAnalysisForm } from './context-analysis-form';
import { ContextAnalysisItemsForm } from './context-analysis-items-form';
import { InterestedPartiesForm } from './interested-parties-form';
import { ProcessDefinitionsForm } from './process-definitions-form';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
    const {state} = useSelector((state:RootState) => state.editForms)
    const dispatch = useDispatch();
    
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
    <div>
      <Modal
        open={state}
        onClose={() => dispatch(setEditForms({ from: "" }))}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {formSelected()}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
