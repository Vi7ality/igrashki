import styled from "styled-components";
import Container from "../../shared/Container";

export const FlexContainer = styled(Container)`
display: flex;
gap: 20px;
padding-bottom: 20px;

@media ${p => p.theme.device.mobileOnly} {
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 20px;
}

@media ${p => p.theme.device.tablet} {
    padding-top: 40px;
}
@media ${p => p.theme.device.deskyop} {
    padding-top: 60px;
    padding-bottom: 80px;
}
`