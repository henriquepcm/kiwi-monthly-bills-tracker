import { forwardRef } from "react";
import {
     ModalDivWrapper,
     ModalDivContent,
     ModalDivCloseIcon,
     ModalSpanTitle,
} from "./ModalStyles";
import CloseIcon from "../CloseIcon/CloseIcon";
import { ModalProps } from "./ModalTypes";

const Modal = forwardRef<HTMLDivElement, ModalProps>(
     ({ title, children, onClose, hasButtonClose }, ref) => {
          return (
               <ModalDivWrapper onClick={onClose}>
                    <ModalDivContent
                         onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                              e.stopPropagation()
                         }
                         ref={ref}
                    >
                         <ModalDivCloseIcon>
                              {hasButtonClose && (
                                   <CloseIcon onClose={onClose} />
                              )}
                         </ModalDivCloseIcon>

                         <ModalSpanTitle>{title}</ModalSpanTitle>
                         {children}
                    </ModalDivContent>
               </ModalDivWrapper>
          );
     }
);
export default Modal;
