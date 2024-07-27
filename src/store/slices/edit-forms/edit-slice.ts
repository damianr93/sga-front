import { createSlice } from '@reduxjs/toolkit'



export const editFormsSlice = createSlice({
    name: 'edit forms',
    initialState: {
        state: false,
        from: "",
        id:""
    },
    reducers: {
        setEditForms: (state, actions) => {

            return {
                state: !state.state,
                from: actions.payload.from,
                id:actions.payload.id
            }

        },
    },
})


export const { setEditForms } = editFormsSlice.actions
