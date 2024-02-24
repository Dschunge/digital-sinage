import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import dishSlice from "@/features/counter/dishSlice";
import categorySlice from "@/features/counter/categorySlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dish: dishSlice,
    category: categorySlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
