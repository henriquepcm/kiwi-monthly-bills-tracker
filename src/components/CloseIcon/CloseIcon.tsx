import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { StyledXMark } from "./CloseIconStyles";
import { CloseIconProps } from "./CloseIconTypes";

export default function CloseIcon({ onClose }: CloseIconProps) {
     return <StyledXMark icon={faXmark} onClick={onClose} />;
}
