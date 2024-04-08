import styled from "styled-components";

export const PannelContainer = styled.div`
border-radius: 15px;
background-color: ${p => p.theme.colors.white};

@media ${p => p.theme.device.tablet} {
    display: flex;
}
`