import styled, { createGlobalStyle } from 'styled-components';
import {
  Video as BillboardVideo,
  Mute as BillboardMute,
  PlayButton as BillboardPlayButton,
} from './billboardStyles';

export const Details = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const FullScreen = createGlobalStyle`
body {
  overflow: hidden;
}
`;

export const Wrapper = styled.div`
  width: 92.8rem;
  background: #181818;
  margin-top: 3.2rem;
  border-radius: 0.8rem;
  overflow: auto;
  position: relative;

  @media (max-width: 62.5em) {
    width: 95vw;
  }
  @media (max-width: 37.5em) {
    width: 100vw;
    height: 100vh;
    margin: 0;
  }
`;

export const Video = styled(BillboardVideo)`
  height: 51.2rem;
  width: 100%;

  .details {
    pointer-events: none;
    z-index: 0;
    > div {
      position: relative;
      overflow: hidden;
      z-index: 0;
      pointer-events: none;
      iframe {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 125%;
        height: 80rem;
        pointer-events: none;
        z-index: 0;
        transform: translate(-50%, -50%);
      }
    }
  }
  @media (max-width: 37.5em) {
    height: 28.8rem;
    iframe {
      width: 128%;
      height: 32rem;
    }
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 51.2rem;
  position: relative;

  @media (max-width: 37.5em) {
    height: 28.8rem;
  }
`;

export const Close = styled.div`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  z-index: 10;
  cursor: pointer;
  svg {
    background-color: #181818;
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
    padding: 0.35rem;
    fill: white;
    @media (max-width: 37.5em) {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
  @media (max-width: 37.5em) {
    top: 2.4rem;
    right: 3.8rem;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 51.2rem;
  z-index: 0;
  background: linear-gradient(rgba(20, 20, 20, 0) 60%, rgba(20, 20, 20, 0.95));

  @media (max-width: 37.5em) {
    height: 28.8rem;
  }
`;

export const Summary = styled.div`
  padding: 1.6rem 3.2rem 0;
  display: flex;
  @media (max-width: 37.5em) {
    padding: 1.6rem 1.6rem 0;
  }
`;

export const Panel = styled.div`
  padding: 1.6rem 1.6rem 0;
  p {
    margin-bottom: 1.6rem;
  }
  &.major-details {
    flex: 5;
    .air-date {
      span {
        margin-right: 1.6rem;
      }
    }
    .overview {
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 1.5;
    }
  }
  &.minor-details {
    flex: 2;
  }

  @media (max-width: 37.5em) {
    padding: 0.8rem 0.8rem 0;
    p {
      margin-bottom: 0.8rem;
    }
    &.major-details {
      .air-date {
        span {
          margin-right: 0.8rem;
        }
      }
      .overview {
        font-weight: 400;
        font-size: 1.28rem;
      }
    }
  }
`;

export const Title = styled.div`
  margin: 0 0 0.8rem;
  font-size: 3.2rem;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 42rem;
  left: 3rem;
  @media (max-width: 37.5em) {
    top: 24rem;
  }
`;

export const PlayButton = styled(BillboardPlayButton)``;

export const Mute = styled(BillboardMute)`
  top: 41.5rem;
  right: 3rem;

  @media (max-width: 37.5em) {
    top: 23rem;
  }
`;

export const MinorDetails = styled.p`
  font-size: 1.44rem;
  line-height: 1.5;
  span {
    color: #777;
  }
  @media (max-width: 37.5em) {
    font-size: 1.2rem;
    line-height: 1.25;
  }
`;

//icon

export const CloseIcon = () => (
  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
  </svg>
);
