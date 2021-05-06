import * as styled from './styles';

import FeatureImage from './FeatureImage';

export default function FeatureCard(props) {
  const { id, title, subTitle, direction } = props;
  return (
    <styled.Card>
      <styled.Wrapper direction={direction}>
        <styled.Text id={id}>
          <styled.Title>{title}</styled.Title>
          <styled.SubTitle>{subTitle}</styled.SubTitle>
        </styled.Text>
        <FeatureImage {...props} />
      </styled.Wrapper>
    </styled.Card>
  );
}
