import styled from "styled-components";

export const StyledDivConfirmationWrapper = styled.div`
     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
     gap: calc(var(--kiwi-horizontal-gap) * 3);
`;

export const StyledButtonNope = styled.button`
     width: 50%;
     height: 8.5rem;
     margin-top: 5rem;
     background-color: var(--kiwi-color6);
     color: var(--kiwi-color1);
     border: none;
     font-size: var(--kiwi-small-font-size);
     transition-duration: var(--kiwi-transition-duration);
     &:hover {
          background-color: var(--kiwi-color7);
          cursor: pointer;
     }
`;

export const StyledButtonYep = styled.button`
     width: 50%;
     height: 8.5rem;
     margin-top: 5rem;
     background-color: var(--kiwi-color5);
     color: var(--kiwi-color1);
     font-size: var(--kiwi-small-font-size);
     transition-duration: var(--kiwi-transition-duration);
     border: var(--kiwi-border);
     border-color: var(--kiwi-color3);
     &:hover {
          cursor: pointer;
          background-color: var(--kiwi-color4);
     }
`;
