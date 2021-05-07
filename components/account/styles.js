import styled, { css } from 'styled-components';
import { labelTransitionSmall, gridCenter } from 'styles/mixins';

export const Container = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  color: #fff;

  ${gridCenter}
  @media only screen and (max-width: 34.375em) {
    place-items: start;
  }
`;

export const FormWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  padding: 6rem 6.8rem 4rem;
  z-index: 1;
  min-height: 58rem;
  width: 45rem;

  @media only screen and (max-width: 34.375em) {
    width: 100%;
    height: 85%;
    padding: 6rem 1.5rem 1rem;
  }
`;

export const MainForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  margin-bottom: 2.8rem;
`;

export const Form = styled.form``;

export const InputField = styled.div`
  position: relative;
  margin-bottom: 1.6rem;
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  outline: none;
  font-size: 1.6rem;
  background: #333;
  border-radius: 4px;
  height: 5rem;
  padding: 1.6rem 2rem 0;
  color: currentColor;

  ${({ value }) => value !== '' && labelTransitionSmall}

  :focus {
    ${labelTransitionSmall}
  }
`;

export const Label = styled.label`
  font-size: 1.6rem;
  color: #8c8c8c;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 2rem;
  transform: translateY(-50%);
  pointer-events: none;

  transition: font 0.1s ease, top 0.1s ease;
`;

export const Error = styled.p`
  background: #e87c03;
  color: #fff;
  border-radius: 4px;
  text-align: left;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

export const Success = styled(Error)`
  background: #43a047;
  span {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const AuthButton = styled.button`
  width: 100%;
  background: #e50914;
  padding: 1.6rem;
  font-size: 1.6rem;
  font-weight: 700;
  color: currentColor;
  outline: none;
  border: none;
  border-radius: 4px;
  margin-top: 3rem;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      filter: brightness(0.6);
      padding: 1.2rem;
    `}
`;

export const SubForm = styled.div`
  margin-top: 3rem;
`;

export const SubTitle = styled.p`
  font-size: 1.6rem;
  color: #737373;

  ${({ center }) =>
    center &&
    css`
      display: grid;
      grid-template-columns: 1fr max-content 1fr;
      grid-column-gap: 1.5rem;
      align-items: center;
      margin: 2rem 0;

      &::before,
      &::after {
        content: '';
        height: 1px;
        display: block;
        background-color: currentColor;
      }

      @media only screen and (max-width: 26.25em) {
        margin-top: 5rem;
      }
    `}

  span {
    color: #fff;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;

export const BtnContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.5rem;
  margin-top: 3rem;

  @media only screen and (max-width: 25em) {
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
    margin-top: 1.5rem;
  }

  ${({ center }) =>
    center &&
    css`
      grid-template-columns: 1fr;
      place-items: center;
    `}
`;

export const OthersBtn = styled.button`
  appearance: none;
  text-decoration: none;
  background-color: transparent;
  border: 1px solid;
  border-radius: 5px;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 1.2rem;
  min-height: 5rem;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.7rem;
  text-align: center;
  letter-spacing: 0.05em;
  transition: all 0.3s ease-out;

  :hover {
    transform: translateY(-3px);
  }

  svg {
    margin-right: 1rem;
  }
`;

export const Spinner = styled.div`
  display: inline-block;
  position: relative;
  width: 2.5rem;
  height: 2.5rem;

  div {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid #fff;
    border-radius: 50%;
    animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;

    :nth-child(1) {
      animation-delay: -0.45s;
    }

    :nth-child(2) {
      animation-delay: -0.3s;
    }

    :nth-child(3) {
      animation-delay: -0.15s;
    }
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const FacebookIcon = () => (
  <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
      <path
        d="M18.896 0H1.103C.493 0 0 .495 0 1.104v17.793C0 19.507.495 20 1.104 20h17.792c.61 0 1.104-.494 1.104-1.104V1.103C20 .493 19.506 0 18.896 0z"
        fill="#4267B2"
      ></path>
      <path
        d="M13.809 20v-7.734h2.607l.39-3.028H13.81V7.31c0-.874.242-1.47 1.496-1.47h1.59v-2.7a21.36 21.36 0 00-2.33-.12c-2.304 0-3.881 1.407-3.881 3.99v2.228H8.086v3.028h2.598V20h3.125z"
        fill="#fff"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" d="M0 0h20v20H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export const GoogleIcon = () => (
  <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.432 12.086l-.696 2.6-2.544.053A9.955 9.955 0 010 10a9.95 9.95 0 011.118-4.599l2.266.415.992 2.252A5.944 5.944 0 004.056 10c0 .734.132 1.437.376 2.086z"
      fill="#FBBB00"
    ></path>
    <path
      d="M19.824 8.132a10.018 10.018 0 01-.044 3.956 9.998 9.998 0 01-3.52 5.71h-.001l-2.854-.146-.403-2.52a5.96 5.96 0 002.564-3.044h-5.347V8.132h9.605z"
      fill="#518EF8"
    ></path>
    <path
      d="M16.26 17.798A9.958 9.958 0 0110 20a9.998 9.998 0 01-8.809-5.261l3.241-2.653a5.946 5.946 0 008.57 3.045l3.257 2.667z"
      fill="#28B446"
    ></path>
    <path
      d="M16.384 2.302l-3.24 2.652a5.948 5.948 0 00-8.767 3.114L1.12 5.401A9.998 9.998 0 0110 0c2.426 0 4.651.864 6.383 2.302z"
      fill="#F14336"
    ></path>
  </svg>
);

export const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    width="20"
    height="20"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
