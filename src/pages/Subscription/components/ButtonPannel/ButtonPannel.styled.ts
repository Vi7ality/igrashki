import styled from "styled-components";

type PropType = {
    position: 'auth' | 'cart';
}

export const PannelWrap = styled.div<PropType>`
display: ${p => p.position === 'auth' ? 'none' : 'block'};
margin-top: 40px;

@media ${p => p.theme.device.tablet} {
    display: ${p => p.position === 'cart' ? 'none' : 'block'};
    margin-top: 30px;
}
`

export const SubmitBtn = styled.button`
display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;
width: 100%;
height: 48px;
background-color: ${p => p.theme.colors.accent};
font-weight: 600;
margin-bottom: 20px;
&:disabled {
      background-color: ${props => props.theme.colors.lightGrey};
      color: ${props => props.theme.colors.mutedGrey2};
    }
`
export const LoginBtn = styled.button`
display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;
border: 2px solid ${p => p.theme.colors.baseBlue};
width: 100%;
height: 48px;
font-weight: 600;
color: ${p => p.theme.colors.baseBlue};
`
export const WarnMsg = styled.p`
color: ${p => p.theme.colors.warnRed};
font-size: 14px;
`

export const DecorWrap = styled.div`
display: flex;
`
export const DecorText = styled.span`
font-size: 14px;
color: ${p => p.theme.colors.mutedGrey2};
margin-left: 11px;
margin-right: 11px;
margin-bottom: 20px;
`

export const DecorLine = styled.hr`
border: none;
border-top: solid 1px ${p => p.theme.colors.lightGrey};
height: 1px;
width: 100%;
`

export const TextStyled = styled.p`
font-size: 14px;
text-align: center;
margin-bottom: 10px;
`