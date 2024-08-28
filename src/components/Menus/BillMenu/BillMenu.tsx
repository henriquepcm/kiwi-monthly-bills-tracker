// Libraries
import { forwardRef } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faXmark,
     faSquareCheck,
     faPenToSquare,
     faSquare,
} from "@fortawesome/free-solid-svg-icons";

// Hooks
import { useNotify } from "../../../hooks/useNotify";

// Utils
import { open } from "../../../store/modalsAndHeaderMenuSlice/modalsAndHeaderMenuSlice";
import { toggleBillPaidStatus } from "../../../store/billsSlice/billsSlice";

// Styles
import {
     StyledDivMenuWrapper,
     StyledUlMenu,
     StyledLiMenuItem,
} from "../MenuStyles";

//Types
import { BillMenuProps } from "./BillMenuTypes";

const BillMenu = forwardRef<HTMLDivElement, BillMenuProps>(
     ({ onOpenConfirmBillDeletionModal, bill }, ref) => {
          const { isPaid, name, id } = bill;
          const { notifyTheUser } = useNotify();
          const dispatch = useDispatch();

          const handlePaidStatus = (isPaid: boolean): void => {
               isPaid
                    ? notifyTheUser(`"${name}" has been marked as unpaid.`)
                    : notifyTheUser(`"${name}" has been marked as paid.`);
               dispatch(toggleBillPaidStatus({ id, isPaid }));
          };

          return (
               <StyledDivMenuWrapper ref={ref}>
                    <StyledUlMenu>
                         {isPaid ? (
                              <StyledLiMenuItem
                                   onClick={() => handlePaidStatus(false)}
                              >
                                   <FontAwesomeIcon icon={faSquare} />
                                   <span aria-label="change bill paid status">
                                        Unpaid
                                   </span>
                              </StyledLiMenuItem>
                         ) : (
                              <StyledLiMenuItem
                                   onClick={() => handlePaidStatus(true)}
                              >
                                   <FontAwesomeIcon icon={faSquareCheck} />
                                   <span aria-label="change bill paid status">
                                        Paid
                                   </span>
                              </StyledLiMenuItem>
                         )}
                         <StyledLiMenuItem
                              onClick={() =>
                                   dispatch(
                                        open({ name: "editBillModal", id: id })
                                   )
                              }
                         >
                              <FontAwesomeIcon icon={faPenToSquare} />
                              <span aria-label="edit bill">Edit bill</span>
                         </StyledLiMenuItem>
                         <StyledLiMenuItem
                              onClick={() => onOpenConfirmBillDeletionModal()}
                         >
                              <FontAwesomeIcon icon={faXmark} />
                              <span aria-label="delete bill">Delete bill</span>
                         </StyledLiMenuItem>
                    </StyledUlMenu>
               </StyledDivMenuWrapper>
          );
     }
);
export default BillMenu;
