import { Field } from "formik";
import { IoCheckbox } from "react-icons/io5";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import styled from "styled-components";

export const LabelStyled = styled.label`
display: flex;
align-items: center;
gap: 10px;
margin-bottom: 20px;

& span {
    font-weight: 600;
}
`

export const CheckWrapper = styled.div`
width: 24px;
height: 24px;
`
export const HiddenCheckbox = styled(Field)`
position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`
export const UncheckedIcon = styled(MdOutlineCheckBoxOutlineBlank)`
width: 24px;
height: 24px;
flex-shrink: 0;
fill: ${p => p.theme.colors.lightGrey};
`

export const CheckedIcon = styled(IoCheckbox)`
width: 24px;
height: 24px;
flex-shrink: 0;
fill: ${p => p.theme.colors.baseBlue};
`
export const TextStyled= styled.p`
font-size: 14px;
`
export const FlexWrap = styled.div`
display: flex;
gap: 58px;

@media ${p => p.theme.device.tablet}{
  gap: 85px;
}
`
