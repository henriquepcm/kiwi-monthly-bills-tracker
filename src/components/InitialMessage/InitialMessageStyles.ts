import styled from "styled-components";

export const StyledDivWrapper = styled.div`
     justify-content: center;
     display: flex;
     flex-direction: column;
     gap: var(--kiwi-vertical-gap);
     border: var(--kiwi-border);
     border-color: var(--kiwi-color8);
     padding: 5rem;
     margin-top: 2.5rem;
`;

export const StyledH2Headline = styled.h2`
     font-weight: var(--kiwi-heavy-font-weight);
     line-height: var(--kiwi-line-height);
     font-size: var(--kiwi-medium-font-size);
`;

export const StyledH3Subtitle = styled.h3`
     font-weight: var(--kiwi-light-font-weight);
     line-height: var(--kiwi-line-height);
`;

export const StyledPNoBills = styled.p`
     display: flex;
     margin-top: 5rem;
     color: var(--kiwi-color5);
     font-size: var(--kiwi-small-font-size);
     width: 100%;
     justify-content: center;
`;
