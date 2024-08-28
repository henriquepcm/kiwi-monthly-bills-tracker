import { forwardRef } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import {
     StyledDivEllipsisWrapper,
     StyledButtonEllipsis,
} from "./EllipsisIconStyles";

// Types
import { RootState } from "../../store/store";
import { EllipsisIconProps } from "./EllipsisIconTypes";

const EllipsisIcon = forwardRef<HTMLButtonElement, EllipsisIconProps>(
     ({ onClick }, ref) => {
          const bills = useSelector((state: RootState) => state.bills);

          return (
               <StyledDivEllipsisWrapper bills={bills}>
                    <StyledButtonEllipsis
                         aria-label="Open Menu"
                         onClick={onClick}
                         ref={ref}
                    >
                         <FontAwesomeIcon icon={faEllipsisVertical} size="lg" />
                    </StyledButtonEllipsis>
               </StyledDivEllipsisWrapper>
          );
     }
);

export default EllipsisIcon;
