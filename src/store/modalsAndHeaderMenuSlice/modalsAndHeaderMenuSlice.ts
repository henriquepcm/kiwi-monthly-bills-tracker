import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
     ModalsAndMenuState,
     OpenClosePayload,
} from "./modalsAndHeaderMenuSliceTypes";

const initialState: ModalsAndMenuState = {
     addBillModal: { isOpen: false, id: null },
     addIncomeModal: { isOpen: false, id: null },
     editIncomeModal: { isOpen: false, id: null },
     confirmIncomeDeletionModal: { isOpen: false, id: null },
     confirmAllBillsDeletionModal: { isOpen: false, id: null },
     editBillModal: { isOpen: false, id: null },
     confirmBillDeletionModal: { isOpen: false, id: null },
     headerMenu: { isOpen: false, id: null },
};

const modalsAndHeaderMenuSlice = createSlice({
     name: "modalsAndHeaderMenu",
     initialState,
     reducers: {
          open: (state, action: PayloadAction<OpenClosePayload>) => {
               const { name, id } = action.payload;

               Object.keys(state).forEach((key) => {
                    state[key as keyof ModalsAndMenuState].isOpen = false;
                    state[key as keyof ModalsAndMenuState].id = null;
               });

               if (state[name]) {
                    state[name].isOpen = true;
                    state[name].id = id || null;
               }
          },
          close: (
               state,
               action: PayloadAction<{ name: keyof ModalsAndMenuState }>
          ) => {
               const { name } = action.payload;
               if (state[name]) {
                    state[name].isOpen = false;
                    state[name].id = null;
               }
          },
          toggleHeaderMenu: (state) => {
               state.headerMenu.isOpen = !state.headerMenu.isOpen;
          },
     },
});

export const { open, close, toggleHeaderMenu } =
     modalsAndHeaderMenuSlice.actions;
export default modalsAndHeaderMenuSlice.reducer;
