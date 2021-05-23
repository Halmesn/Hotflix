import * as styled from './styles';

import Subscribe from 'components/home/subscribe/Subscribe';
import ImageBackground from 'components/layout/background/ImageBackground';

import { signIn } from 'next-auth/client';

export default function Hero() {
  return (
    <styled.Hero>
      <ImageBackground />
      <styled.Text>
        <styled.Title>Unlimited movies, TV shows and more.</styled.Title>
        <styled.SubTitle>Watch anywhere. Cancel at any time.</styled.SubTitle>
        <Subscribe />
        <styled.Demo
          onClick={() =>
            signIn('credentials', {
              email: 'guest@nextflix.com',
              password: process.env.NEXT_PUBLIC_TRIAL_ACCOUNT_PASSWORD,
            })
          }
        >
          Try Demo
        </styled.Demo>
      </styled.Text>
    </styled.Hero>
  );
}
