import * as styled from './FullScreenBgStyles';
import Image from 'next/image';

export default function FullScreenBg() {
  return (
    <styled.Container>
      <styled.Background>
        <styled.ImageContainer>
          <Image
            src="/images/misc/background.jpg"
            alt="movie and TV shows"
            layout="fill"
            objectFit="cover"
          />
        </styled.ImageContainer>
        <styled.Gradient />
      </styled.Background>
    </styled.Container>
  );
}
