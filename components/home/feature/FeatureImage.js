import * as styled from './styles';

import Image from 'next/image';

export default function FeatureImage(props) {
  const { id, image, alt, post, video } = props;
  return (
    <styled.ImageContainer>
      <styled.Image id={id}>
        <Image src={image} alt={alt} width={640} height={480} />
        <styled.AnimationContainer id={id}>
          {id === 2 ? (
            <>
              <styled.AnimationImage>
                <img src={post} alt={alt} />
              </styled.AnimationImage>
              <styled.AnimationText>
                <div>Stranger Things</div>
                <div>Downloading</div>
              </styled.AnimationText>
            </>
          ) : (
            <styled.Video autoPlay muted loop playsInline>
              <source src={video} type="video/mp4" />
            </styled.Video>
          )}
        </styled.AnimationContainer>
      </styled.Image>
    </styled.ImageContainer>
  );
}
