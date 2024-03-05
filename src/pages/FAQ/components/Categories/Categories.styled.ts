import styled from "styled-components";

export const CategoriesWrap = styled.div`
  /* margin-top: 25px; */
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const CategoryBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  padding: 11px 23px;
  color: ${props => props.theme.colors.baseblue};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3;
  border-radius: 20px;
  border: 2px solid ${props => props.theme.colors.baseblue};

  &.selected {
    background-color: #46409C;
    color: #fff;
  }
`;