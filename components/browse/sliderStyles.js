import styled from 'styled-components';

export const Slider = styled.div`
  .swiper-container {
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: black;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-button-prev {
  }
  .swiper-button-next {
  }
`;

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
