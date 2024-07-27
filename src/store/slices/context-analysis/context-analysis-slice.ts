import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Analysis {
  id: string;
  type: string;
  description: string;
}

interface ContextAnalysisState {
  analysis: Analysis[];
}

const initialState: ContextAnalysisState = {
  analysis: [],
};

export const contextAnalysisSlice = createSlice({
  name: 'contextAnalysis',
  initialState,
  reducers: {
    setAnalisisContext: (state, action: PayloadAction<Analysis[]>) => {
      state.analysis = action.payload;
    },
    updateAnalisisContext: (state, action: PayloadAction<Analysis>) => {
      const index = state.analysis.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.analysis[index] = action.payload;
      } else {
        state.analysis.push(action.payload);
      }
    },
  },
});

export const { setAnalisisContext, updateAnalisisContext } = contextAnalysisSlice.actions;

export default contextAnalysisSlice.reducer;