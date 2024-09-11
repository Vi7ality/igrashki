import styled from 'styled-components';

export const ImageUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ImageItem = styled.li`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const RemoveImgBtn = styled.button`
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
