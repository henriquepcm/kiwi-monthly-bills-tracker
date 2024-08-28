export interface FormIncomeProps {
     income: string;
     mode: "add" | "edit";
     onAddIncome?: (value: string) => void;
     onEditIncome?: (value: string) => void;
}
