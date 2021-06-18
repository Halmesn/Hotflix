import * as styled from './styles';

import FeatureCard from './FeatureCard';

import featureData from 'content/feature';

export default function Feature() {
  return (
    <styled.Feature>
      {featureData.map(({ ...data }) => (
        <FeatureCard key={data.id} {...data} />
      ))}
    </styled.Feature>
  );
}
