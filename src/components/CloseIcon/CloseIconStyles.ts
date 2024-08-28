import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledXMark = styled(FontAwesomeIcon)`
     padding: 1rem;
     border: var(--kiwi-border);
     border-color: var(--kiwi-color5);
     border-radius: 10rem;
     transition-duration: var(--kiwi-transition-duration);
     width: 2.5rem;
     height: 2.5rem;
     &:hover {
          border-color: var(--kiwi-color6);
          border-radius: 10rem;
          cursor: pointer;
          color: var(--kiwi-color6);
     }
`;
