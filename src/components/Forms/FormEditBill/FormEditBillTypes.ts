import { Bill } from "../../../store/billsSlice/billsSliceTypes";

export interface FormEditBillProps {
     billStoredData: Bill;
     onOpenConfirmBillDeletionModal: () => void;
}
