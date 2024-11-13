import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InterestedPart {
  id: string;
  name: string;
  requirement: string;
  legalRequirement:boolean,
  intExt:string
}

interface InterestedPartiesState {
  interestedParties: InterestedPart[];
}

const initialState: InterestedPartiesState = {
  interestedParties: [],
};

export const interestedPartiesSlice = createSlice({
  name: 'interestedParties',
  initialState,
  reducers: {
    setInterestedParties: (state, action: PayloadAction<InterestedPart[]>) => {
      state.interestedParties = action.payload;
    },
    updateInterestedParties: (state, action: PayloadAction<InterestedPart>) => {
      const index = state.interestedParties.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.interestedParties[index] = action.payload;
      } else {
        state.interestedParties.push(action.payload);
      }
    },
    deleteInterestedParties: (state, action: PayloadAction<string>) => {
      state.interestedParties = state.interestedParties.filter(item => item.id !== action.payload);
    },
  },
});

export const { setInterestedParties, updateInterestedParties, deleteInterestedParties } = interestedPartiesSlice.actions;

export default interestedPartiesSlice.reducer;
