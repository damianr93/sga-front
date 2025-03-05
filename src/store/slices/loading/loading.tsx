import { createSlice } from '@reduxjs/toolkit'



export const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        state: false,
    },
    reducers: {
        isLoading: (state) => {

            return {
                state: !state.state,
            }

        },
    },
})


export const { isLoading } = loadingSlice.actions