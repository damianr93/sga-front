import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { politicSlice } from './slices/politics/politics-slice'
import { editFormsSlice } from './slices/edit-forms/edit-slice'
import { contextAnalysisSlice } from './slices/foda/politics-slice'


export const store = configureStore({
  reducer: {
    politics: politicSlice.reducer,
    editForms: editFormsSlice.reducer,
    analysisContext:contextAnalysisSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;