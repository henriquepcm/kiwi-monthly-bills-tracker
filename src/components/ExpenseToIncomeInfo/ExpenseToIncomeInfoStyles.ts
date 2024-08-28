import styled from "styled-components";

export const StyledDivIconWrapper = styled.div`
     display: flex;
     gap: calc(var(--kiwi-horizontal-gap) * 2);
     margin-top: var(--kiwi-vertical-gap);
     align-items: center;
`;

export const StyledDivMessage = styled.div`
     font-weight: var(--kiwi-heavy-font-weight);
     line-height: 2.5rem;
     font-size: var(--kiwi-small-font-size);
     letter-spacing: 0.05rem;
`;

export const StyledSpanIcon = styled.span`
     display: flex;
     background-color: var(--kiwi-color1);
     width: 8rem;
     height: 4.5rem;
     align-items: center;
     justify-content: center;
     border-radius: 10rem;
     font-size: var(--kiwi-large-font-size);
`;
