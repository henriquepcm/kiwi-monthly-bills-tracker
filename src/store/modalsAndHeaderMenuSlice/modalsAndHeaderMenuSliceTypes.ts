export interface ModalAndMenuState {
     isOpen: boolean;
     id: number | null;
}

export interface ModalsAndMenuState {
     addBillModal: ModalAndMenuState;
     addIncomeModal: ModalAndMenuState;
     editIncomeModal: ModalAndMenuState;
     confirmIncomeDeletionModal: ModalAndMenuState;
     confirmAllBillsDeletionModal: ModalAndMenuState;
     editBillModal: ModalAndMenuState;
     confirmBillDeletionModal: ModalAndMenuState;
     headerMenu: ModalAndMenuState;
}

export interface OpenClosePayload {
     name: keyof ModalsAndMenuState;
     id?: number | null;
}
