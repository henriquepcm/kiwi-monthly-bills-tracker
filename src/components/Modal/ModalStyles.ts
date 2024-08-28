import styled from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

export const ModalDivWrapper = styled.div.withConfig({
     shouldForwardProp: (prop) => isPropValid(prop),
})`
     z-index: 2;
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     display: flex;
     flex-direction: column;
     align-items: center;
     background-color: var(--kiwi-color5);
     padding-top: var(--kiwi-vertical-gap);
`;

export const ModalDivCloseIcon = styled.div`
     width: 36rem;
     display: flex;
     justify-content: right;
     margin-bottom: 7rem;
`;

export const ModalSpanTitle = styled.span`
     font-size: var(--kiwi-medium-font-size);
     line-height: var(--kiwi-line-height);
     width: 36rem;
`;

export const ModalDivContent = styled.div`
     padding-right: 2rem;
     padding-left: 2rem;
`;
