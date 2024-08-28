// Libraries
import { useDispatch } from "react-redux";

// Hooks
import { useFormHandlers } from "../../../hooks/useFormHandlers";
import { useNotify } from "../../../hooks/useNotify";

// Utils
import { addBill } from "../../../store/billsSlice/billsSlice";
import { close } from "../../../store/modalsAndHeaderMenuSlice/modalsAndHeaderMenuSlice";
import { isFormCorrectlyFilled } from "../../../utils/formUtils";
import { removeCommas } from "../../../utils/currencyFormat";

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
} from "../FormStyles/FormStyles";

export default function FormAddBill() {
     const dispatch = useDispatch();
     const { notifyTheUser } = useNotify();

     const formData = {
          name: "",
          amount: "",
          dueDay: "",
     };

     const {
          dueDay,
          handleDueDayChange,
          name,
          handleNameChange,
          amount,
          handleAmountChange,
          errors,
     } = useFormHandlers(formData.dueDay, formData.name, formData.amount);

     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const isFormErrorFree = Object.keys(errors).length === 0;

          if (isFormErrorFree) {
               const amountNoCommas = removeCommas(amount);
               dispatch(
                    addBill({
                         name,
                         amount: amountNoCommas,
                         dueDay,
                    })
               );
          }
          dispatch(close({ name: "addBillModal" }));
          notifyTheUser(`${name} has been added.`);
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
                              placeholder="Rent"
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
                              placeholder="5"
                              onChange={handleDueDayChange}
                         />
                         {errors.dueDay && (
                              <StyledDivFormError>
                                   {errors.dueDay}
                              </StyledDivFormError>
                         )}
                    </StyledDivFormField>
                    {isFormCorrectlyFilled(name, amount, dueDay) ? (
                         <StyledButtonForm aria-label="Save" type="submit">
                              Save
                         </StyledButtonForm>
                    ) : null}
               </StyledFormModal>
          </>
     );
}
