import styled, { createGlobalStyle } from 'styled-components';

export const Player = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #000;
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const Wrapper = styled.div`
  width: 100vw;
`;

export const BackButton = styled.div`
  position: absolute;
  top: 5%;
  left: 1%;

  svg {
    fill: white;
    font-size: 3rem;
    width: 3.5rem;
    height: 3.5rem;
    margin: 2rem;
    cursor: pointer;
  }
`;

export const FullScreen = createGlobalStyle`
body {
  overflow: hidden;
}
`;

//icon

export const BackIcon = () => (
  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
  </svg>
);
