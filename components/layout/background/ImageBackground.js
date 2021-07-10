import * as styled from './styles';

import Image from 'next/image';

export default function ImageBackground() {
  return (
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
  );
}
