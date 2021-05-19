import styled from 'styled-components';

export const Episode = styled.div`
  padding: 4.8rem;
  padding-bottom: 1rem;
  @media (max-width: 37.5em) {
    padding: 2.4rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-weight: 800;
  font-size: 2.4rem;
`;

export const Select = styled.select`
  min-width: 6.4rem;
  padding: 0.56rem;
  background-color: rgb(36, 36, 36);
  color: #fff;
  border: 1px solid rgb(77, 77, 77);
  border-radius: 0.32rem;
  font-size: 1.76rem;
  font-weight: 800;
  outline: none;
`;

export const List = styled.div`
  p {
    &.no-episodes {
      text-align: center;
      margin: 3rem;
      font-style: italic;
    }
  }
`;

export const Wrapper = styled.div`
  &.number {
    flex: 1;
    font-size: 2.4rem;
    color: #d2d2d2;
    text-align: center;
  }

  &.image {
    flex: 5;
    margin: 2rem 1.6rem;

    img {
      max-width: 14.4rem;
      border-radius: 0.56rem !important;
    }
  }

  &.details {
    flex: 15;
  }
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  place-items: center;
  border-bottom: 1px solid #404040;
  padding: 0.5rem 6.4rem 1.1rem 2.4rem;

  &:last-of-type {
    border-bottom: 3px solid #404040;
  }

  @media (max-width: 37.5em) {
    padding: 1.6rem 0;
  }
`;

export const ListItemTitle = styled.p`
  font-weight: 800;
  font-size: 1.76rem;
  margin-bottom: 0.8rem;
  @media (max-width: 37.5em) {
    font-size: 1.28rem;
    margin-bottom: 0.4rem;
  }
`;

export const Overview = styled.p`
  color: #d2d2d2;
  font-size: 1.44rem;
  line-height: 1.5;
  @media (max-width: 37.5em) {
    font-size: 1.12rem;
    line-height: 1.25;
  }
`;

export const ShowMore = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(42, 42, 42, 0.6);
  border-radius: 50%;
  width: 4.8rem;
  height: 4.8rem;
  margin: auto;
  margin-top: -2.4rem;
  cursor: pointer;
  transition: all 0.25s ease-out;

  svg {
    width: 4.5rem;
    height: 4.5rem;
    padding: 0.5rem;
    fill: white;
  }

  &:hover {
    border: 2px solid #fff;
    background-color: #545454;
  }

  @media (max-width: 37.5em) {
    width: 3.2rem;
    height: 3.2rem;
    margin-top: -1.4rem;

    svg {
      width: 2.8rem;
      height: 2.8rem;
    }
  }
`;

export const ArrowUp = () => (
  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
  </svg>
);

export const ArrowDown = () => (
  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
  </svg>
);
