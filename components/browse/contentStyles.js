import styled from 'styled-components';

export const Content = styled.section``;

export const Billboard = styled.div`
  color: #fff;
  z-index: 0;
`;

export const Video = styled.div`
  width: 100%;
  height: 100vh;
  z-index: -99;

  .trailer {
    pointer-events: none;
    z-index: 0;

    > div {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 115vh;
      z-index: 0;
      pointer-events: none;

      iframe {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 115vh;
        pointer-events: none;
        z-index: 0;
        transform: translate(-50%, -50%);

        @media (min-aspect-ratio: 16/9) {
          height: 56.25vw;
        }

        @media (max-aspect-ratio: 16/9) {
          width: 177.78vh;
        }
      }
    }
  }

  @media (max-width: 62.5em) {
    height: 50vh;
    > div {
      height: 65vh;
    }
  }
`;

export const Mute = styled.div`
  position: absolute;
  top: 75vh;
  right: 6rem;
  color: #ffffff9f;
  width: 5.8rem;
  height: 5.8rem;
  border-radius: 50%;
  border: 1px solid #ffffff9f;
  z-index: 1;
  transition: all 0.35s;
  cursor: pointer;

  svg {
    fill: currentColor;
    width: 100%;
    height: 100%;
    display: inline-block;
    user-select: none;
    padding: 1.35rem;
  }
`;

// icons
export const MuteIcon = () => (
  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4.34 2.93L2.93 4.34 7.29 8.7 7 9H3v6h4l5 5v-6.59l4.18 4.18c-.65.49-1.38.88-2.18 1.11v2.06c1.34-.3 2.57-.92 3.61-1.75l2.05 2.05 1.41-1.41L4.34 2.93zM10 15.17L7.83 13H5v-2h2.83l.88-.88L10 11.41v3.76zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zm-7-8l-1.88 1.88L12 7.76zm4.5 8c0-1.77-1.02-3.29-2.5-4.03v1.79l2.48 2.48c.01-.08.02-.16.02-.24z"></path>
  </svg>
);

export const NotMuteIcon = () => (
  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z"></path>
  </svg>
);
