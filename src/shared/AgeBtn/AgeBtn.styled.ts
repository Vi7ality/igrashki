import styled from "styled-components";

export const BtnStyled = styled.button`
position: relative;
width: 28px;
height: 28px;

&:disabled {
    pointer-events: none;
}
`

export const AgeIcon = styled.svg`
width: 28px;
height: 28px;
`

export const AgeText = styled.p`
position: absolute;
bottom: 0;
left: 0;
z-index: 3;
font-weight: 600;
font-size: 12px;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`