import styled from "styled-components";

export const MobileMenuSection = styled.section`
  box-sizing: border-box;
  position: fixed;
  padding: 18px 16px;
  background-color: white;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 100% 100%;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  transform: translateY(-100%);

  z-index: 999;
  opacity: 1;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out, transform 0.3s ease-in-out ;

  &.open {
    transform: translateY(0%);
    opacity: 1;
    height: 100vh;
    width: 100vw;
    visibility: visible; 
}`