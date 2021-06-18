import styled, { css } from 'styled-components';
import { SubmitBtn as SubscribeBtn } from 'components/home/subscribe/styles';

export const Hero = styled.section`
  position: relative;
  height: 75rem;
  border-bottom: 8px solid #222;
  display: grid;
  place-items: center;
  color: #fff;

  @media only screen and (max-width: 90.625em) {
    height: 70rem;
  }

  @media only screen and (max-width: 34.375em) {
    height: 52rem;
  }
`;

export const Text = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  text-align: center;
  transform: translateY(5rem);
`;

export const Demo = styled(SubscribeBtn)`
  ${({ disabled }) =>
    disabled &&
    css`
      filter: brightness(0.6);
      padding: 2.2rem 8.5rem;

      @media only screen and (max-width: 59.375em) {
        padding: 0.8rem 4.5rem;
      }
    `}
`;

export const Title = styled.h1`
  font-size: 6.4rem;
  line-height: 1.1;
  max-width: 80rem;

  @media only screen and (max-width: 90.625em) {
    font-size: 5rem;
    max-width: 60rem;
  }

  @media only screen and (max-width: 34.375em) {
    font-size: 2.8rem;
    max-width: 30rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 2.6rem;
  font-weight: normal;
  margin: 1.6rem 7.5rem 2.5rem;

  @media only screen and (max-width: 34.375em) {
    font-size: 1.8rem;
    margin: 1.6rem auto;
  }
`;
