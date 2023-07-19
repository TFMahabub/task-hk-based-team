import { configureStore } from '@reduxjs/toolkit';
import navbarSliceReducer from '../feauters/navbar/navbarSlice';

export const store = configureStore({
  reducer: {
    navbar: navbarSliceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
