import { RootState } from "../store/store";

export const isThisBillMenuOpen = (state: RootState, id: number) => {
     const foundBillById = state.bills.find((bill) => bill.id === id);
     return foundBillById ? foundBillById.isMenuOpen : false;
};
