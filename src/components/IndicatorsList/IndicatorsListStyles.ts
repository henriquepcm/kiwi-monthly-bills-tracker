import styled from "styled-components";

export const StyledUlIndicators = styled.ul`
     display: grid;
     grid-column-gap: 2rem;
     grid-template-columns: auto auto;
     grid-template-rows: auto auto auto auto;
     grid-template-areas:
          "a a"
          "b c"
          "d e"
          "f f";

     & > :nth-child(1) {
          grid-area: a;
     }
     & > :nth-child(2) {
          grid-area: b;
     }
     & > :nth-child(3) {
          grid-area: c;
     }
     & > :nth-child(4) {
          grid-area: d;
     }
     & > :nth-child(5) {
          grid-area: e;
     }
     & > :nth-child(6) {
          grid-area: f;
     }
`;
export const StyledSpanIcon = styled.span`
     color: #00c582;
     margin-left: 1rem;
`;
