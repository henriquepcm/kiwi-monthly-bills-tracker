import styled from "styled-components";
import emotionIsPropValid from "@emotion/is-prop-valid";
import { FormStylesProps } from "./FormStylesTypes";

const getNameBorderColor = (
     name: FormStylesProps["name"],
     amount: FormStylesProps["amount"],
     dueDay: FormStylesProps["dueDay"]
): string => {
     return (!name && amount) || (!name && dueDay)
          ? "var(--kiwi-color6)"
          : "var(--kiwi-color3)";
};

const getAmountBorderColor = (
     amount: FormStylesProps["amount"],
     dueDay: FormStylesProps["dueDay"]
): string => {
     return (!amount && dueDay) || (amount === "0.00" && !dueDay)
          ? "var(--kiwi-color6)"
          : "var(--kiwi-color3)";
};

const getDueDayBorderColor = (dueDay: FormStylesProps["dueDay"]): string => {
     return dueDay === "0" ? "var(--kiwi-color6)" : "var(--kiwi-color3)";
};

export const StyledFormModal = styled.form`
     display: flex;
     flex-direction: column;
     width: 36rem;
`;
export const StyledDivFormField = styled.div`
     display: flex;
     flex-direction: column;
`;
export const StyledDivFormError = styled.div`
     padding: 2rem;
     font-style: italic;
     color: var(--kiwi-color6);
`;
export const StyledLabelForm = styled.label`
     transform: translate(2rem, 3.5rem);
     color: var(--kiwi-color2);
`;
export const StyledInputName = styled.input.withConfig({
     shouldForwardProp: (prop) =>
          emotionIsPropValid(prop) &&
          !["name", "amount", "dueDay"].includes(prop),
})<FormStylesProps>`
     padding-left: 2rem;
     padding-top: calc(var(--kiwi-vertical-gap) * 2);
     font-size: var(--kiwi-small-font-size);
     border: var(--kiwi-border);
     border-color: ${({ name, amount, dueDay }) =>
          getNameBorderColor(name, amount, dueDay)};
     background-color: var(--kiwi-color5);
     color: var(--kiwi-color1);
     height: 5rem;
     transition-duration: var(--kiwi-transition-duration);
     &:focus {
          outline: none; /* Remove default focus outline */
          background-color: var(--kiwi-color4);
     }
`;

export const StyledInputAmount = styled.input.withConfig({
     shouldForwardProp: (prop) =>
          emotionIsPropValid(prop) && !["amount", "dueDay"].includes(prop),
})<FormStylesProps>`
     padding-left: 2rem;
     padding-top: calc(var(--kiwi-vertical-gap) * 2);
     font-size: var(--kiwi-small-font-size);
     border: var(--kiwi-border);
     border-color: ${({ amount, dueDay }) =>
          getAmountBorderColor(amount, dueDay)};
     background-color: var(--kiwi-color5);
     color: var(--kiwi-color1);
     height: 5rem;
     transition-duration: var(--kiwi-transition-duration);
     &:focus {
          outline: none; /* Remove default focus outline */
          background-color: var(--kiwi-color4);
     }
`;

export const StyledInputDueDay = styled.input.withConfig({
     shouldForwardProp: (prop) =>
          emotionIsPropValid(prop) && !["dueDay"].includes(prop),
})<FormStylesProps>`
     padding-left: 2rem;
     padding-top: calc(var(--kiwi-vertical-gap) * 2);
     font-size: var(--kiwi-small-font-size);
     border: var(--kiwi-border);
     border-color: ${({ dueDay }) => getDueDayBorderColor(dueDay)};
     background-color: var(--kiwi-color5);
     color: var(--kiwi-color1);
     height: 5rem;
     transition-duration: var(--kiwi-transition-duration);
     &:focus {
          outline: none; /* Remove default focus outline */
          background-color: var(--kiwi-color4);
     }
`;
export const StyledButtonForm = styled.button`
     background-color: var(--kiwi-color6);
     height: 8.5rem;
     color: var(--kiwi-color1);
     border: none;
     font-size: var(--kiwi-small-font-size);
     transition-duration: var(--kiwi-transition-duration);
     margin-top: var(--kiwi-vertical-gap);
     &:hover {
          background-color: var(--kiwi-color7);
          cursor: pointer;
     }
`;

export const StyledButtonDelete = styled.button`
     width: 100%;
     height: 4.5rem;
     background-color: var(--kiwi-color5);
     color: var(--kiwi-color1);
     border: none;
     font-size: var(--kiwi-small-font-size);
     transition-duration: var(--kiwi-transition-duration);
     margin-top: var(--kiwi-vertical-gap);
     &:hover {
          cursor: pointer;
          color: var(--kiwi-color2);
     }
`;
