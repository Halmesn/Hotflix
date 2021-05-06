import * as styled from './styles';

import Subscribe from 'components/home/subscribe/Subscribe';
import ImageBackground from 'components/layout/background/ImageBackground';

export default function Hero() {
  return (
    <styled.Hero>
      <ImageBackground />
      <styled.Text>
        <styled.Title>Unlimited movies, TV shows and more.</styled.Title>
        <styled.SubTitle>Watch anywhere. Cancel at any time.</styled.SubTitle>
        <Subscribe />
      </styled.Text>
    </styled.Hero>
  );
}
