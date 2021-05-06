import styled from 'styled-components';

import Link from 'next/link';

export const Header = styled.header`
  position: fixed;
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
  justify-content: space-between;
`;

export const Logo = styled.div`
  position: relative;
  width: 20rem;

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
