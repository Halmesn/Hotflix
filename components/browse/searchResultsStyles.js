import styled from 'styled-components';

import {
  Row as SliderRow,
  CardContainer as SliderCardContainer,
} from './sliderStyles';

export const SearchResults = styled.div``;

export const CardContainer = styled(SliderCardContainer)``;

export const Row = styled(SliderRow)`
  display: grid;
  grid-template-columns: repeat(6, 28.4rem);
  padding: 12.8rem 4.8rem;
  grid-gap: 0.8rem;
  place-content: center;
  margin-top: 0;

  ${CardContainer} {
    margin-bottom: 6.4rem;
  }

  @media (max-width: 62.5em) {
    grid-template-columns: repeat(4, 22.4rem);
    ${CardContainer} {
      margin-bottom: 3.2rem;
    }
  }
  @media (max-width: 37.5em) {
    grid-template-columns: repeat(2, 16.8rem);
    padding: 8rem 3.2rem;
    ${CardContainer} {
      margin-bottom: 0;
    }
  }
`;

export const NoMatch = styled.div`
  margin: 16rem auto;
  max-width: 48rem;
  line-height: 1.5;
  p {
    margin-bottom: 0.8rem;
  }
  @media (max-width: 37.5em) {
    max-width: 24rem;
    font-size: 1.28rem;
  }
`;
