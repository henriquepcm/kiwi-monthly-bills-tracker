import { Bill } from "../../store/billsSlice/billsSliceTypes";

export interface BillItemStylesProps extends Pick<Bill, "isPaid"> {}
