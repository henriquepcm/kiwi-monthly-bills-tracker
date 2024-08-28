import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "../store/store";

export const useFinancialMetrics = (income: number) => {
     const bills = useSelector((state: RootState) => state.bills);
     const [billsTotalSum, setBillsTotalSum] = useState(0);
     const [paidBillsTotal, setPaidBillsTotal] = useState(0);
     const [pendingBillsTotal, setPendingBillsTotal] = useState(0);
     const [moneyLeft, setMoneyLeft] = useState(0);
     const [expenseRatio, setExpenseRatio] = useState(0);

     useEffect(() => {
          const totalSum = bills.reduce((acc, bill) => {
               const value = Number(bill.amount);
               return acc + value;
          }, 0);
          setBillsTotalSum(totalSum);
     }, [bills]);

     useEffect(() => {
          const sumOfAllPaidBills = bills
               .filter((bill) => bill.isPaid)
               .reduce((acc, bill) => {
                    const value = Number(bill.amount);
                    return acc + value;
               }, 0);
          setPaidBillsTotal(sumOfAllPaidBills);
     }, [bills]);

     useEffect(() => {
          const pendingBills = bills
               .filter((bill) => !bill.isPaid)
               .reduce((acc, bill) => {
                    const value = Number(bill.amount);
                    return acc + value;
               }, 0);
          setPendingBillsTotal(pendingBills);
     }, [bills]);

     useEffect(() => {
          const calculateMoneyLeft = income - billsTotalSum;
          setMoneyLeft(Math.max(calculateMoneyLeft, 0)); // shows zero if the value is negative.
     }, [income, billsTotalSum]);

     //Calculate expense to income ratio
     useEffect(() => {
          if (income === 0) {
               setExpenseRatio(0);
               return;
          }

          const ratio = (billsTotalSum * 100) / income;
          const roundedRatio = Math.ceil(ratio * 100) / 100;
          setExpenseRatio(Number(roundedRatio.toFixed(2)));
     }, [billsTotalSum, income]);

     return {
          billsTotalSum,
          paidBillsTotal,
          pendingBillsTotal,
          moneyLeft,
          expenseRatio,
     };
};
