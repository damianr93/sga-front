import { createSlice } from "@reduxjs/toolkit";

interface Process {
  id: string;
  area: string;
  name: string;
  type: string;
  description: string;
}

interface ProcessDefinitionsState {
  processDefinitions: Process[];
}

const initialState: ProcessDefinitionsState = {
  processDefinitions: [],
};

export const processDefinitionsSlice = createSlice({
  name: "process Definitions",
  initialState,
  reducers: {
    setProcessDefinition: (state, action) => {
      state.processDefinitions = action.payload;
    },
    createProcessDefinition: (state, action) => {
      state.processDefinitions.push(action.payload);
    },
    updateProcessDefinition: (state, action) => {
      //!Hay que actualizar el arreglo
    },
    deleteProcessDefinition: (state, action) => {
      state.processDefinitions = state.processDefinitions.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  setProcessDefinition,
  createProcessDefinition,
  updateProcessDefinition,
  deleteProcessDefinition,
} = processDefinitionsSlice.actions;
export default processDefinitionsSlice.reducer;
