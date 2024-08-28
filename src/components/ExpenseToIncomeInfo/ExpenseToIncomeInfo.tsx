import {
     StyledDivIconWrapper,
     StyledSpanIcon,
     StyledDivMessage,
} from "./ExpenseToIncomeInfoStyles";
import { ExpenseToIncomeInfoProps } from "./ExpenseToIncomInfoTypes";

export default function ExpenseToIncomeInfo({
     amount,
}: ExpenseToIncomeInfoProps) {
     const amountAsNumber = Number(amount);

     if (amountAsNumber > 0 && amountAsNumber <= 50) {
          return (
               <StyledDivIconWrapper>
                    <StyledSpanIcon>🥝</StyledSpanIcon>
                    <StyledDivMessage>
                         Good job! Your finances are balanced. Keep up the good
                         work.
                    </StyledDivMessage>
               </StyledDivIconWrapper>
          );
     }
     if (amountAsNumber > 50) {
          return (
               <StyledDivIconWrapper>
                    <StyledSpanIcon>🧨</StyledSpanIcon>
                    <StyledDivMessage>
                         Careful! Your fixed costs should be less than 50% of
                         your income.
                    </StyledDivMessage>
               </StyledDivIconWrapper>
          );
     }
     return null;
}
