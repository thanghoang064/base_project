import { configureStore } from '@reduxjs/toolkit'


export const store = configureStore({
  reducer: {
    // [studentApi.reducerPath]: studentApi.reducer,
    // student: studentReducer
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(studentApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch