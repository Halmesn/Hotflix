import styled from 'styled-components';
import * as mixins from 'styles/mixins';

export const Footer = styled.footer`
  max-width: 100rem;
  margin: 0 auto;
  padding: 5rem 5%;
  box-sizing: content-box;

  @media only screen and (min-width: 34.375em) {
    padding: 7rem 4.5rem 0 4.5rem;
  }
`;

export const ContentContainer = styled.div`
  min-width: 1.9rem;
  width: 100%;
  padding-bottom: 2rem;
  font-size: 1.6rem;
  color: #757575;
  position: relative;
`;

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const LinkContainer = styled.ul`
  max-width: 100rem;
  font-size: 1.3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media only screen and (max-width: 46.25em) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 31.25em) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Link = styled.li`
  display: inline-block;
  margin-bottom: 1.6rem;
  min-width: 10rem;
  padding-right: 1.2rem;
  vertical-align: top;
  line-height: 1.3;

  ${mixins.footerLink}
`;

export const Title = styled.p`
  padding: 0;
  margin: 0 0 3rem;

  ${mixins.footerLink}
`;
export const Country = styled.p`
  font-size: 1.3rem;
  margin-top: 2.4rem;
  margin-bottom: 1.3rem;
`;
