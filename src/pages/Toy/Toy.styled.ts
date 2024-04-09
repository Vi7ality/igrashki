import styled from "styled-components";
import Container from "../../shared/Container";

export const FlexContainer = styled(Container)`
display: flex;
gap: 20px;
padding-top: 20px;
padding-bottom: 20px;

@media ${p => p.theme.device.mobileOnly} {
    flex-direction: column;
}

@media ${p => p.theme.device.tablet} {
    padding-top: 40px;
}
@media ${p => p.theme.device.desktop} {
    padding-top: 60px;
    padding-bottom: 80px;
}
`