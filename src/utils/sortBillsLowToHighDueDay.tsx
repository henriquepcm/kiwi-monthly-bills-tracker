import BillItem from "../components/BillItem/BillItem.tsx";
import { BillsState } from "../store/billsSlice/billsSliceTypes.ts";

export const sortBillsLowToHighDueDay = (bills: BillsState) => {
     return bills
          .sort((a, b) => Number(a.dueDay) - Number(b.dueDay))
          .map((bill) => (
               <li key={bill.id}>
                    <BillItem bill={bill} />
               </li>
          ));
};
