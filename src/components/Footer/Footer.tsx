import { StyledDivFooter, StyledALink } from "./FooterStyles";

export default function Footer() {
     return (
          <StyledDivFooter>
               Kiwi Monthly Bills Tracker by&nbsp;
               <StyledALink
                    data-replace="Henrique Pochmann"
                    href="https://henriquepcm.com/"
                    target="blank"
               >
                    <span>Henrique Pochmann</span>
               </StyledALink>
          </StyledDivFooter>
     );
}
