import styled from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

export const StyledDivMenuWrapper = styled.div.withConfig({
     shouldForwardProp: (prop) => isPropValid(prop),
})`
     position: relative;
     z-index: 100;
`;

export const StyledUlMenu = styled.ul`
     position: absolute;
     background-color: var(--kiwi-color5);
     width: 21rem;
     right: 3.3rem;
     top: 7.5rem;
     box-shadow: var(--kiwi-box-shadow);
`;

export const StyledLiMenuItem = styled.li`
     height: 6rem;
     border-bottom: var(--kiwi-border);
     border-color: var(--kiwi-color3);
     display: flex;
     flex-direction: row;
     align-items: center;
     gap: var(--kiwi-horizontal-gap);
     font-size: var(--kiwi-small-font-size);
     transition-duration: var(--kiwi-transition-duration);
     padding-left: 2rem;
     &:hover {
          cursor: pointer;
          padding-left: 2.5rem;
          gap: 1.5rem;
          background-color: var(--kiwi-color4);
     }
     &:last-child {
          border: none;
     }
`;
