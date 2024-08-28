import {
     StyledDivWrapper,
     StyledH2Headline,
     StyledH3Subtitle,
     StyledPNoBills,
} from "./InitialMessageStyles";

export default function InitialMessage() {
     return (
          <>
               <StyledDivWrapper>
                    <StyledH2Headline>
                         Hey there! Ready to track your monthly fixed costs?
                    </StyledH2Headline>
                    <StyledH3Subtitle>
                         Start by clicking on the three-dot menu at the top to
                         add your info.
                    </StyledH3Subtitle>
               </StyledDivWrapper>
               <StyledPNoBills>
                    No data to show. Your bills will show up here.
               </StyledPNoBills>
          </>
     );
}
