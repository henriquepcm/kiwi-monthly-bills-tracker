import {
     StyledDivConfirmationWrapper,
     StyledButtonYep,
     StyledButtonNope,
} from "./ConfirmDeletionStyles";
import { ConfirmDeletionProps } from "./ConfirmDeletionTypes";

export default function ConfirmDeletion({ onConfirm }: ConfirmDeletionProps) {
     const handleUsersDecision = (value: boolean) => {
          onConfirm(value);
     };

     return (
          <StyledDivConfirmationWrapper>
               <StyledButtonYep onClick={() => handleUsersDecision(true)}>
                    Yep, delete it
               </StyledButtonYep>
               <StyledButtonNope onClick={() => handleUsersDecision(false)}>
                    Nope
               </StyledButtonNope>
          </StyledDivConfirmationWrapper>
     );
}
