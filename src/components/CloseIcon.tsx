import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledXMark = styled(FontAwesomeIcon)`
     padding: 1rem;
     border: 0.16rem solid #000;
     border-radius: 10rem;
     transition-duration: 0.4s;
     width: 2.5rem;
     height: 2.5rem;
     &:hover {
          border-color: #5c5c5c;
          border-radius: 10rem;
          cursor: pointer;
          color: #888888;
     }
`;

function CloseIcon() {
     return <StyledXMark icon={faXmark} />;
}
export default CloseIcon;
