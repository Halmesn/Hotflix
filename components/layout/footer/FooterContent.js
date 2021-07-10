import * as styled from './styles';
import links from 'data/static/links';

export default function FooterContent() {
  return (
    <styled.ContentContainer>
      <styled.Wrapper>
        <styled.Title>
          Questions? Shoot an&nbsp;
          <a href="mailto:xiaxi.li.syd@gmail.com">email</a>
        </styled.Title>
        <styled.LinkContainer>
          {links.map(({ id, text }) => (
            <styled.Link key={id}>
              <a href="#">
                <span>{text}</span>
              </a>
            </styled.Link>
          ))}
        </styled.LinkContainer>
        <styled.Country>
          ©Copyright by <a href="https://www.netflix.com">Netflix</a>. This
          website is for learning and job hunting purpose only.{' '}
          <i>
            Logos, images, fonts and videos: Netflix, Inc. All Rights reserved.
          </i>
        </styled.Country>
      </styled.Wrapper>
    </styled.ContentContainer>
  );
}
