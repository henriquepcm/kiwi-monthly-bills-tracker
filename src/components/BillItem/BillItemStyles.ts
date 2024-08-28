import styled from "styled-components";
import emotionIsPropValid from "@emotion/is-prop-valid";
import { BillItemStylesProps } from "./BillItemStylesTypes";

const getColor = (isPaid: BillItemStylesProps["isPaid"]): string =>
     isPaid ? "var(--kiwi-color5)" : "var(--kiwi-color1)";

const getBorderColor = (isPaid: BillItemStylesProps["isPaid"]): string =>
     isPaid ? "var(--kiwi-color5)" : "var(--kiwi-color6)";

const getFontWeight = (isPaid: BillItemStylesProps["isPaid"]): string =>
     isPaid ? "var(--kiwi-heavy-font-weight)" : "var(--kiwi-light-font-weight)";

export const StyledDivBill = styled.div.withConfig({
     shouldForwardProp: (prop) =>
          emotionIsPropValid(prop) && !["isPaid"].includes(prop),
})<BillItemStylesProps>`
     display: grid;
     grid-template-columns: 4fr 1fr auto;
     align-items: center;
     padding: 2rem;
     gap: 1rem;
     border: var(--kiwi-border);
     margin-top: var(--kiwi-vertical-gap);
     color: ${({ isPaid }) => getColor(isPaid)};
     border-color: ${({ isPaid }) => getBorderColor(isPaid)};
     font-weight: ${({ isPaid }) => getFontWeight(isPaid)};
     transition-duration: var(--kiwi-transition-duration);
     &:hover {
          background-color: var(--kiwi-color6);
          transform: scale(1.02);
     }

     div:first-child {
          display: flex;
          flex-direction: column;
          line-height: var(--kiwi-line-height);
     }
`;

export const StyledSpanName = styled.span`
     font-weight: var(--kiwi-heavy-font-weight);
`;
