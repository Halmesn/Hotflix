import * as styled from './lolomoStyles';

import Slider from './Slider';

import { TMDB } from 'data/tmdbEndpoints';

export default function Lolomo({
  loading,
  category,
  setDonePlay,
  setDistracted,
  setShowTrailer,
  setSelectedItem,
}) {
  return (
    <styled.Lolomo isLoading={loading}>
      {TMDB[category].sections.map((section) => (
        <Slider
          key={section.title}
          section={section}
          category={category}
          setDonePlay={setDonePlay}
          setSelectedItem={setSelectedItem}
          setDistracted={setDistracted}
          setShowTrailer={setShowTrailer}
        />
      ))}
    </styled.Lolomo>
  );
}
