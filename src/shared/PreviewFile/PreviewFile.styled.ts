import styled from 'styled-components';

export const PreviewContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PreviewLabel = styled.label`
  font-size: 12px;
  color: gray;
  margin-top: 5px;
`;

export const RelWrap = styled.div`
  position: relative;
`;

export const DeleteBtn = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: red;
  opacity: 0;
  transition: opacity
    ${p => p.theme.transition.function && p.theme.transition.duration};
  &:hover {
    opacity: 0.3;
  }
`;

export const XIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 30%;
  height: 30%;
  color: white;
`;
