export interface Bill {
     id: number;
     name: string;
     amount: string;
     dueDay: string;
     isPaid: boolean;
     isMenuOpen: boolean;
}

export type BillsState = Bill[];
