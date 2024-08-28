import { Bill } from "../../../store/billsSlice/billsSliceTypes";

export interface BillMenuProps {
     bill: Bill;
     onOpenConfirmBillDeletionModal: () => void;
}
