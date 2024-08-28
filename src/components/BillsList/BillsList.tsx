import { useSelector } from "react-redux";
import BillItem from "../BillItem/BillItem";
import InitialMessage from "../InitialMessage/InitialMessage";
import { RootState } from "../../store/store";

export default function BillsList() {
     const bills = useSelector((state: RootState) => state.bills);
     const sortedBills = [...bills].sort(
          (a, b) => Number(a.dueDay) - Number(b.dueDay)
     );

     return (
          <div>
               {bills.length === 0 ? (
                    <InitialMessage />
               ) : (
                    <ul>
                         {sortedBills.map((bill) => (
                              <li key={bill.id}>
                                   <BillItem bill={bill} />
                              </li>
                         ))}
                    </ul>
               )}
          </div>
     );
}
