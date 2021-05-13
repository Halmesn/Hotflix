import styled from 'styled-components';

import Link from 'next/link';

export const Header = styled.header`
  position: ${({ url }) =>
    url === '/' || url === '/browse' ? 'fixed' : 'absolute'};
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
  transition: all 0.5s;

  background: ${({ showBackground }) => (showBackground ? '#141414' : 'none')};
`;

export const Nav = styled.nav`
  width: 95%;
  margin: 0 auto;
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  position: relative;
  width: ${({ url }) => (url === '/browse' ? '11rem' : '20rem')};

  @media only screen and (max-width: 90.625em) {
    width: 15rem;
  }

  @media only screen and (max-width: 59.375em) {
    width: 12rem;
  }

  @media only screen and (max-width: 34.375em) {
    width: 10rem;
  }
`;

const NextLink = ({ children, className, href }) => (
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
);

export const SignIn = styled(NextLink)`
  background-color: #e50914;
  display: inline-block;
  font-size: 1.6rem;
  padding: 0.7rem 1.7rem;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  align-self: start;
  margin-top: 0.7rem;

  @media only screen and (max-width: 90.625em) {
    margin-top: 0rem;
  }

  @media only screen and (max-width: 59.375em) {
    margin-top: -0.5rem;
  }

  @media only screen and (max-width: 34.375em) {
    font-size: 1.2rem;
  }
`;

export const Menu = styled.div`
  margin: 0 1rem 0 2.4rem;
  cursor: pointer;

  img {
    border-radius: 4px;
  }
`;

export const Dropdown = styled.div`
  opacity: 0;
  pointer-events: none;
  z-index: -1;
  position: absolute;
  top: 6.6rem;
  right: 4.5rem;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  font-size: 1.28rem;
  border: 1px solid #69696979;
  min-width: 16rem;
  padding: 1.2rem 0;
  transition: all 0.1s ease-in;

  ${Menu}:hover & {
    opacity: 1;
    pointer-events: auto;
  }
  ${DropdownOptions}:hover & {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const DropdownOptions = styled.div`
  display: flex;
  place-items: center;
  padding: 0.1rem 0.25rem;
  cursor: pointer;

  &.text {
    font-weight: 600;
    padding: 0.75rem;
  }
`;
