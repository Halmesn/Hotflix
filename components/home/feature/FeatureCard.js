import * as styled from './FeatureStyles';

import Image from 'next/image';

export default function FeatureCard({ children }) {
  return <styled.Card>{children}</styled.Card>;
}

FeatureCard.Wrapper = ({ children, ...props }) => (
  <styled.Wrapper {...props}>{children}</styled.Wrapper>
);

FeatureCard.Text = ({ children, ...props }) => (
  <styled.Text {...props}>{children}</styled.Text>
);

FeatureCard.Title = ({ children, ...props }) => (
  <styled.Title {...props}>{children}</styled.Title>
);

FeatureCard.SubTitle = ({ children, ...props }) => (
  <styled.SubTitle {...props}>{children}</styled.SubTitle>
);

FeatureCard.Image = ({ ...props }) => (
  <styled.ImageContainer>
    <styled.Image id={props.id}>
      <Image {...props} width={640} height={480} />
      <styled.AnimationContainer id={props.id}>
        {props.id === 2 ? (
          <>
            <styled.AnimationImage>
              <img src={props.post} alt={props.alt} />
            </styled.AnimationImage>
            <styled.AnimationText>
              <div>Stranger Things</div>
              <div>Downloading</div>
            </styled.AnimationText>
          </>
        ) : (
          <styled.Video autoPlay muted loop playsInline>
            <source src={props.video} type="video/mp4" />
          </styled.Video>
        )}
      </styled.AnimationContainer>
    </styled.Image>
  </styled.ImageContainer>
);
