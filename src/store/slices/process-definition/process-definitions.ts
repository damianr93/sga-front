import { createSlice } from "@reduxjs/toolkit";

interface Process {
  id: string;
  area: string;
  name: string;
  type: string;
  description: string;
  alcanzado:boolean
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
      const index = state.processDefinitions.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.processDefinitions[index] = action.payload;
      
      }
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
