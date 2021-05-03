import styled, { css } from 'styled-components';
import * as mixins from 'styles/mixins';

export const Feature = styled.section``;

export const Wrapper = styled.div`
  ${mixins.flexBetween}
  flex-direction: ${({ direction }) => direction};
  max-width: 110rem;
  margin: 0 auto;

  @media only screen and (min-width: 550px) and (max-width: 949px),
    only screen and (min-width: 400px) and (max-width: 549px),
    only screen and (min-width: 350px) and (max-width: 399px),
    only screen and (max-width: 349px) {
    flex-direction: column;
  }
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
  padding: ${({ id }) => (id === 2 ? '0 0 0 3rem' : '0 4.8rem 0 0')};

  @media only screen and (min-width: 550px) and (max-width: 949px),
    only screen and (min-width: 400px) and (max-width: 549px),
    only screen and (min-width: 350px) and (max-width: 399px),
    only screen and (max-width: 349px) {
    width: 100%;
    text-align: center;
    padding: 0;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  line-height: 1.1;
  margin-bottom: 0.8rem;
  margin-top: 0;

  @media only screen and (min-width: 550px) and (max-width: 949px) {
    font-size: 4rem;
  }

  @media only screen and (min-width: 400px) and (max-width: 549px),
    only screen and (min-width: 350px) and (max-width: 399px),
    only screen and (max-width: 349px) {
    font-size: 2.6rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 2.6rem;
  font-weight: 400;
  line-height: normal;
  margin: 1.95rem 0 0.65rem;

  @media only screen and (min-width: 550px) and (max-width: 949px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 400px) and (max-width: 549px),
    only screen and (min-width: 350px) and (max-width: 399px),
    only screen and (max-width: 349px) {
    font-size: 1.8rem;
  }
`;

export const ImageContainer = styled.div`
  width: 48%;
  display: flex;
  flex: 0 1 auto;

  @media only screen and (min-width: 550px) and (max-width: 949px),
    only screen and (min-width: 400px) and (max-width: 549px),
    only screen and (min-width: 350px) and (max-width: 399px),
    only screen and (max-width: 349px) {
    width: 100%;
    max-width: 60rem;
    margin-top: 1.6rem;
  }
`;

export const Image = styled.div`
  margin: ${({ id }) =>
    id === 1 ? '-10% -5% -5% 0' : id === 2 ? '-8% 0 -4% -15%' : '-5% -10% 0 0'};
  position: relative;
  overflow: hidden;
  max-width: 100%;
  @media only screen and (min-width: 550px) and (max-width: 949px),
    only screen and (min-width: 400px) and (max-width: 549px),
    only screen and (min-width: 350px) and (max-width: 399px),
    only screen and (max-width: 349px) {
    margin: ${({ id }) =>
      id === 1 ? '-10% 0 0 0' : id === 2 ? '-8% 0 0 0' : '-5% 0 0 0'};
  }
  img {
    z-index: ${({ id }) => (id === 3 ? '2' : '-1')};
  }
`;

export const AnimationContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${({ id }) => (id === 1 ? '73%' : id === 2 ? '' : '63%')};
  max-height: 54%;
  position: absolute;
  top: ${({ id }) => (id === 1 ? '48%' : id === 2 ? '' : '34%')};
  left: 50%;
  transform: translate(-50%, -50%);

  ${({ id }) =>
    id === 2 &&
    css`
      position: absolute;
      height: auto;
      left: 50%;
      bottom: -7%;
      margin: 0 auto;
      background: #000;
      display: flex;
      align-items: center;
      width: 60%;
      min-width: 15em;
      padding: 0.8rem 1.2rem;
      border: 2px solid rgba(255, 255, 255, 0.25);
      box-shadow: 0 0 2em 0 #000;
      border-radius: 0.75em;

      ::after {
        width: 4.8rem;
        height: 6rem;
        outline: 2px solid #000;
        outline-offset: -2px;
        display: block;
        background: url('/images/feature/download.gif') center center no-repeat;
        background-size: 100%;
        content: '';
      }
    `}
`;

export const AnimationImage = styled.div`
  margin: 0 1.6rem 0 0;
  img {
    height: 4.8rem;

    @media only screen and (min-width: 550px) and (max-width: 949px) {
      height: 6.4rem;
    }

    @media only screen and (min-width: 950px) and (max-width: 1449px) {
      height: 7.2rem;
    }

    @media only screen and (min-width: 1450px) {
      height: 8rem;
    }
  }
`;

export const AnimationText = styled.div`
  flex: 1;
  margin: 0.48rem 0;
  div:first-child {
    color: #fff;
    font-weight: 600;
    font-size: 1.44rem;
    @media only screen and (min-width: 550px) and (max-width: 949px),
      only screen and (min-width: 950px) and (max-width: 1449px),
      only screen and (min-width: 1450px) {
      font-size: 1.6rem;
    }
  }
  div:last-child {
    color: #0071eb;
    font-size: 1.2rem;
    font-weight: 400;
    @media only screen and (min-width: 550px) and (max-width: 949px),
      only screen and (min-width: 950px) and (max-width: 1449px),
      only screen and (min-width: 1450px) {
      font-size: 1.44rem;
    }
  }
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
`;
