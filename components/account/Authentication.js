import * as Styled from './styles';

import ImageBackground from 'components/layout/background/ImageBackground';
import AuthState from './AuthState';

export default function Authentication() {
  return (
    <Styled.Container>
      <ImageBackground />
      <AuthState />
    </Styled.Container>
  );
}
