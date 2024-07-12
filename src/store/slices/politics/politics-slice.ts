import { createSlice } from '@reduxjs/toolkit'



export const politicSlice = createSlice({
  name: 'politics',
  initialState: {
    id: "",
    introduction: "Defina una introduccion para las politicas de su empresa",
    politics:[]
  
  },
  reducers: {
    setPolitics: (state, action) => {
      state.id = action.payload.id
      state.politics = action.payload.politics
      state.introduction = action.payload.introduction
    },
    updatePolitics: (state, action) => {
      state.introduction = action.payload.newIntroduction
      state.politics = action.payload.newPoliticts
    }
  },
})


export const { setPolitics, updatePolitics} = politicSlice.actions
