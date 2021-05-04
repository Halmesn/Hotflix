import styled from 'styled-components';

export const SignUpForm = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  padding: 0 5%;
  max-width: 45rem;
  margin: 0 auto;
  font-weight: 400;

  @media only screen and (min-width: 59.375em) {
    max-width: none;
    padding-bottom: 2rem;
    font-size: 1.2rem;
  }
`;
