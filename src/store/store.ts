import { configureStore } from "@reduxjs/toolkit";
import { localStorageMiddleware } from "./localStorageMiddleware/localStorageMiddleware";
import billsReducer from "./billsSlice/billsSlice";
import modalsAndHeaderMenuReducer from "./modalsAndHeaderMenuSlice/modalsAndHeaderMenuSlice";

const store = configureStore({
     reducer: {
          bills: billsReducer,
          modalsAndHeaderMenu: modalsAndHeaderMenuReducer,
     },
     middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = {
     bills: ReturnType<typeof billsReducer>;
     modalsAndHeaderMenu: ReturnType<typeof modalsAndHeaderMenuReducer>;
};

export type AppDispatch = typeof store.dispatch;

export default store;
