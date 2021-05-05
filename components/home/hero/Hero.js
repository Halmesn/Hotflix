import * as styled from './HeroStyles';

import Subscribe from 'components/home/subscribe/Subscribe';
import Image from 'next/image';

export default function Hero() {
  return (
    <styled.Hero>
      <styled.Background>
        <styled.ImageContainer>
          <Image
            src="/images/hero/home-bg.jpg"
            alt="movie and TV shows"
            layout="fill"
            objectFit="cover"
          />
        </styled.ImageContainer>
        <styled.Gradient />
      </styled.Background>
      <styled.Text>
        <styled.Title>Unlimited movies, TV shows and more.</styled.Title>
        <styled.SubTitle>Watch anywhere. Cancel at any time.</styled.SubTitle>
        <Subscribe />
      </styled.Text>
    </styled.Hero>
  );
}
