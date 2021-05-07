import * as Styled from './styles';

import ImageBackground from 'components/layout/background/ImageBackground';
import AuthForm from './AuthForm';

export default function Authentication() {
  let vh = window.innerHeight * 0.01;

  return (
    <Styled.Container style={{ '--vh': `${vh}px` }}>
      <ImageBackground />
      <AuthForm />
    </Styled.Container>
  );
}
