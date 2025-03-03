import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    //auth: authReducer, // Add other reducers as needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
