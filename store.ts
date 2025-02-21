import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "@/servicesSlice";

export const store = configureStore({
  reducer: {
    services: servicesReducer,
  },
});

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch type
export type AppDispatch = typeof store.dispatch;
