import { createSlice } from '@reduxjs/toolkit'



export const politicSlice = createSlice({
  name: 'politics',
  initialState: {
    id: "",
    introduction: "Defina una introduccion para las politicas de su empresa",
    politics:[String]
  
  },
  reducers: {
    setPolitics: (state) => {
      console.log(state)
    },
  },
})


export const { setPolitics, } = politicSlice.actions
