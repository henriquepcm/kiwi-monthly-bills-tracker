import styled from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

export const StyledHeader = styled.header.withConfig({
     shouldForwardProp: (prop) => isPropValid(prop),
})`
     display: grid;
     grid-template-columns: auto 1fr auto;
     gap: 1.5rem;
     align-items: center;
     padding: 1rem 2rem;
     max-width: 36rem;
`;
