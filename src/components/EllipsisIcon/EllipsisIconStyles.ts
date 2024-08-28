import styled, { keyframes, css } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { EllipsisIconStylesProps } from "./EllipsisIconStylesTypes";

//Ping animation
export const pingAnimation = keyframes`
    75%, 100% {
    transform: scale(1.2);
    opacity: 0;
  }
`;

export const StyledDivEllipsisWrapper = styled.div.withConfig({
     shouldForwardProp: (prop) =>
          isPropValid(prop) && !["bills"].includes(prop),
})<EllipsisIconStylesProps>`
     z-index: 1;
     position: relative;
     width: 4rem;
     height: 4rem;
     border-radius: 10rem;
     display: flex;
     justify-content: center;
     align-items: center;
     ${({ bills }) =>
          bills &&
          bills.length === 0 &&
          css`
               &::before {
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border: var(--kiwi-border);
                    border-color: var(--kiwi-color6);
                    border-radius: 10rem;
                    animation: ${pingAnimation} 1.5s cubic-bezier(0, 0, 0.2, 1)
                         infinite;
               }
          `}
`;

export const StyledButtonEllipsis = styled.button.withConfig({
     shouldForwardProp: (prop) => isPropValid(prop),
})`
     z-index: 2;
     cursor: pointer;
     background-color: transparent;
     border: transparent;
     color: inherit;
     width: 4rem;
     height: 4rem;
     border-radius: 10rem;
     transition-duration: var(--kiwi-transition-duration);
     &:hover {
          background-color: var(--kiwi-color6);
          cursor: pointer;
     }
`;
