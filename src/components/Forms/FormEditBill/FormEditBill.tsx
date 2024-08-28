// Libraries
import { useDispatch } from "react-redux";

// Hooks
import { useFormHandlers } from "../../../hooks/useFormHandlers";
import { useNotify } from "../../../hooks/useNotify";

// Utils
import { editBill } from "../../../store/billsSlice/billsSlice";
import { close } from "../../../store/modalsAndHeaderMenuSlice/modalsAndHeaderMenuSlice";
import { isFormCorrectlyFilled } from "../../../utils/formUtils";
import {
     formatCountryCurrency,
     removeCommas,
} from "../../../utils/currencyFormat";

// Styles
import {
     StyledFormModal,
     StyledDivFormField,
     StyledDivFormError,
     StyledLabelForm,
     StyledInputName,
     StyledInputAmount,
     StyledInputDueDay,
     StyledButtonForm,
     StyledButtonDelete,
} from "../FormStyles/FormStyles";

// Types
import { FormEditBillProps } from "./FormEditBillTypes";

export default function FormEditBill({
     billStoredData,
     onOpenConfirmBillDeletionModal,
}: FormEditBillProps) {
     const dispatch = useDispatch();
     const { notifyTheUser } = useNotify();

     const {
          name: storedName,
          amount: storedAmount,
          dueDay: storedDueDay,
          id: storedId,
          isPaid: storedIsPaid,
     } = billStoredData;

     const formattedStoredAmount = formatCountryCurrency(storedAmount);

     const {
          dueDay,
          handleDueDayChange,
          name,
          handleNameChange,
          amount,
          handleAmountChange,
          errors,
     } = useFormHandlers(storedDueDay, storedName, formattedStoredAmount);

     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const isFormErrorFree = Object.keys(errors).length === 0;

          if (isFormErrorFree) {
               const amountNoCommas = removeCommas(amount);

               dispatch(
                    editBill({
                         id: storedId,
                         name,
                         amount: amountNoCommas,
                         dueDay,
                         isPaid: storedIsPaid,
                         isMenuOpen: false,
                    })
               );
               dispatch(
                    close({
                         name: "editBillModal",
                    })
               );
               notifyTheUser(`${name} has been edited.`);
          }
     };

     return (
          <>
               <StyledFormModal onSubmit={handleSubmit}>
                    <StyledDivFormField>
                         <StyledLabelForm>What?</StyledLabelForm>
                         <StyledInputName
                              name={name}
                              amount={amount}
                              dueDay={dueDay}
                              type="text"
                              value={name}
                              onChange={handleNameChange}
                              placeholder='Example: "Rent"'
                         />
                         {errors.name && (
                              <StyledDivFormError>
                                   {errors.name}
                              </StyledDivFormError>
                         )}
                    </StyledDivFormField>
                    <StyledDivFormField>
                         <StyledLabelForm>How much?</StyledLabelForm>
                         <StyledInputAmount
                              placeholder="0.00"
                              type="text"
                              amount={amount}
                              dueDay={dueDay}
                              value={amount}
                              onChange={handleAmountChange}
                         />

                         {errors.amount && (
                              <StyledDivFormError>
                                   {errors.amount}
                              </StyledDivFormError>
                         )}
                    </StyledDivFormField>
                    <StyledDivFormField>
                         <StyledLabelForm>
                              In what day of the month?
                         </StyledLabelForm>
                         <StyledInputDueDay
                              dueDay={dueDay}
                              type="text"
                              value={dueDay}
                              placeholder='Example: "30"'
                              onChange={handleDueDayChange}
                         />
                         {errors.dueDay && (
                              <StyledDivFormError>
                                   {errors.dueDay}
                              </StyledDivFormError>
                         )}
                    </StyledDivFormField>
                    {isFormCorrectlyFilled(name, amount, dueDay) ? (
                         <StyledButtonForm type="submit">Save</StyledButtonForm>
                    ) : null}
               </StyledFormModal>

               <StyledButtonDelete
                    onClick={() => onOpenConfirmBillDeletionModal()}
               >
                    Delete bill
               </StyledButtonDelete>
          </>
     );
}
