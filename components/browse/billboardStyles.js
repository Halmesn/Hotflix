import styled from 'styled-components';

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

export const Mute = styled.button`
  position: absolute;
  background: transparent;
  bottom: 25%;
  right: 6%;
  color: white;
  width: 5.3rem;
  height: 5.3rem;
  border-radius: 50%;
  border: 1px solid white;
  z-index: 2;
  transition: all 0.35s;
  cursor: pointer;

  @media (max-width: 62.5em) {
    bottom: 64%;
    width: 4rem;
    height: 4rem;
    right: 9rem;
  }

  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  svg {
    fill: currentColor;
    width: 100%;
    height: 100%;
    display: inline-block;
    user-select: none;
    padding: 1.35rem;

    @media (max-width: 62.5em) {
      padding: 1rem;
    }
  }
`;

export const Replay = styled(Mute)``;

export const Banner = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 0;
  position: relative;

  @media (max-width: 62.5em) {
    height: 50vh;
  }
  @media (max-width: 37.5em) {
    height: 30vh;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
  background: ${({ showOverlay }) =>
    (showOverlay
      ? `linear-gradient(rgba(20, 20, 20, 0) 60%, rgba(20, 20, 20, 0.95)), `
      : '') +
    'linear-gradient(0.25turn, rgba(20, 20, 20, 0.75), rgba(20, 20, 20, 0))'};

  @media (max-width: 62.5em) {
    height: 50vh;
  }
  @media (max-width: 37.5em) {
    height: 30vh;
  }
`;

export const DetailContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 26.2%;
  left: 3%;
  width: 36%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  z-index: 2;

  @media (max-width: 62.5em) {
    bottom: 64.2%;
    width: 55%;
    left: 5.4%;
  }

  @media (max-width: 37.5em) {
    width: 70%;
    bottom: 74%;
    left: 4.4%;
  }
`;

export const Title = styled.h1`
  line-height: 1.15;
  margin-bottom: 2.5rem;
  text-shadow: 0px 4px 3px rgb(20 20 20 / 40%), 0px 8px 13px rgb(20 20 20 / 10%),
    0px 18px 23px rgb(20 20 20 / 10%);
  transition: transform 1.3s ease;
  font-size: 6rem;

  @media (max-width: 62.5em) {
    font-size: 4rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 37.5em) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  &.small {
    transform-origin: left bottom;
    transform: scale(0.8) translate3d(0px, var(--height), 0px);
    transition-delay: 2200ms;
  }
`;

export const Description = styled.p`
  color: #fff;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  font-size: 1.4vw;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
  transition: all 0.6s ease;
  opacity: 1;

  &.no-desc {
    opacity: 0;
    transform-origin: left bottom;
    transform: translate3d(0px, var(--height), 0px) scaleY(0);
    transition-delay: 2200ms;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 1.5vw;
  white-space: nowrap;
  display: flex;
  line-height: 88%;
`;

export const PlayButton = styled.button`
  appearance: none;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 1.15rem 3.5rem 1.15rem 2.9rem;
  margin-right: 1.44rem;
  user-select: none;
  background-color: white;
  color: black;

  @media (max-width: 62.5em) {
    padding: 0.8rem 1.6rem;
  }

  @media (max-width: 37.5em) {
    padding: 0.6rem 0.8rem;
  }

  :hover {
    background-color: rgba(255, 255, 255, 0.75);
  }

  svg {
    width: 3.5rem;
    height: 3.5rem;
    margin-right: 1.6rem;

    @media (max-width: 62.5em) {
      width: 2.5rem;
      height: 2.5rem;
      margin-right: 0.5rem;
    }

    @media (max-width: 37.5em) {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.5rem;
    }
  }

  span {
    display: block;
    font-size: 2.3rem;
    font-weight: bold;

    @media (max-width: 62.5em) {
      font-size: 1.7rem;
    }

    @media (max-width: 37.5em) {
      font-size: 1.2rem;
    }
  }
`;

export const InfoButton = styled(PlayButton)`
  background-color: rgba(109, 109, 110, 0.7);
  color: white;

  :hover {
    background-color: rgba(109, 109, 110, 0.4);
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

export const PlayIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M6 4l15 8-15 8z" fill="currentColor"></path>
  </svg>
);

export const InfoIcon = () => (
  <svg viewBox="0 0 24 24">
    <path
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 0 0-8-8 8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8zm-9 6v-7h2v7h-2zm1-8.75a1.21 1.21 0 0 1-.877-.364A1.188 1.188 0 0 1 10.75 8c0-.348.123-.644.372-.886.247-.242.54-.364.878-.364.337 0 .63.122.877.364.248.242.373.538.373.886s-.124.644-.373.886A1.21 1.21 0 0 1 12 9.25z"
      fill="currentColor"
    ></path>
  </svg>
);

export const ReplayIcon = () => (
  <svg viewBox="0 0 24 24">
    <path
      d="M20 12.35l1.919-1.371 1.162 1.627-4.08 2.915-4.082-2.915 1.162-1.627L18 12.349V12c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.93 0 3.68-.79 4.94-2.06l1.42 1.42A8.954 8.954 0 0 1 11 21a9 9 0 1 1 9-9v.35z"
      fill="currentColor"
    ></path>
  </svg>
);
