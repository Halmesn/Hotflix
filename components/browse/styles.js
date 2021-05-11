import styled, { css } from 'styled-components';
import { gridCenter, positionCenter } from 'styles/mixins';

export const Profile = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #141414;
  z-index: 0;

  ${gridCenter}

  @media screen and (min-width: 100em) {
    font-size: 0.75vw;
  }
`;

export const Container = styled.div`
  display: grid;
  place-items: center;
  max-width: 80%;
`;

export const ProfileEdit = styled.div`
  position: relative;
  margin-top: 2.5rem;

  img {
    border-radius: 4px !important;
    cursor: pointer;
  }

  svg {
    color: #fff;
    border: 2px solid #fff;
    border-radius: 50%;
    width: 4.3rem;
    height: 4.3rem;
    padding: 0.5rem;
    background: #000;
    cursor: pointer;
    position: absolute;
    bottom: 2rem;
    left: 1rem;
  }
`;

export const AvatarWrapper = styled.div`
  &.text {
    h1 {
      font-size: 4rem;
      font-weight: 800;
      margin-bottom: 0.5rem;
      text-align: left;
    }

    p {
      font-size: 2.8rem;
    }
  }

  &.flex {
    display: flex;
    align-items: center;
  }

  &.arrow {
    font-weight: 800;

    svg {
      width: 6.4rem;
      height: 6.4rem;
      margin-right: 1.6rem;
      color: #fff;
      cursor: pointer;
      user-select: none;
      fill: currentColor;
    }
  }
`;

export const AvatarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 3rem 8rem;
  color: #fff;
`;

export const AvatarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 1.6rem;
  place-content: center;
  margin: 8rem 12.8rem;
`;
export const AvatarItem = styled.div`
  img {
    cursor: pointer;
    border: 3px solid transparent;
    border-radius: 0.5rem;
    transition: all 0.1s ease-in;

    :hover {
      border: 3px solid #fff !important;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1.6rem;
  height: 6rem;
  background: #333;
  color: #fff;
  padding: 1rem;
  margin: 3rem 0;
  border-radius: 0.25rem;
  outline: none;
  border: none;
  border-bottom: 2px solid #333;
`;

export const ProfileControl = styled.div``;

export const Title = styled.h1`
  width: 100%;
  color: #fff;
  font-size: 3.5vw;
  font-weight: 400;
  text-align: center;

  @media screen and (max-width: 50em) {
    font-size: 3rem;
  }
`;

export const AvatarList = styled.ul`
  list-style: none;
  margin: 2em 0;
`;

export const AvatarContainer = styled.li`
  position: relative;

  :hover {
    div:first-child::after {
      border-color: #e5e5e5;
    }

    p {
      color: #e5e5e5;
    }
  }

  svg {
    color: #fff;
    border: 2px solid #fff;
    border-radius: 50%;
    width: 4.8rem;
    height: 4.8rem;
    padding: 0.5rem;
    ${positionCenter}
    top:40%;
    cursor: pointer;
  }
`;

export const Avatar = styled.div`
  position: relative;
  height: 10vw;
  width: 10vw;
  max-height: 20rem;
  max-width: 20rem;
  min-height: 8.4rem;
  min-width: 8.4rem;
  cursor: pointer;
  opacity: 0.5;
  background-size: cover;
  border-radius: 4px;
  border: none;

  &.light {
    opacity: 1;
  }

  ${({ url }) =>
    url
      ? css`
          background-image: url(${url});
        `
      : css`
          background-image: url('/images/avatars/placeholder.png');
        `}

  ::after {
    content: '';
    display: block;
    border-radius: 4px;
    border: 0.3em solid transparent;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: all 0.1s ease-in;
  }
`;

export const Description = styled.p`
  line-height: 1.2em;
  min-height: 1.8em;
  color: grey;
  display: block;
  text-align: center;
  font-size: 1.3vw;
  margin: 0.6em 0;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: all 0.1s ease-in;

  @media screen and (min-width: 104.125em) {
    font-size: 2.4rem;
  }
`;

export const ActionButton = styled.button`
  margin: 2em 0.2em 1em;
  font-size: 1.2vw;
  border: 1px solid grey;
  color: grey;
  text-transform: uppercase;
  padding: 0.5em 1.5em;
  letter-spacing: 2px;
  cursor: pointer;
  background-color: transparent;

  :hover {
    outline: none;
    color: #fff;
    border: 1px solid #fff;
  }

  ${({ white }) =>
    white &&
    css`
      background: #fff;
      color: #000;
      border: 1px solid #fff;
      font-weight: 700;

      :hover {
        background: #c00;
        border: 1px solid #c00;
        color: #fff;
      }
      :disabled {
        background-color: #565656;
        color: #969696;
        cursor: default;
        border: 1px solid #969696;
      }
    `}

  @media screen and (max-width: 50em) {
    font-size: 1.3rem;
  }
`;

// icons

export const AddIcon = () => (
  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="#fff">
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
  </svg>
);

export const EditIcon = () => (
  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="#fff">
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
  </svg>
);

export const LeftArrow = () => (
  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
  </svg>
);
