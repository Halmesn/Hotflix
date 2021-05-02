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
    <styled.Animation
      margin={
        props.id === 1
          ? '-10% -5% -5% 0'
          : props.id === 2
          ? '-8% 0 -4% -15%'
          : '-5% -10% 0 0'
      }
    >
      <Image {...props} width={500} height={380} />
    </styled.Animation>
  </styled.Image>
);
