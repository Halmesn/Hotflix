import * as styled from './lolomoStyles';

import Slider from './Slider';

import { TMDB } from 'data/tmdbEndpoints';

export default function Lolomo({ category }) {
  return (
    <styled.Lolomo>
      <styled.SliderContainer>
        {TMDB[category].sections.map((section) => (
          <Slider key={section.title} section={section} />
        ))}
      </styled.SliderContainer>
    </styled.Lolomo>
  );
}
