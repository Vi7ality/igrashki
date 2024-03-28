import { IoCheckbox } from "react-icons/io5";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import styled from "styled-components";

export const LabelStyled = styled.label`
display: flex;
align-items: center;
gap: 10px;

& span {
    font-weight: 600;
}
`

export const CheckWrapper = styled.div`
width: 24px;
height: 24px;
`
export const UncheckedIcon = styled(MdOutlineCheckBoxOutlineBlank)`
width: 24px;
height: 24px;
fill: ${p => p.theme.colors.lightGrey};
`

export const CheckedIcon = styled(IoCheckbox)`
width: 24px;
height: 24px;
fill: ${p => p.theme.colors.baseBlue};
`
export const TextStyled= styled.p`
font-size: 14px;
`
export const FlexWrap = styled.div`
display: flex;
`
