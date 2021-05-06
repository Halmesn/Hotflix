import { css } from 'styled-components';

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const gridCenter = css`
  display: grid;
  place-items: center;
`;

export const positionCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const footerLink = css`
  a {
    color: #757575;
    :hover,
    :focus {
      text-decoration: underline;
      outline: none;
    }
  }
`;

export const labelTransition = css`
  & + label {
    top: 1.5rem;
    font-size: 1.3rem;
    font-weight: 700;
  }
`;

export const labelTransitionSmall = css`
  & + label {
    top: 1.3rem;
    font-size: 1.2rem;
    font-weight: 400;
  }
`;
