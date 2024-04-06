import styled from "styled-components";

export const ToyItemStyled = styled.li`
width: 350px;
height: 365px;
border-radius: 10px;
background-color: ${p => p.theme.colors.white};
`

export const ImageWrap = styled.div`
width: 100%;
height: 201px;
border-radius: 10px;
overflow: hidden;
padding: 5px 5px 0 5px;
`

export const ContentWrap = styled.div`
padding: 15px 20px 25px 20px;
`

export const ToyName = styled.p`
padding-left: 15px;
padding-right: 15px;
margin-bottom: 40px;
`

export const FlexWrap = styled.div`
display: flex;
justify-content: space-between;
`

export const Category = styled.div`
border-radius: 10px;
padding: 6px 10px;
background-color: ${p => p.theme.colors.bgWhite};
font-weight: 600;
font-size: 12px;
`