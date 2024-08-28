// Libraries
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

// Hooks
import { useOutsideClick } from "../../hooks/useOutsideClick";

// Utils
import {
     close,
     toggleHeaderMenu,
} from "../../store/modalsAndHeaderMenuSlice/modalsAndHeaderMenuSlice";

// Styles
import { StyledHeader } from "./HeaderStyles";

// Components
import Logo from "../Logo/Logo";
import HeaderMenu from "../Menus/HeaderMenu";
import EllipsisIcon from "../EllipsisIcon/EllipsisIcon";

// Types
import { RootState } from "../../store/store";

const Header = () => {
     const isMenuOpen = useSelector(
          (state: RootState) => state.modalsAndHeaderMenu.headerMenu.isOpen
     );

     const dispatch = useDispatch();

     const menuRef = useRef<HTMLDivElement | null>(null);
     const ellipsisRef = useRef<HTMLButtonElement | null>(null);

     useOutsideClick(menuRef, ellipsisRef, () =>
          dispatch(close({ name: "headerMenu" }))
     );

     return (
          <>
               {isMenuOpen && <HeaderMenu ref={menuRef} />}
               <StyledHeader>
                    <Logo />
                    <h1>Monthly Bills Tracker</h1>
                    <EllipsisIcon
                         onClick={() => dispatch(toggleHeaderMenu())}
                         ref={ellipsisRef}
                    />
               </StyledHeader>
          </>
     );
};

export default Header;
