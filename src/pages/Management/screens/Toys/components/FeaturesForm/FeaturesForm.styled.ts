import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FeaturesHead = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

export const AddBtn = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
`;

export const AddFeatureWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
`;

export const FeatureInput = styled.input`
  padding: 5px 10px;
  border: solid 1px #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
`;

export const SaveBtn = styled.button`
  background-color: #168b1a;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
`;

export const FeatureItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

export const RemoveBtn = styled.button`
  background-color: #f44336;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
`;
