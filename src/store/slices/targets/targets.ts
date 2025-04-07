import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Target {
  id: string;
  description: string;
}

interface TargetsState {
  targets: Target[];
}

const initialState: TargetsState = {
  targets: [],
};

export const targetsSlice = createSlice({
  name: 'targets',
  initialState,
  reducers: {
    setTargets: (state, action: PayloadAction<Target[]>) => {
        state.targets = action.payload;
    },
    addTarget: (state, action: PayloadAction<Target>) => {
      state.targets.push(action.payload);
    },
    removeTarget: (state, action: PayloadAction<string>) => {
      state.targets = state.targets.filter(target => target.id !== action.payload);
    },
    updateTarget: (state, action: PayloadAction<Target>) => {
      const { id, ...newTarget } = action.payload;
      const target = state.targets.find(target => target.id === id);
      if (target) {
        Object.assign(target, newTarget);
      }
    }
  }
});

export const { setTargets, addTarget, removeTarget, updateTarget } = targetsSlice.actions;
