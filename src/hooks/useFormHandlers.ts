import { useEffect, useRef, useState } from "react";

export const useFormHandlers = (
     initialDueDay: string,
     initialName: string,
     initialValue: string
) => {
     const [dueDay, setDueDay] = useState<string>(initialDueDay);
     const [name, setName] = useState<string>(initialName);
     const [amount, setAmount] = useState<string>(initialValue);
     const [errors, setErrors] = useState<{ [key: string]: string }>({});
     const prevDueDayRef = useRef<string>("");

     //Starts Due Day form input
     useEffect(() => {
          prevDueDayRef.current = dueDay;
     }, [dueDay]);

     const handleDueDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const val = e.target.value
               .replace(/[^\d]|/g, "") // remove what's not a digit
               .replace(/^0+(?!$)/, ""); // remove leading zeros

          const valAsNumber = Number(val);

          if (valAsNumber > 31) {
               setDueDay(prevDueDayRef.current);
          } else {
               setDueDay(val);
          }
     };

     //Starts Name form input
     const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const newName = e.target.value;

          //20-characters limit so it doesn't break the layout
          if (newName.length <= 20) {
               setName(newName);
          }
     };

     //Starts Value form input
     const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          let val = e.target.value
               .replace(/[^\d]/g, "") //Remove what's not a digit
               .replace(/^0+/, ""); //Remove leading zeros after 3 digits typed

          while (val.length < 3) {
               //Bellow 3 digits, hold the format "0.00"
               val = "0" + val;
          }

          const integerPart = val
               .slice(0, -2)
               .replace(/\B(?=(\d{3})+(?!\d))/g, ","); //Add commas to the integer part for thousands separation
          const decimalPart = val.slice(-2);
          const formattedValue = `${integerPart}.${decimalPart}`;

          setAmount(formattedValue);
     };

     useEffect(() => {
          const validateBillForm = () => {
               const formErrors: { [key: string]: string } = {};

               if (
                    (!name && dueDay) ||
                    (!name && amount && amount.length > 0)
               ) {
                    formErrors.name = "Oops... this field up here is required.";
               }

               if (!amount && dueDay) {
                    formErrors.amount =
                         "Hey, don't forget to add the value here.";
               }

               if (name && name.length > 19) {
                    formErrors.name =
                         "Hold your horses! A name with no more than 20 characters will look way better on your list.";
               }

               if (amount && amount === "0.00") {
                    formErrors.amount = "We need to go higher than this.";
               }

               if (dueDay === "0") {
                    formErrors.dueDay =
                         "It has to be a number between 1 and 31.";
               }

               return formErrors;
          };

          setErrors(validateBillForm());
     }, [name, amount, dueDay]);

     return {
          dueDay,
          handleDueDayChange,
          name,
          handleNameChange,
          amount,
          handleAmountChange,
          errors,
     };
};
