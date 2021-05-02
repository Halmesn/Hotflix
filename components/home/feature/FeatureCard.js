import * as styled from './FeatureStyles';

import Image from 'next/image';

export default function FeatureCard({ children, direction = 'row', ...props }) {
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
  <styled.Image>
    <styled.AnimationContainer id={props.id}>
      <Image {...props} width={640} height={480} />
      {props.id === 2 ? (
        <styled.Animation id={props.id}>
          <styled.AnimationImage>
            <img src={props.innerImage} alt={props.alt} />
          </styled.AnimationImage>
          <styled.AnimationText>
            <div>Stranger Things</div>
            <div>Downloading</div>
          </styled.AnimationText>
        </styled.Animation>
      ) : (
        <styled.Animation id={props.id}>
          <styled.Video autoPlay muted loop playsInline>
            <source src={props.video} type="video/mp4" />
          </styled.Video>
        </styled.Animation>
      )}
    </styled.AnimationContainer>
  </styled.Image>
);
