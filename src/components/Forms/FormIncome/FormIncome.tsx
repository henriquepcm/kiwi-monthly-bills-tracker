// Libraries
import { useDispatch } from "react-redux";

// Hoooks
import { useFormHandlers } from "../../../hooks/useFormHandlers";

// Utils
import { open } from "../../../store/modalsAndHeaderMenuSlice/modalsAndHeaderMenuSlice";
import { blockEnterKey } from "../../../utils/keyboardUtils";
import { isZero } from "../../../utils/formUtils";
import {
     formatCountryCurrency,
     removeCommas,
     removeDollarSign,
} from "../../../utils/currencyFormat";

// Styles
import {
     StyledFormModal,
     StyledDivFormField,
     StyledLabelForm,
     StyledInputAmount,
     StyledDivFormError,
     StyledButtonForm,
     StyledButtonDelete,
} from "..//FormStyles/FormStyles";

// Types
import { FormIncomeProps } from "./FormIncomeTypes";

export default function FormIncome({
     income,
     mode,
     onAddIncome,
     onEditIncome,
}: FormIncomeProps) {
     const dispatch = useDispatch();
     const incomeAsNumber = Number(income);

     let formattedStoredIncome = "";
     if (income) {
          formattedStoredIncome = removeDollarSign(
               formatCountryCurrency(income)
          );
     }

     const { amount, handleAmountChange, errors } = useFormHandlers(
          "",
          "",
          formattedStoredIncome
     );

     const handleEnterKey = (e: React.KeyboardEvent) => {
          blockEnterKey(e, amount);
     };

     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const incomeValueNoCommas = removeCommas(String(amount));

          if (mode === "add" && onAddIncome) {
               onAddIncome(incomeValueNoCommas);
          }
          if (mode === "edit" && onEditIncome) {
               onEditIncome(incomeValueNoCommas);
          }
     };

     return (
          <>
               <StyledFormModal onSubmit={handleSubmit}>
                    <StyledDivFormField>
                         <StyledLabelForm>Value</StyledLabelForm>
                         <StyledInputAmount
                              type="text"
                              placeholder="0.00"
                              amount={amount}
                              value={amount}
                              onChange={handleAmountChange}
                              onKeyDown={handleEnterKey}
                         />
                    </StyledDivFormField>

                    {errors.amount && (
                         <StyledDivFormError>
                              {errors.amount}
                         </StyledDivFormError>
                    )}
                    {isZero(String(amount)) || !amount ? null : (
                         <StyledButtonForm type="submit">Save</StyledButtonForm>
                    )}
               </StyledFormModal>
               {incomeAsNumber !== 0 && (
                    <StyledButtonDelete
                         onClick={() =>
                              dispatch(
                                   open({ name: "confirmIncomeDeletionModal" })
                              )
                         }
                    >
                         Delete income
                    </StyledButtonDelete>
               )}
          </>
     );
}
