import styled from 'styled-components';

export const Title = styled.h2`
  padding-left: 5.6rem;
  font-size: 2.8rem;
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
  img {
    border-radius: 0.3rem;
  }
`;

export const Card = styled.div`
  cursor: pointer;
  transition: all 0.25s ease-in;
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

export const Slider = styled.div`
  margin-top: -12rem;
  margin-bottom: 3.2rem;

  :last-child {
    .swiper-container {
      padding-bottom: 0;
    }

    .swiper-button-prev,
    .swiper-button-next {
      top: 70%;
    }
  }

  @media (max-width: 62.5em) {
    margin-top: -8rem;
    margin-bottom: 0;
  }

  @media (max-width: 37.5em) {
    margin-top: 0;
    margin-bottom: 0;
  }

  .swiper-container {
    display: flex;
    padding: 12.8rem 0 15rem 5.6rem;
    margin-top: -11.2rem;
    z-index: 1;

    :hover {
      .swiper-button-prev,
      .swiper-button-next {
        opacity: 1;
      }

      .swiper-button-disabled {
        opacity: 0.35;
      }
    }

    @media (max-width: 62.5em) {
      padding: 12.8rem 0 11.2rem 4.4rem;
    }
    @media (max-width: 37.5em) {
      padding: 12.8rem 0 4.8rem 2.4rem;
    }

    &.normal {
      .card-container {
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
        }
      }
    }

    &.large {
      @media (max-width: 62.5em) {
        padding: 12.8rem 0 13.6rem 4.4rem;
      }
    }
  }

  .card-container {
    z-index: 1;
    width: auto;

    :hover {
      transition-delay: 500ms;
      position: relative;
      max-height: unset;
      z-index: 2;
      margin-right: 28.8rem;
    }

    @media (max-width: 62.5em) {
      margin-right: 23.12rem;
    }
    @media (max-width: 37.5em) {
      margin-right: 17.44rem;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: white;
    top: 48%;
    opacity: 0;
    transition: all 0.5s ease;
  }
`;
