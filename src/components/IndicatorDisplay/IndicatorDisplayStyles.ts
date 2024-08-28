import styled from "styled-components";
import emotionIsPropValid from "@emotion/is-prop-valid";
import { IndicatorDisplayStylesProps } from "./IndicatorDisplayStylesTypes";

export const StyledLiItem = styled.li.withConfig({
     shouldForwardProp: (prop) =>
          emotionIsPropValid(prop) && !["amount"].includes(prop),
})<IndicatorDisplayStylesProps>`
     position: relative;
     display: flex;
     flex-direction: column;
     row-gap: 1rem;
     padding: 4rem 2rem;
     border-bottom: var(--kiwi-border);
     border-color: var(--kiwi-color5);
     color: ${({ amount }) =>
          Number(amount) === 0 ? "var(--kiwi-color5)" : "var(--kiwi-color1)"};
`;

export const StyledSpanLabel = styled.span`
     font-weight: var(--kiwi-heavy-font-weight);
`;

export const StyledSpanAmount = styled.span`
     font-weight: var(--kiwi-light-font-weight);
     font-size: var(--kiwi-medium-font-size);
     letter-spacing: 0.1rem;
`;
