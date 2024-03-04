import styled from "styled-components";

export const CategoriesWrap = styled.div`
  margin-top: 25px;
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  /* max-width: 900px; */
`;

export const CategoryBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  padding: 16px 24px;
  color: ${props => props.theme.colors.baseblue};
  font-size: 15px;
  font-family: "Factor A";
  font-weight: 700;
  letter-spacing: 0.9px;
  text-transform: uppercase;
  border-radius: 32px;
  border: 2.2px solid ${props => props.theme.colors.baseblue};

  &.selected {
    background-color: #46409C;
    color: #fff;
    
  }
`;
