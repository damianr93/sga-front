import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { politicSlice } from './slices/politics/politics-slice'
import { editFormsSlice } from './slices/edit-forms/edit-slice'
import { contextAnalysisSlice } from './slices/context-analysis/context-analysis-slice'
import { interestedPartiesSlice } from './slices/interested-parties/interested-parties-slice'
import { processDefinitionsSlice } from './slices/process-definition/process-definitions'
import { loadingSlice } from './slices/loading/loading'
import { targetsSlice } from './slices/targets/targets'

export const store = configureStore({
  reducer: {
    politics: politicSlice.reducer,
    editForms: editFormsSlice.reducer,
    analysisContext:contextAnalysisSlice.reducer,
    interestedParties:interestedPartiesSlice.reducer,
    processDefinitions:processDefinitionsSlice.reducer,
    isLoading:loadingSlice.reducer,
    targets: targetsSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;