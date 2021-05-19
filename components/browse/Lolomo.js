import * as styled from './lolomoStyles';

import Slider from './Slider';

import { TMDB } from 'data/tmdbEndpoints';

export default function Lolomo({ category, loading }) {
  return (
    <styled.Lolomo isLoading={loading}>
      {TMDB[category].sections.map((section) => (
        <Slider key={section.title} section={section} />
      ))}
    </styled.Lolomo>
  );
}
