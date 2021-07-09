import styled, { css } from 'styled-components';
import {
  CardContainer,
  Card,
  Poster,
  Video,
  Details,
  Genre,
  Mute,
} from './cardStyles';

export const Slider = styled.div`
  margin-top: -12rem;
  margin-bottom: 3.2rem;

  @media (max-width: 62.5em) {
    margin-top: -8rem;
    margin-bottom: 0;
  }

  @media (max-width: 37.5em) {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const Title = styled.h2`
  padding-left: 5.6rem;
  font-size: 2.76rem;
  color: #fff;
  font-weight: bold;

  @media (max-width: 62.5em) {
    font-size: 1.6rem;
  }

  @media (max-width: 37.5em) {
    font-size: 1.44rem;
    padding: 0 2.4rem 0;
  }
`;

export const Row = styled.div`
  display: flex;
  overflow: auto;
  padding: 12.8rem 0 15rem 5.6rem;
  margin-top: -11.2rem;
  z-index: 1;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 62.5em) {
    padding: 12.8rem 0 11.2rem 4.4rem;
  }

  @media (max-width: 37.5em) {
    padding: 12.8rem 0 4.8rem 2.4rem;

    ${({ isMobile }) =>
      isMobile &&
      css`
        padding-bottom: 2rem;
      `}
  }

  &.normal {
    ${CardContainer} {
      transition: 0s all;

      ${({ dragging, isMobile }) =>
        !dragging &&
        !isMobile &&
        css`
          &:hover {
            ${Card} {
              transition-delay: 500ms;
              transform: scale(1.35);
            }

            ${Details} {
              transition-delay: 500ms;
              box-shadow: 0 0 1rem rgba(0, 0, 0, 0.75),
                0 6px 6px rgba(0, 0, 0, 0.5);
            }

            ${Poster} {
              max-height: 16.5rem;
              @media (max-width: 62.5em) {
                max-height: 12.8rem;
              }
              @media (max-width: 37.5em) {
                max-height: 9.6rem;
              }
            }
          }
        `}
    }
  }

  &.large {
    padding: 12.8rem 0 22.4rem 5.6rem;

    @media (max-width: 62.5em) {
      padding: 12.8rem 0 13.6rem 4.4rem;
    }

    @media (max-width: 37.5em) {
      padding: 12.8rem 0 6.3rem 2.4rem;
    }

    ${CardContainer} {
      max-height: 44.8rem;
      padding-bottom: 1rem;
      transition: 0s all;

      ${({ dragging, isMobile }) =>
        !dragging &&
        !isMobile &&
        css`
          &:hover {
            margin-right: 29.7rem;

            ${Card} {
              transition-delay: 500ms;
              transform: scale(1.2);
            }

            ${Details} {
              transition-delay: 500ms;
            }

            @media (max-width: 62.5em) {
              margin-right: 23.1rem;
            }

            @media (max-width: 37.5em) {
              margin-right: 17.4rem;
            }
          }
        `}
    }

    ${Video} {
      &.visible {
        height: 45rem;
        width: 30rem;
        border-radius: 0.35rem;

        @media (max-width: 62.5em) {
          height: 33.89rem;
          width: 22.7rem;
        }

        @media (max-width: 37.5em) {
          height: 25.6rem;
          width: 17.0656rem;
        }
      }
      .card-trailer {
        > div {
          height: 45rem;
          width: 30rem;
          border-radius: 0.35rem;

          @media (max-width: 62.5em) {
            height: 33.89rem;
            width: 22.7rem;
          }

          @media (max-width: 37.5em) {
            height: 25.6rem;
            width: 17.0656rem;
          }
        }

        iframe {
          height: 65rem;
          width: 90rem;
          transform: translate(-50%, -50%);
          border-radius: 0.35rem;

          @media (max-width: 62.5em) {
            height: 47.8rem;
            width: 78.5rem;
          }

          @media (max-width: 37.5em) {
            height: 45.6rem;
            width: 77.0656rem;
          }
        }
      }
    }

    ${Poster} {
      max-height: 44.8rem;

      @media (max-width: 62.5em) {
        max-height: 34rem;
      }

      @media (max-width: 37.5em) {
        max-height: 25.6rem;
      }
    }

    ${Details} {
      margin-top: -8rem;
      transition: 0s all;
      background: linear-gradient(rgba(20, 20, 20, 0), rgba(20, 20, 20, 1));
      z-index: 10;

      @media (max-width: 62.5em) {
        margin-top: -4.56rem;
      }

      @media (max-width: 37.5em) {
        margin-top: -2rem;
      }
    }

    ${Genre} {
      @media (max-width: 62.5em) {
        display: none;
      }
    }

    ${Mute} {
      @media (max-width: 62.5em) {
        top: 2rem;
      }
    }
  }
`;
