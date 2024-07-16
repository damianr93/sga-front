import { createSlice } from '@reduxjs/toolkit'



export const editFormsSlice = createSlice({
    name: 'edit forms',
    initialState: {
        state: false,
        from: ""
    },
    reducers: {
        setEditForms: (state, actions) => {

            return {
                state: !state.state,
                from: actions.payload.from
            }

        },
    },
})


export const { setEditForms } = editFormsSlice.actions
