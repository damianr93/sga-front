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
      state.politics = action.payload.politics
      state.introduction = action.payload.introduction
    },
  },
})


export const { setPolitics, } = politicSlice.actions
