import FeatureCard from './FeatureCard';

import featureData from 'data/static/feature';

export default function Feature() {
  return (
    <section>
      {featureData.map(({ ...data }) => (
        <FeatureCard key={data.id} {...data} />
      ))}
    </section>
  );
}
