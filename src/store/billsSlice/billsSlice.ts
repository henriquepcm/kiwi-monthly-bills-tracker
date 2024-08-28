import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { open } from "../modalsAndHeaderMenuSlice/modalsAndHeaderMenuSlice";
import { BillsState, Bill } from "./billsSliceTypes";

const loadFromLocalStorage = (): BillsState => {
     const data = JSON.parse(localStorage.getItem("bills") ?? "[]");
     return data.map((bill: Bill) => ({ ...bill, isMenuOpen: false }));
};

const initialState: BillsState = loadFromLocalStorage();

const billsSlice = createSlice({
     name: "bills",
     initialState,
     reducers: {
          addBill: (
               state,
               action: PayloadAction<Omit<Bill, "id" | "isPaid" | "isMenuOpen">>
          ) => {
               const { name, amount, dueDay } = action.payload;
               state.push({
                    id: Date.now(),
                    name,
                    amount,
                    dueDay,
                    isPaid: false,
                    isMenuOpen: false,
               });
          },
          editBill: (state, action: PayloadAction<Bill>) => {
               const { id, name, amount, dueDay, isPaid } = action.payload;
               const index = state.findIndex((bill) => bill.id === id);
               if (index !== -1) {
                    state[index] = {
                         ...state[index],
                         name,
                         amount,
                         dueDay,
                         isPaid,
                    };
               }
          },
          deleteBill: (state, action: PayloadAction<{ id: number }>) => {
               const index = state.findIndex(
                    (bill) => bill.id === action.payload.id
               );
               if (index !== -1) {
                    state.splice(index, 1);
               }
          },
          toggleBillPaidStatus: (
               state,
               action: PayloadAction<{ id: number; isPaid: boolean }>
          ) => {
               const { id, isPaid } = action.payload;
               const index = state.findIndex((bill) => bill.id === id);
               if (index !== -1) {
                    state[index] = {
                         ...state[index],
                         isPaid,
                         isMenuOpen: false,
                    };
               }
          },
          toggleAllBillPaidStatus: (
               state,
               action: PayloadAction<{ isPaid: boolean }>
          ) => {
               state.forEach((bill) => {
                    bill.isPaid = action.payload.isPaid;
               });
          },
          deleteAllBills: () => {
               return [];
          },
          toggleBillMenu: (state, action: PayloadAction<{ id: number }>) => {
               const { id } = action.payload;
               const index = state.findIndex((bill) => bill.id === id);

               if (index !== -1) {
                    const isCurrentlyOpen = state[index].isMenuOpen;

                    state.forEach((bill) => {
                         bill.isMenuOpen = false;
                    });

                    state[index].isMenuOpen = !isCurrentlyOpen;
               }
          },
     },
     extraReducers: (builder) => {
          builder.addCase(open, (state) => {
               state.forEach((bill) => {
                    bill.isMenuOpen = false;
               });
          });
     },
});

export const {
     addBill,
     editBill,
     deleteBill,
     toggleBillPaidStatus,
     toggleAllBillPaidStatus,
     deleteAllBills,
     toggleBillMenu,
} = billsSlice.actions;

export default billsSlice.reducer;
