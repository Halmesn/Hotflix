import * as styled from './lolomoStyles';

import Slider from './Slider';

import { TMDB } from 'data/dynamic/tmdbEndpoints';

export default function Lolomo({ loading, category, rowsShown }) {
  return (
    <styled.Lolomo isLoading={loading}>
      {TMDB[category].sections.map(
        (section, i) =>
          i < rowsShown && (
            <Slider key={section.title} section={section} category={category} />
          )
      )}
    </styled.Lolomo>
  );
}
