import { Bill } from "../../../store/billsSlice/billsSliceTypes";

export interface FormStylesProps
     extends Partial<Pick<Bill, "name" | "amount" | "dueDay">> {}
