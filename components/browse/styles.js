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
  ${gridCenter}
  row-gap: 3rem;
  max-width: 80%;

  @media screen and (max-width: 30em) {
    max-width: 85%;
  }
`;

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

export const Wrapper = styled.div`
  position: relative;

  &.delete {
    max-width: 60rem;
    text-align: center;
    h1 {
      min-width: auto;
    }
    p {
      color: #fff;
      margin: 3rem 3rem 0;
      font-size: 2rem;
    }
  }

  &.profile-grid {
    display: flex;
    justify-content: center;
    gap: 2vw;

    @media screen and (max-width: 50em) {
      flex-wrap: wrap;
      gap: 1.5rem;
    }
  }

  &.edit-profile {
    @media screen and (max-width: 46.25em) {
      max-width: 20rem;
    }

    @media screen and (max-width: 30em) {
      max-width: 15rem;
    }

    img {
      border-radius: 4px;
      cursor: pointer;
    }

    svg {
      color: #fff;
      border: 2px solid #fff;
      border-radius: 50%;
      width: 2.5vw;
      height: 2.5vw;
      min-height: 3rem;
      min-width: 3rem;
      padding: 0.5rem;
      background: #000;
      cursor: pointer;
      position: absolute;
      bottom: 2rem;
      left: 1rem;
    }
  }

  &.placeholder {
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
      width: 2.5vw;
      height: 2.5vw;
      min-height: 3rem;
      min-width: 3rem;
      padding: 0.5rem;
      ${positionCenter}
      top:40%;
      cursor: pointer;
    }
  }

  &.text {
    h1 {
      font-size: clamp(2.5rem, 2.3vw, 2.3vw);
      font-weight: 800;
      margin-bottom: 0.5rem;
      text-align: left;
    }

    p {
      font-size: clamp(1.3rem, 1.5vw, 1.5vw);
    }
  }

  &.flex {
    display: flex;
    align-items: center;

    p {
      font-size: clamp(1.3rem, 1.5vw, 1.5vw);
      margin-right: 1rem;
    }

    img {
      border-radius: 4px;
      @media screen and (max-width: 30em) {
        max-width: 4.5rem !important;
      }
    }
  }

  &.arrow {
    font-weight: 800;

    svg {
      width: 4vw;
      height: 4vw;
      margin-right: 1.6rem;
      color: #fff;
      cursor: pointer;
      user-select: none;
      fill: currentColor;

      @media screen and (max-width: 30em) {
        width: 3.2rem;
        height: 3.2rem;
        margin-right: 0.5rem;
      }
    }
  }

  &.buttons {
    @media screen and (max-width: 30em) {
      display: flex;
      flex-direction: column;

      button {
        margin-top: 0;
        margin-bottom: 2rem;
      }
    }
  }
`;

export const Placeholder = styled.div`
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

  ${({ empty }) =>
    empty &&
    css`
      min-height: 13rem;
      min-width: 13rem;
    `}

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

export const AvatarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4vw;
  color: #fff;

  @media screen and (max-width: 30em) {
    margin: 0;
    margin-bottom: 4rem;
  }
`;

export const AvatarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, minmax(8rem, 14rem));
  grid-gap: 0.6vw;
  place-content: center;

  @media screen and (max-width: 68.75em) {
    grid-template-columns: repeat(5, minmax(8rem, 11rem));
  }

  @media screen and (max-width: 40.315em) {
    margin: 0;
    grid-gap: 0.5rem;
    grid-template-columns: repeat(3, minmax(8rem, 10rem));
  }
`;

export const AvatarItem = styled.div`
  .avatar {
    cursor: pointer;
    border: 3px solid transparent !important;
    border-radius: 0.5rem;
    transition: all 0.1s ease-in;

    :hover {
      border: 3px solid #fff !important;
    }

    &.used {
      pointer-events: none;
      filter: grayscale(1);
      opacity: 0.5;
    }
  }
`;

export const NameInput = styled.input`
  width: 100%;
  font-size: 1.6rem;
  height: 6rem;
  background: #333;
  color: #fff;
  padding: 1rem;
  border-radius: 0.25rem;
  outline: none;
  border: none;
  border-bottom: 2px solid #333;
  max-width: 35rem;
`;

export const InputError = styled.p`
  margin-top: -1rem;
  font-size: 1.4rem;
  color: #e87c03;
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

  @media screen and (max-width: 50em) {
    font-size: 1.2rem;
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
