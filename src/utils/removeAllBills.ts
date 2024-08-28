import React from "react";
import { BillsState } from "../store/billsSlice/billsSliceTypes";

export const removeAllBills = (
     setBills: React.Dispatch<React.SetStateAction<BillsState>>
) => {
     setBills([]);
     localStorage.removeItem("Bills");
};
