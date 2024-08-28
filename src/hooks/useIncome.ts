import { useEffect, useState } from "react";

export const useIncome = () => {
     const [income, setIncome] = useState<string>("");

     const addIncomeToLocalStorage = (newIncome: string): void => {
          localStorage.setItem("Income", JSON.stringify(newIncome));
     };

     useEffect(() => {
          const incomeFromLocalStorage = localStorage.getItem("Income");
          if (incomeFromLocalStorage) {
               const parsedIncomeFromLocalStorage: string = JSON.parse(
                    incomeFromLocalStorage
               );
               setIncome(parsedIncomeFromLocalStorage);
          }
     }, []);

     const removeIncomeFromLocalStorage = (): void => {
          localStorage.removeItem("Income");
     };

     return {
          income,
          setIncome,
          addIncomeToLocalStorage,
          removeIncomeFromLocalStorage,
     };
};
