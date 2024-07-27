import { createSlice } from '@reduxjs/toolkit'



export const politicSlice = createSlice({
  name: 'politics',
  initialState: {
    id: "",
    introduction: "Defina una introduccion para las politicas de su empresa",
    politics:[],
    targets:[],
  
  },
  reducers: {
    setPolitics: (state, action) => {
      state.id = action.payload.id
      state.politics = action.payload.politics
      state.introduction = action.payload.introduction
      state.targets = action.payload.targets
    },
    updatePolitics: (state, action) => {
      state.introduction = action.payload.newIntroduction
      state.politics = action.payload.newPoliticts
      state.targets = action.payload.targets
    }
  },
})


export const { setPolitics, updatePolitics} = politicSlice.actions
