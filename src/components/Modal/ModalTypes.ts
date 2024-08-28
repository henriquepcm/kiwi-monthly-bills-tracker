import { ReactNode } from "react";

export interface ModalProps {
     title: string;
     children: ReactNode;
     onClose: () => void;
     hasButtonClose: boolean;
}
