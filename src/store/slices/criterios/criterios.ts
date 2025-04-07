import { createSlice } from "@reduxjs/toolkit";


export interface Criterio {
    _id?: string,
    type: string,
    valor: number
}

export interface Criterios {
    criterios: Criterio[]
}

const initialState: Criterios = {
    criterios: []
}


export const criterioSlice = createSlice({
    name: 'criterios',
    initialState,
    reducers: {
        setCriterios(state, action) {
            state.criterios = action.payload
        },
        addCriterio(state, action) {
            state.criterios.push(action.payload)
        },
        updateCriterio(state, action) {

            state.criterios = state.criterios.map((criterio) => {
                if (criterio._id === action.payload._id) {
                    return action.payload;
                }
                return criterio;
            });
        }
    }
})

export const {
    setCriterios,
    addCriterio,
    updateCriterio
} = criterioSlice.actions