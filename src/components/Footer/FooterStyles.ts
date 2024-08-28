import styled from "styled-components";

export const StyledDivFooter = styled.div`
     display: flex;
     color: var(--kiwi-color5);
     margin-top: calc(var(--kiwi-vertical-gap) * 6);
     align-items: center;
     justify-content: center;
     font-size: var(--kiwi-small-font-size);
     font-weight: var(--kiwi-light-font-weight);
     width: 100%;
     height: 2rem;
`;

export const StyledALink = styled.a`
     color: var(--kiwi-color5);
     font-weight: var(--kiwi-heavy-font-weight);
     text-decoration: none;
     overflow: hidden;
     position: relative;
     display: inline-block;
     height: 2rem;

     &::before,
     &::after {
          content: "";
          position: absolute;
          width: 100%;
          left: 0;
          transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
     }

     &::before {
          background-color: var(--kiwi-color5);
          height: 0.2rem;
          bottom: 0;
          transform-origin: 0;
          transform: scaleX(0);
     }

     &:hover::before {
          transform: scaleX(1);
     }

     &::after {
          content: attr(data-replace);
          transform: translate3d(0, 200%, 0);
     }

     &:hover::after {
          transform: translate3d(0, 0, 0);
     }

     span {
          display: inline-block;
          transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
          transform: translate(0, 0.19rem);
     }

     &:hover span {
          transform: translate3d(-200%, 0, 0);
     }
`;
