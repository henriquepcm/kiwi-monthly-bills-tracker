// Libraries
import { useDispatch, useSelector } from "react-redux";
import { forwardRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faPlus,
     faXmark,
     faSquareCheck,
     faSquare,
     faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";

// Utils
import { toggleAllBillPaidStatus } from "../../store/billsSlice/billsSlice";
import {
     open,
     close,
} from "../../store/modalsAndHeaderMenuSlice/modalsAndHeaderMenuSlice";

// Styles
import {
     StyledDivMenuWrapper,
     StyledUlMenu,
     StyledLiMenuItem,
} from "./MenuStyles";

// Types
import { RootState } from "../../store/store";

const HeaderMenu = forwardRef<HTMLDivElement>((_, ref) => {
     //Menu options states
     const bills = useSelector((state: RootState) => state.bills);
     const dispatch = useDispatch();
     const [showAddIncomeOption, setShowAddIncomeOption] = useState(true);
     const areAllBillsPaid = bills.every((bill) => bill.isPaid);
     const areAllBillsUnpaid = bills.every((bill) => !bill.isPaid);
     const hasBills = bills.length > 0;

     // Check if Income has been already added
     useEffect(() => {
          const storedIncome = localStorage.getItem("Income");
          if (storedIncome) {
               setShowAddIncomeOption(false);
          }
     }, []);

     const handleAllPaidStatus = (areAllPaid: boolean) => {
          dispatch(close({ name: "headerMenu" }));
          dispatch(toggleAllBillPaidStatus({ isPaid: areAllPaid }));
     };

     return (
          <StyledDivMenuWrapper ref={ref}>
               <StyledUlMenu>
                    <StyledLiMenuItem
                         onClick={() =>
                              dispatch(open({ name: "addBillModal" }))
                         }
                    >
                         <FontAwesomeIcon icon={faPlus} />
                         <span>Add bill</span>
                    </StyledLiMenuItem>
                    {hasBills && (areAllBillsUnpaid || !areAllBillsPaid) && (
                         <StyledLiMenuItem
                              onClick={() => handleAllPaidStatus(true)}
                         >
                              <FontAwesomeIcon icon={faSquareCheck} />
                              <span>Mark all as paid</span>
                         </StyledLiMenuItem>
                    )}
                    {hasBills && (areAllBillsPaid || !areAllBillsUnpaid) && (
                         <StyledLiMenuItem
                              onClick={() => handleAllPaidStatus(false)}
                         >
                              <FontAwesomeIcon icon={faSquare} />
                              <span>Mark all as unpaid</span>
                         </StyledLiMenuItem>
                    )}
                    {hasBills && (
                         <StyledLiMenuItem
                              onClick={() =>
                                   dispatch(
                                        open({
                                             name: "confirmAllBillsDeletionModal",
                                        })
                                   )
                              }
                         >
                              <FontAwesomeIcon icon={faXmark} />
                              <span>Delete all bills</span>
                         </StyledLiMenuItem>
                    )}

                    {hasBills && showAddIncomeOption && (
                         <StyledLiMenuItem
                              onClick={() =>
                                   dispatch(open({ name: "addIncomeModal" }))
                              }
                         >
                              <FontAwesomeIcon icon={faHandHoldingDollar} />
                              <span>Add income</span>
                         </StyledLiMenuItem>
                    )}
                    {!showAddIncomeOption && (
                         <StyledLiMenuItem
                              onClick={() =>
                                   dispatch(open({ name: "editIncomeModal" }))
                              }
                         >
                              <FontAwesomeIcon icon={faHandHoldingDollar} />
                              <span>Edit income</span>
                         </StyledLiMenuItem>
                    )}
               </StyledUlMenu>
          </StyledDivMenuWrapper>
     );
});
export default HeaderMenu;
