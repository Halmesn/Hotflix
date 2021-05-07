import * as Styled from './styles';

import ImageBackground from 'components/layout/background/ImageBackground';
import AuthForm from './AuthForm';

export default function Authentication() {
  return (
    <Styled.Container>
      <ImageBackground />
      <AuthForm />
    </Styled.Container>
  );
}
