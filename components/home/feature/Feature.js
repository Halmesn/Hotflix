import * as styled from './FeatureStyles';

import FeatureCard from './FeatureCard';

import featureData from 'content/feature';

export default function Feature() {
  return (
    <styled.Feature>
      {featureData.map(
        ({ id, title, subTitle, image, alt, innerImage, direction, video }) => (
          <FeatureCard key={id}>
            <FeatureCard.Wrapper direction={direction}>
              <FeatureCard.Text id={id}>
                <FeatureCard.Title>{title}</FeatureCard.Title>
                <FeatureCard.SubTitle>{subTitle}</FeatureCard.SubTitle>
              </FeatureCard.Text>
              <FeatureCard.Image
                src={image}
                alt={alt}
                id={id}
                video={video}
                innerImage={innerImage}
              />
            </FeatureCard.Wrapper>
          </FeatureCard>
        )
      )}
    </styled.Feature>
  );
}
