import * as styled from './styles';

import Subscribe from 'components/home/subscribe/Subscribe';
import ImageBackground from 'components/layout/background/ImageBackground';
import FormSpinner from 'components/account/FormSpinner';

import { useState } from 'react';
import { signIn } from 'next-auth/client';

export default function Hero() {
  const [isLoading, setIsLoading] = useState(false);

  const onSignInClick = async () => {
    setIsLoading(true);

    await signIn('credentials', {
      email: 'guest@hotflix.com',
      password: process.env.NEXT_PUBLIC_TRIAL_ACCOUNT_PASSWORD,
    });
  };

  return (
    <styled.Hero>
      <ImageBackground />
      <styled.Text>
        <styled.Title>Unlimited movies, TV shows and more.</styled.Title>
        <styled.SubTitle>Watch anywhere. Cancel at any time.</styled.SubTitle>
        <Subscribe />
        <styled.Demo onClick={onSignInClick} disabled={isLoading}>
          {isLoading ? <FormSpinner /> : 'Try Demo'}
        </styled.Demo>
      </styled.Text>
    </styled.Hero>
  );
}
