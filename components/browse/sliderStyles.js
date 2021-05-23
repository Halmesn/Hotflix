import styled, { css } from 'styled-components';
import { Mute as BillboardMute } from './billboardStyles';

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

export const Mute = styled(BillboardMute)`
  width: 3rem;
  height: 3rem;
  top: 12rem;
  right: 1rem;

  svg {
    padding: 0.7rem;
  }

  @media (max-width: 62.5em) {
    top: 9rem;
  }

  @media (max-width: 37.5em) {
    top: 6.5rem;
    width: 2.5rem;
    height: 2.5rem;
    svg {
      padding: 0.5rem;
    }
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

export const Poster = styled.div`
  width: 29.3rem;
  img {
    border-radius: 0.3rem;
  }

  @media (max-width: 62.5em) {
    width: 22.7rem;
  }

  @media (max-width: 37.5em) {
    width: 17rem;
  }
`;

export const Card = styled.div`
  cursor: ${({ mouseDown }) => (mouseDown ? 'grab' : 'pointer')};
  border-radius: 0.56rem;
  transition: transform 0.25s, visibility 0.25s, box-shadow 0.25s ease-in;
`;

export const Details = styled.div`
  opacity: 0;
  width: 0;
  padding: 0;
  background: #111111;
  position: relative;

  * {
    display: none;
  }

  @media (max-width: 37.5em) {
    br {
      display: none !important;
    }
  }
`;

export const Genre = styled.p`
  line-height: 1;

  .genre-dot {
    font-weight: bold;
    margin: 0.3rem 0.6rem;
    opacity: 0.5;
  }

  @media (max-width: 62.5em) {
    zoom: 0.8;
    .genre-dot {
      margin: 0 0.56rem 0.4rem;
    }
  }

  @media (max-width: 37.5em) {
    display: none !important;
  }
`;

export const Video = styled.div`
  height: 0;
  width: 0;
  opacity: 0;
  border-radius: 0.35rem 0.35rem 0 0;

  &.visible {
    height: 16.3rem;
    width: 29.3rem;
    opacity: 1;
    border-radius: 0.35rem 0.35rem 0 0;

    @media (max-width: 62.5em) {
      height: 13rem;
      width: 22.7rem;
    }

    @media (max-width: 37.5em) {
      height: 9.6rem;
      width: 17rem;
    }
  }

  .card-trailer {
    pointer-events: none;
    border-radius: 0.35rem 0.35rem 0 0;

    > div {
      position: relative;
      overflow: hidden;
      height: 16.5rem;
      width: 29.3rem;
      pointer-events: none;
      border-radius: 0.35rem 0.35rem 0 0;

      @media (max-width: 62.5em) {
        height: 13.2rem;
        width: 22.7rem;
      }

      @media (max-width: 37.5em) {
        height: 9.8rem;
        width: 17rem;
      }
    }

    iframe {
      position: absolute;
      top: 50%;
      left: 50%;
      height: 253px;
      width: 448px;
      pointer-events: none;
      z-index: -1;
      transform: translate(-50%, -55%);
      border-radius: 0.35rem 0.35rem 0 0;

      @media (max-width: 62.5em) {
        height: 220px;
        width: 390.219px;
      }

      @media (max-width: 37.5em) {
        height: 186px;
        width: 227.4px;
      }
    }
  }
`;

export const CardContainer = styled.div`
  margin-right: 0.4rem;
  z-index: 1;

  ${({ dragging, isMobile }) =>
    !dragging &&
    !isMobile &&
    css`
      &:hover {
        transition-delay: 500ms;
        position: relative;
        max-height: unset;
        z-index: 2;
        margin-right: 29.7rem;

        ${Details} {
          transition-delay: 500ms;
          width: 100%;
          opacity: 1;
          padding: 0.8rem 0.6rem;
          border-radius: 0 0 0.4rem 0.4rem;

          * {
            transition-delay: 500ms;
            display: inline-block;
          }

          @media (max-width: 62.5em) {
            padding: 0.8rem 0.8rem 0.4rem;
          }

          @media (max-width: 37.5em) {
            padding: 0.4rem 0.8rem 0.4rem;
          }
        }

        ${Card} {
          transition-delay: 500ms;
          position: absolute;
          box-shadow: 0 0 1rem rgba(0, 0, 0, 0.75), 0 6px 6px rgba(0, 0, 0, 0.5);
        }

        @media (max-width: 62.5em) {
          margin-right: 23.12rem;
        }

        @media (max-width: 37.5em) {
          margin-right: 17.44rem;
        }
      }
    `}
`;

export const Row = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: auto;
  padding: 12.8rem 0 15rem 5.6rem;
  margin-top: -11.2rem;
  z-index: 1;

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
        height: 450px;
        width: 300px;
        border-radius: 0.35rem;

        @media (max-width: 62.5em) {
          height: 33.89rem;
          width: 22.7rem;
        }

        @media (max-width: 37.5em) {
          height: 256px;
          width: 170.656px;
        }
      }
      .card-trailer {
        > div {
          height: 450px;
          width: 300px;
          border-radius: 0.35rem;

          @media (max-width: 62.5em) {
            height: 33.89rem;
            width: 22.7rem;
          }

          @media (max-width: 37.5em) {
            height: 256px;
            width: 170.656px;
          }
        }

        iframe {
          height: 650px;
          width: 900px;
          transform: translate(-50%, -50%);
          border-radius: 0.35rem;

          @media (max-width: 62.5em) {
            height: 478px;
            width: 785px;
          }

          @media (max-width: 37.5em) {
            height: 456px;
            width: 770.656px;
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

export const MiniTitle = styled.h3`
  font-weight: 600;
  font-size: 1.7rem;

  @media (max-width: 62.5em) {
    font-size: 1.2rem;
  }

  @media (max-width: 37.5em) {
    zoom: 0.8;
  }
`;

export const Rating = styled.p`
  margin: 0.4rem 0;

  .new-badge {
    background: #43a047;
    color: white;
    border-radius: 3px;
    font-weight: 800;
    margin-right: 0.8rem;
    padding: 0.2rem 0.4rem;

    @media (max-width: 62.5em) {
      zoom: 0.8;
    }
  }

  .popularity {
    color: #46d369;
    font-weight: 800;
    margin-right: 0.8rem;
  }

  @media (max-width: 62.5em) {
    zoom: 0.8;
  }

  @media (max-width: 37.5em) {
    display: none !important;
  }
`;
