import { configureStore } from "@reduxjs/toolkit";
import screenReducer from "../slices/screen";
import contributorReducer from "../slices/contributors";
// import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    screen: screenReducer,
    contributor: contributorReducer,
  },
  // middleware: (getDefaultMiddleware) => {
  //     getDefaultMiddleware().concat();
  // }
});

// setupListeners(store.dispatch)
