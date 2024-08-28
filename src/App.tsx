// Libraries
import { useDispatch, useSelector } from "react-redux";

// Hooks
import { useNotify } from "./hooks/useNotify";
import { useIncome } from "./hooks/useIncome";

// Utils
import { deleteAllBills } from "./store/billsSlice/billsSlice";
import { close } from "./store/modalsAndHeaderMenuSlice/modalsAndHeaderMenuSlice";

// Styles
import GlobalStyle from "./styles/GlobalStyle";
import "react-toastify/dist/ReactToastify.css";

// Components
import Modal from "./components/Modal/Modal";
import Header from "./components/Header/Header";
import FormAddBill from "./components/Forms/FormAddBill/FormAddBill";
import BillsList from "./components/BillsList/BillsList";
import FormIncome from "./components/Forms/FormIncome/FormIncome";
import ConfirmDeletion from "./components/ConfirmDeletion/ConfirmDeletion";
import CustomToastContainer from "./components/CustomToast/CustomToast";
import IndicatorsList from "./components/IndicatorsList/IndicatorsList";

//Types
import { RootState } from "./store/store";
import Footer from "./components/Footer/Footer";

function App() {
     const {
          income,
          setIncome,
          addIncomeToLocalStorage,
          removeIncomeFromLocalStorage,
     } = useIncome();

     const { notifyTheUser } = useNotify();

     const dispatch = useDispatch();

     const isAddBillModalOpen = useSelector(
          (state: RootState) => state.modalsAndHeaderMenu.addBillModal.isOpen
     );
     const isConfirmAllBillsDeletionModalOpen = useSelector(
          (state: RootState) =>
               state.modalsAndHeaderMenu.confirmAllBillsDeletionModal.isOpen
     );
     const isAddIncomeModalOpen = useSelector(
          (state: RootState) => state.modalsAndHeaderMenu.addIncomeModal.isOpen
     );
     const isEditIncomeModalOpen = useSelector(
          (state: RootState) => state.modalsAndHeaderMenu.editIncomeModal.isOpen
     );
     const isConfirmIncomeDeletionModalOpen = useSelector(
          (state: RootState) =>
               state.modalsAndHeaderMenu.confirmIncomeDeletionModal.isOpen
     );

     const handleAddIncome = (newIncome: string): void => {
          addIncomeToLocalStorage(newIncome);
          setIncome(newIncome);
          notifyTheUser("Income value has been saved.");
          dispatch(close({ name: "addIncomeModal" }));
     };

     const handleEditIncome = (newIncome: string): void => {
          addIncomeToLocalStorage(newIncome);
          setIncome(newIncome);
          notifyTheUser("Income value has been edited.");
          dispatch(close({ name: "editIncomeModal" }));
     };

     const handleDeleteIncome = (confirm: boolean): void => {
          if (confirm) {
               setIncome("");
               removeIncomeFromLocalStorage();
               dispatch(close({ name: "confirmIncomeDeletionModal" }));
               notifyTheUser("Income value has been deleted.");
          }
          dispatch(close({ name: "confirmIncomeDeletionModal" }));
     };

     const handleRemoveAllBills = (confirm: boolean): void => {
          if (confirm) {
               notifyTheUser("All bills have been deleted.");
               dispatch(deleteAllBills());
          }
          dispatch(close({ name: "confirmAllBillsDeletionModal" }));
     };

     return (
          <>
               <GlobalStyle />
               {isConfirmIncomeDeletionModalOpen && (
                    <Modal
                         title="Are you sure you wanna delete the monthly income?"
                         onClose={() =>
                              dispatch(
                                   close({ name: "confirmIncomeDeletionModal" })
                              )
                         }
                         hasButtonClose={false}
                    >
                         <ConfirmDeletion onConfirm={handleDeleteIncome} />
                    </Modal>
               )}
               {isConfirmAllBillsDeletionModalOpen && (
                    <Modal
                         title="Are you sure you wanna delete all bills?"
                         onClose={() =>
                              dispatch(
                                   close({
                                        name: "confirmAllBillsDeletionModal",
                                   })
                              )
                         }
                         hasButtonClose={false}
                    >
                         <ConfirmDeletion onConfirm={handleRemoveAllBills} />
                    </Modal>
               )}
               {isAddBillModalOpen && (
                    <Modal
                         title="Add bill to pay"
                         onClose={() =>
                              dispatch(close({ name: "addBillModal" }))
                         }
                         hasButtonClose={true}
                    >
                         <FormAddBill />
                    </Modal>
               )}
               {isAddIncomeModalOpen && (
                    <Modal
                         title="What's your monthly income?"
                         onClose={() =>
                              dispatch(close({ name: "addIncomeModal" }))
                         }
                         hasButtonClose={true}
                    >
                         <FormIncome
                              income={income}
                              onAddIncome={handleAddIncome}
                              mode="add"
                         />
                    </Modal>
               )}
               {isEditIncomeModalOpen && (
                    <Modal
                         title="Edit your monthly income"
                         onClose={() =>
                              dispatch(close({ name: "editIncomeModal" }))
                         }
                         hasButtonClose={true}
                    >
                         <FormIncome
                              income={income}
                              onEditIncome={handleEditIncome}
                              mode="edit"
                         />
                    </Modal>
               )}
               <Header />
               <BillsList />
               <IndicatorsList income={income} />
               <CustomToastContainer />
               <Footer />
          </>
     );
}

export default App;
