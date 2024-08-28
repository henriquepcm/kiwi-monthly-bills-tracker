// Libraries
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Custom Hooks
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useBillDeletion } from "../../hooks/useBIllDeletion/useBillDeletion";

// Utilities
import { toggleBillMenu } from "../../store/billsSlice/billsSlice";
import { close } from "../../store/modalsAndHeaderMenuSlice/modalsAndHeaderMenuSlice";
import { convertToOrdinal } from "../../utils/convertToOrdinal";
import { formatCountryCurrency } from "../../utils/currencyFormat";
import { isThisBillMenuOpen } from "../../utils/isBillWithThisIdOpen";

// Styles
import { StyledDivBill, StyledSpanName } from "./BillItemStyles";

// Components
import Modal from "../Modal/Modal";
import FormEditBill from "../Forms/FormEditBill/FormEditBill";
import BillMenu from "../Menus/BillMenu/BillMenu";
import EllipsisIcon from "../EllipsisIcon/EllipsisIcon";
import ConfirmDeletion from "../ConfirmDeletion/ConfirmDeletion";

// Types
import { BillItemProps } from "./BillItemTypes";
import { RootState } from "../../store/store";

export default function BillItem({ bill }: BillItemProps) {
     const { id, name, amount, dueDay, isPaid } = bill;
     const dueDayAsOrdinal = convertToOrdinal(dueDay);
     const formattedAmount = formatCountryCurrency(amount);
     const billMenuRef = useRef<HTMLDivElement | null>(null);
     const ellipsisRef = useRef<HTMLButtonElement | null>(null);
     const dispatch = useDispatch();
     const {
          billToBeDeleted,
          handleOpenConfirmBillDeletionModal,
          handleDeleteBill,
     } = useBillDeletion(bill);

     const isBillMenuOpen = useSelector((state: RootState) =>
          isThisBillMenuOpen(state, id)
     );
     const isEditBillModalOpen = useSelector(
          (state: RootState) =>
               state.modalsAndHeaderMenu.editBillModal.isOpen &&
               state.modalsAndHeaderMenu.editBillModal.id === id
     );
     const isConfirmBillDeletionModalOpen = useSelector(
          (state: RootState) =>
               state.modalsAndHeaderMenu.confirmBillDeletionModal.id
     );
     useState(false);

     useOutsideClick(billMenuRef, ellipsisRef, () =>
          dispatch(toggleBillMenu({ id }))
     );

     return (
          <>
               {isConfirmBillDeletionModalOpen && billToBeDeleted?.name && (
                    <Modal
                         title={`Are you sure you wanna delete "${name}"?`}
                         onClose={() =>
                              dispatch(
                                   close({ name: "confirmBillDeletionModal" })
                              )
                         }
                         hasButtonClose={false}
                    >
                         <ConfirmDeletion onConfirm={handleDeleteBill} />
                    </Modal>
               )}
               {isEditBillModalOpen && (
                    <Modal
                         title="Edit bill"
                         onClose={() =>
                              dispatch(close({ name: "editBillModal" }))
                         }
                         hasButtonClose={true}
                    >
                         <FormEditBill
                              billStoredData={bill}
                              onOpenConfirmBillDeletionModal={
                                   handleOpenConfirmBillDeletionModal
                              }
                         />
                    </Modal>
               )}
               {isBillMenuOpen && (
                    <BillMenu
                         bill={bill}
                         ref={billMenuRef}
                         onOpenConfirmBillDeletionModal={
                              handleOpenConfirmBillDeletionModal
                         }
                    />
               )}
               <StyledDivBill isPaid={isPaid}>
                    <div>
                         <StyledSpanName>{name}</StyledSpanName>
                         {formattedAmount}
                    </div>
                    <div>{dueDayAsOrdinal}</div>
                    <EllipsisIcon
                         onClick={() => dispatch(toggleBillMenu({ id: id }))}
                         ref={ellipsisRef}
                    />
               </StyledDivBill>
          </>
     );
}
