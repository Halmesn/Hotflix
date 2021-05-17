import styled, { createGlobalStyle } from 'styled-components';
import {
  Video as BillboardVideo,
  Overlay as BillboardOverlay,
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
  height: 32rem;
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
        height: 50rem;
        pointer-events: none;
        z-index: 0;
        transform: translate(-50%, -50%);
      }
    }
  }
  @media (max-width: 600px) {
    height: 18rem;
    iframe {
      width: 128%;
      height: 20rem;
    }
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 32rem;

  @media (max-width: 600px) {
    height: 18rem;
  }
`;

export const Close = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  cursor: pointer;
  svg {
    background-color: #181818;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.35rem;
  }
  @media (max-width: 600px) {
    top: 0.5rem;
    right: 1.5rem;
  }
`;

export const Overlay = styled(BillboardOverlay)`
  width: 100%;
  height: 32rem;
  background: linear-gradient(rgba(20, 20, 20, 0) 60%, rgba(20, 20, 20, 0.95));

  @media (max-width: 600px) {
    height: 18rem;
  }
`;

export const Summary = styled.div`
  padding: 1rem 2rem 0;
  display: flex;
  @media (max-width: 600px) {
    padding: 1rem 1rem 0;
  }
`;

export const Panel = styled.div`
  padding: 1rem 1rem 0;
  p {
    margin-bottom: 1rem;
  }
  &.major-details {
    flex: 5;
    .air-date {
      span {
        margin-right: 1rem;
      }
    }
    .overview {
      font-weight: 500;
      font-size: 1.1rem;
      line-height: 1.5;
    }
  }
  &.minor-details {
    flex: 2;
  }

  @media (max-width: 600px) {
    padding: 0.5rem 0.5rem 0;
    p {
      margin-bottom: 0.5rem;
    }
    &.major-details {
      .air-date {
        span {
          margin-right: 0.5rem;
        }
      }
      .overview {
        font-weight: 400;
        font-size: 0.8rem;
      }
    }
    &.minor-details {
    }
  }
`;

export const Title = styled.div`
  margin: 0 0 0.5rem;
  font-size: 2rem;
`;

export const MinorDetails = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  span {
    color: #777;
  }
  @media (max-width: 600px) {
    font-size: 0.75rem;
    line-height: 1.25;
  }
`;

//icon

export const CloseIcon = () => (
  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
  </svg>
);
