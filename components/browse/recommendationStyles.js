import styled from 'styled-components';

export const Recommendation = styled.div`
  padding: 0 4.8rem 3.2rem;

  @media (max-width: 37.5em) {
    padding: 2.4rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(auto, auto);
  gap: 1.6rem;
  margin-bottom: 3.2rem;

  @media (max-width: 37.5em) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const GridItem = styled.div`
  font-size: 1.44rem;
  line-height: 1.5;
  color: #d2d2d2;
  background-color: #2f2f2f;
  border-radius: 0.56rem;
  @media (max-width: 37.5em) {
    font-size: 1.28rem;
    line-height: 1.25;
  }
`;

export const Wrapper = styled.div`
  img {
    border-radius: 0.56rem 0.56rem 0 0 !important;
  }
`;

export const Details = styled.div`
  padding: 0 1rem 1rem;
  @media (max-width: 37.5em) {
    padding: 0 0.8rem 0.8rem;
  }
`;

export const Header = styled.p`
  font-weight: 800;
  font-size: 2.4rem;
  margin-bottom: 2.4rem;
`;

export const Title = styled.p`
  font-size: 1.6rem;
  font-weight: 800;
  margin-top: 1.6rem;
  @media (max-width: 37.5em) {
    font-size: 1.28rem;
    margin-top: 0.8rem;
  }
`;

export const Year = styled.p`
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
  @media (max-width: 37.5em) {
    font-size: 1.28rem;
    margin-bottom: 0.8rem;
  }
`;

export const ShowMoreWrapper = styled.div`
  @media (max-width: 37.5em) {
    height: 12rem;
  }
`;
