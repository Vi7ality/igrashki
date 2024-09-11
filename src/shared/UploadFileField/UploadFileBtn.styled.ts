import styled from 'styled-components';

export const Input = styled.input`
  display: none;
`;

export const BtnWrap = styled.div`
  position: relative;
`;

export const BtnLabel = styled.label`
  background-color: rgb(100 21 255);
  border-radius: 5px;
  color: #ffffff;
  text-align: center;
  padding: 8px;
  width: 140px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Ext = styled.span`
  color: lightgray;
  font-size: 10px;
`;

export const FlexCont = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
