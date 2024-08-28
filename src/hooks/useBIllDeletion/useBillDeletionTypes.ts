import { Bill } from "../../store/billsSlice/billsSliceTypes";

export interface useBillDeletionProps {
     name: Bill["name"];
     id: Bill["id"];
}
