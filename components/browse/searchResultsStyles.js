import styled from 'styled-components';
import { positionCenter } from 'styles/mixins';

import { CardContainer as ReusedCardContainer } from './cardStyles';
import { BackButton as PlayerBackButton } from './playerStyles';

import { Row as SliderRow } from './sliderStyles';

export const SearchResults = styled.div`
  background: #141414;
  min-height: 100vh;
`;

export const CardContainer = styled(ReusedCardContainer)``;

export const Row = styled(SliderRow)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(28.4rem, 28.5rem));
  padding: 14rem 4.8rem;
  grid-gap: 1.8rem;
  place-content: center;
  margin-top: 0;

  ${CardContainer} {
    margin-bottom: 6.4rem;
  }

  @media (max-width: 62.5em) {
    grid-template-columns: repeat(auto-fill, minmax(22.4rem, 22.5rem));

    ${CardContainer} {
      margin-bottom: 3.2rem;
    }
  }
  @media (max-width: 37.5em) {
    grid-template-columns: repeat(auto-fill, minmax(16.8rem, 16.9rem));

    padding: 8rem 3.2rem;
    ${CardContainer} {
      margin-bottom: 0;
    }
  }
`;

export const NoMatch = styled.div`
  max-width: 48rem;
  line-height: 1.5;
  font-size: 1.44rem;
  ${positionCenter};
  top: 35%;

  ul {
    padding-left: 3rem;
  }
  p {
    margin-bottom: 0.8rem;
  }
  @media (max-width: 37.5em) {
    max-width: 24rem;
    font-size: 1.28rem;
  }
`;

export const BackButton = styled(PlayerBackButton)`
  top: 6%;
  left: 2%;
`;
