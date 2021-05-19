import styled, { css } from 'styled-components';

export const Lolomo = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;

  ${({ isLoading }) =>
    isLoading &&
    css`
      position: absolute;
      left: 0;
      right: 0;
    `}
`;
