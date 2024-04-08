import styled from "styled-components";

export const PannelContainer = styled.div`
display: flex;
justify-content: space-between;
background-color: ${p => p.theme.colors.white};
padding: 20px;
margin-bottom: 20px;

@media ${p => p.theme.device.mobileOnly} {
    flex-direction: column;
    border-radius: 15px;
}

@media ${p => p.theme.device.tablet} {
    align-items: center;
    border-radius: 30px;
}

@media ${p => p.theme.device.desktop} {
padding: 20px 30px;
}
`
export const InputWrap = styled.div`
display: flex;
align-items: center;
gap: 10px;
@media ${p => p.theme.device.mobileOnly} {
flex-direction: column;
align-items: start;
}

@media ${p => p.theme.device.desktop} {
    gap: 20px;
}
`

export const CategoryLabel = styled.p`

`

export const ToyCount = styled.p`
display: flex;
align-items: center;
gap: 10px;
@media ${p => p.theme.device.mobileOnly}{
    margin-top: 34px;
}
@media ${p => p.theme.device.desktop} {
    gap: 15px;
}

span {
font-weight: 700;
font-size: 18px;
}


`