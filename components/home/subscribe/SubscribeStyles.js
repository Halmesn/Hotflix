import styled from 'styled-components';

export const Subscribe = styled.form`
  padding-bottom: 3rem;

  @media only screen and (max-width: 59.375em) {
    padding-bottom: 0;
  }
`;

export const Title = styled.h3`
  font-size: 1.92rem;
  font-weight: normal;
  padding-bottom: 2rem;

  @media only screen and (max-width: 59.375em) {
    font-size: 2.3rem;
    width: 65%;
    margin: 0 auto;
  }

  @media only screen and (max-width: 46.25em) {
    font-size: 1.8rem;
  }

  span {
    border-bottom: 1px solid #ccc;
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 59.375em) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InputField = styled.div`
  position: relative;
  width: 50rem;

  @media only screen and (max-width: 90.625em) {
    width: 43rem;
  }

  @media only screen and (max-width: 59.375em) {
    width: 55rem;
  }

  @media only screen and (max-width: 46.25em) {
    width: 50rem;
  }

  @media only screen and (max-width: 34.25em) {
    width: 90vw;
  }
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  font-size: 1.6rem;
  height: 100%;
  padding-top: 1rem;
  padding-left: 1rem;

  @media only screen and (max-width: 59.375em) {
    height: 6rem;
  }

  @media only screen and (max-width: 46.25em) {
    height: 4.4rem;
  }

  :focus {
    & + label {
      top: 1.3rem;
      font-size: 1.3rem;
      font-weight: 700;
    }
  }
`;

export const Label = styled.label`
  font-size: 1.6rem;
  color: #8c8c8c;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  pointer-events: none;

  transition: font 0.1s ease, top 0.1s ease;
`;

export const Error = styled.p`
  position: absolute;
  color: #ffa00a;
  text-align: left;
  padding: 0.6rem 0.3rem;
  font-size: 1.5rem;
`;

export const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  letter-spacing: 0.3px;
  color: currentColor;
  background-color: #e50914;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 3rem;
  padding: 1.5rem 3rem;

  @media only screen and (max-width: 90.625em) {
    font-size: 2.6rem;
  }

  @media only screen and (max-width: 59.375em) {
    font-size: 1.6rem;
    padding: 1rem 2rem;
    margin-top: 2.5rem;
  }

  :hover {
    background-color: #f40612;
  }

  svg {
    width: 1.125rem;
  }
`;
