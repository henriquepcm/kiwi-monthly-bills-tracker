import { useState, useEffect } from "react";
import { BillsState } from "../store/billsSlice/billsSliceTypes";

export const useLocalStorage = (initialState: BillsState, key: string) => {
     const [value, setValue] = useState(() => {
          const storedData = localStorage.getItem(key);
          return storedData ? JSON.parse(storedData) : initialState;
     });

     useEffect(() => {
          localStorage.setItem(key, JSON.stringify(value));
     }, [value, key]);

     return [value, setValue];
};
