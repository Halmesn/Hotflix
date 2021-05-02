import styled from 'styled-components';
import * as mixins from 'styles/mixins';

export const Feature = styled.section``;

export const Wrapper = styled.div`
  ${mixins.flexBetween}
  flex-direction: ${({ direction }) => direction};
  max-width: 110rem;
  margin: 0 auto;
`;

export const Card = styled.div`
  position: relative;
  border-bottom: 8px solid #222;
  padding: 5rem 5%;
  color: #fff;

  @media only screen and (min-width: 550px) and (max-width: 949px),
    only screen and (min-width: 950px) and (max-width: 1449px),
    only screen and (min-width: 1450px) {
    padding: 7rem 4.5rem;
  }
`;

export const Text = styled.div`
  width: 52%;
  flex: 0 1 auto;
  padding: 0 3rem 0 0;
`;

export const Title = styled.h1`
  font-size: 5rem;
  line-height: 1.1;
  margin-bottom: 0.8rem;
  margin-top: 0;

  @media (max-width: 37.5em) {
    font-size: 3.5rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 2.6rem;
  font-weight: 400;
  line-height: normal;
  margin: 1.95rem 0 0.65rem;

  @media (max-width: 37.5em) {
    font-size: 1.8rem;
  }
`;

export const Image = styled.div`
  width: 48%;
  display: flex;
  flex: 0 1 auto;

  img {
    max-width: 100% !important;
    width: 100% !important;
    border: 0;
  }
`;

export const Animation = styled.div`
  margin: ${({ margin }) => margin};
  position: relative;
  overflow: hidden;
`;
