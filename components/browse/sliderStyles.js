import styled, { css } from 'styled-components';

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
  font-size: 1.4vw;
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
`;

export const Card = styled.div`
  cursor: pointer;
  border-radius: 0.56rem;
  transition: transform 0.25s, visibility 0.25s, box-shadow 0.25s ease-in;
`;

export const Details = styled.div`
  opacity: 0;
  width: 0;
  padding: 0;
  background: #111111;
  font-size: 1.2rem;

  * {
    display: none;
  }

  @media (max-width: 37.5em) {
    br {
      display: none !important;
    }
  }
`;

export const CardContainer = styled.div`
  margin-right: 0.4rem;
  z-index: 1;

  ${({ mouseDown }) =>
    !mouseDown &&
    css`
      &:hover {
        transition-delay: 500ms;
        position: relative;
        max-height: unset;
        z-index: 2;
        margin-right: 29.7rem;

        ${Details} {
          transition-delay: 500ms;
          opacity: 1;
          width: 100%;
          padding: 1.6rem 1.2rem;
          border-radius: 0 0 0.4rem 0.4rem;
          * {
            transition-delay: 500ms;
            display: inline-block;
          }
          @media (max-width: 62.5em) {
            width: calc(100% - 1.6rem);
            padding: 0.8rem 0.8rem 0.4rem;
          }
          @media (max-width: 37.5em) {
            padding: 0.4rem 0.8rem 0.4rem;
          }
        }

        ${Card} {
          transition-delay: 500ms;
          position: absolute;
          box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.75),
            0 6px 6px rgba(0, 0, 0, 0.5);
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
  }

  &.normal {
    ${CardContainer} {
      transition: 0s all;

      ${({ mouseDown }) =>
        !mouseDown &&
        css`
          &:hover {
            ${Card} {
              transition-delay: 500ms;
              transform: scale(1.35);
            }

            ${Details} {
              transition-delay: 500ms;
              box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.75),
                0 6px 6px rgba(0, 0, 0, 0.5);
            }

            ${Poster} {
              max-height: 16.5rem;
              @media (max-width: 1000px) {
                max-height: 12.8rem;
              }
              @media (max-width: 600px) {
                max-height: 9.6rem;
              }
            }
          }
        `}
    }
  }

  &.large {
    padding: 8rem 0 14rem 3.5rem;

    @media (max-width: 1000px) {
      padding: 8rem 0 8.5rem 2.75rem;
    }

    @media (max-width: 600px) {
      padding: 8rem 0 3rem 1.5rem;
    }

    ${CardContainer} {
      max-height: 30rem;
      padding-bottom: 1rem;
      transition: 0s all;

      &:hover {
        margin-right: 18.92rem;

        ${Card} {
          transition-delay: 500ms;
          transform: scale(1.2);
        }

        ${Details} {
          transition-delay: 500ms;
        }

        @media (max-width: 1000px) {
          margin-right: 11.83rem;
        }

        @media (max-width: 600px) {
          margin-right: 9.9rem;
        }
      }
    }

    /* ${Video} {
      &.trailer-visible {
        height: 450px;
        width: 300px;
        border-radius: 0.35rem;

        @media (max-width: 1000px) {
          height: 278px;
          width: 185px;
        }

        @media (max-width: 600px) {
          height: 256px;
          width: 170.656px;
        }
      }
      .trailer-video {
        > div {
          height: 450px;
          width: 300px;
          border-radius: 0.35rem;

          @media (max-width: 1000px) {
            height: 278px;
            width: 185px;
          }

          @media (max-width: 600px) {
            height: 256px;
            width: 170.656px;
          }
        }

        iframe {
          height: 650px;
          width: 900px;
          transform: translate(-50%, -50%);
          border-radius: 0.35rem;

          @media (max-width: 1000px) {
            height: 478px;
            width: 785px;
          }

          @media (max-width: 600px) {
            height: 456px;
            width: 770.656px;
          }
        }
      }
    } */

    ${Poster} {
      max-height: 28rem;

      @media (max-width: 1000px) {
        max-height: 21.25rem;
      }

      @media (max-width: 600px) {
        max-height: 16rem;
      }
    }

    ${Details} {
      margin-top: -4.5rem;
      transition: 0s all;
      background: linear-gradient(rgba(20, 20, 20, 0), rgba(20, 20, 20, 1));
      z-index: 10;

      @media (max-width: 1000px) {
        margin-top: -2.85rem;
      }

      @media (max-width: 600px) {
        margin-top: -1.25rem;
      }
    }
    .volume-btn {
      top: 1rem;
    }
  }
`;

export const MiniTitle = styled.h3`
  font-weight: 600;
  font-size: 1.76rem;

  @media (max-width: 62.5em) {
    font-size: 1.2rem;
  }

  @media (max-width: 37.5em) {
    font-size: 1.04rem;
  }
`;

export const Rating = styled.p`
  margin: 0.4rem 0;
  font-size: 1.12rem;

  .new-badge {
    background: #43a047;
    color: white;
    border-radius: 3px;
    font-weight: 800;
    margin-right: 0.8rem;
    padding: 0.2rem 0.4rem;
  }

  .popularity {
    color: #46d369;
    font-weight: 800;
    margin-right: 0.8rem;
  }

  @media (max-width: 62.5em) {
    font-size: 0.8rem;
  }

  @media (max-width: 37.5em) {
    display: none !important;
  }
`;
