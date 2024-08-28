// Libraries
import { useSelector } from "react-redux";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Hooks
import { useFinancialMetrics } from "../../hooks/useFinancialMetrics";

// Utils
import { showCheckIcon } from "../../utils/showCheckIcon";

// Styles
import { StyledUlIndicators, StyledSpanIcon } from "./IndicatorsListStyles";

// Components
import IndicatorDisplay from "../IndicatorDisplay/IndicatorDisplay";
import ExpenseToIncomeInfo from "../ExpenseToIncomeInfo/ExpenseToIncomeInfo";

// Types
import { IndicatorsListProps } from "./IndicatorsListTypes";
import { RootState } from "../../store/store";

export default function IndicatorsList({ income }: IndicatorsListProps) {
     const {
          billsTotalSum,
          paidBillsTotal,
          pendingBillsTotal,
          moneyLeft,
          expenseRatio,
     } = useFinancialMetrics(Number(income));
     const shouldShowCheckIcon = showCheckIcon(billsTotalSum, paidBillsTotal);
     const bills = useSelector((state: RootState) => state.bills);

     return (
          <StyledUlIndicators>
               {bills.length > 0 ? (
                    <>
                         <IndicatorDisplay
                              label="Total to Pay"
                              amount={String(billsTotalSum)}
                         >
                              {shouldShowCheckIcon ? (
                                   <StyledSpanIcon>
                                        <FontAwesomeIcon icon={faCheck} />
                                   </StyledSpanIcon>
                              ) : null}
                         </IndicatorDisplay>
                         <IndicatorDisplay
                              label="Already Paid"
                              amount={String(paidBillsTotal)}
                         >
                              {shouldShowCheckIcon ? (
                                   <StyledSpanIcon>
                                        <FontAwesomeIcon icon={faCheck} />
                                   </StyledSpanIcon>
                              ) : null}
                         </IndicatorDisplay>
                         <IndicatorDisplay
                              label="Pending to Pay"
                              amount={String(pendingBillsTotal)}
                         />
                         <IndicatorDisplay
                              label="Monthly Income"
                              amount={String(income)}
                         />
                         <IndicatorDisplay
                              label="Money Left"
                              amount={String(moneyLeft)}
                         />
                         <IndicatorDisplay
                              label="Expense to Income Ratio"
                              amount={String(expenseRatio)}
                              isPercentage
                         >
                              <ExpenseToIncomeInfo
                                   amount={String(expenseRatio)}
                              />
                         </IndicatorDisplay>
                    </>
               ) : (
                    ""
               )}
          </StyledUlIndicators>
     );
}
