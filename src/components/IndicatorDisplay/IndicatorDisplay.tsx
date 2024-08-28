import { formatCountryCurrency } from "../../utils/currencyFormat";
import {
     StyledLiItem,
     StyledSpanLabel,
     StyledSpanAmount,
} from "./IndicatorDisplayStyles";
import { IndicatorDisplayProps } from "./IndicatorDisplayTypes";

export default function IndicatorDisplay({
     label,
     amount,
     isPercentage,
     children,
}: IndicatorDisplayProps) {
     let formattedAmount;

     if (!isPercentage) {
          formattedAmount = formatCountryCurrency(amount);
     }

     return (
          <StyledLiItem amount={amount}>
               <StyledSpanLabel>{label}</StyledSpanLabel>
               <StyledSpanAmount>
                    {formattedAmount ? formattedAmount : `${amount}%`}
                    {children}
               </StyledSpanAmount>
          </StyledLiItem>
     );
}
