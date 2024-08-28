import { useState } from "react";
import { useNotify } from "../useNotify";
import { useDispatch } from "react-redux";
import { deleteBill } from "../../store/billsSlice/billsSlice";
import {
     open,
     close,
} from "../../store/modalsAndHeaderMenuSlice/modalsAndHeaderMenuSlice";
import { useBillDeletionProps } from "./useBillDeletionTypes";

export const useBillDeletion = (bill: useBillDeletionProps) => {
     const { name, id } = bill;
     const dispatch = useDispatch();
     const { notifyTheUser } = useNotify();
     const [billToBeDeleted, setBillToBeDeleted] = useState({
          name: "",
          id,
     });

     const handleOpenConfirmBillDeletionModal = () => {
          setBillToBeDeleted({ name, id });
          dispatch(open({ name: "confirmBillDeletionModal", id: id }));
     };

     const handleDeleteBill = (confirm: boolean) => {
          if (confirm && billToBeDeleted) {
               notifyTheUser(`"${name}" has been deleted.`);
               dispatch(deleteBill({ id }));
          }
          setBillToBeDeleted({
               name: "",
               id,
          });
          dispatch(close({ name: "confirmBillDeletionModal" }));
     };

     return {
          billToBeDeleted,
          handleOpenConfirmBillDeletionModal,
          handleDeleteBill,
     };
};
