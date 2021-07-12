import * as styled from './episodeStyles';

import {
  shortDescription,
  getEpisodes as fetchEpisodes,
} from 'helpers/browseHelpers';
import useSafeMounted from 'hooks/useSafeMounted';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export const onShowMoreClick = (e, setState) => {
  e.stopPropagation();
  setState((showAll) => !showAll);
};

export default function Episode({ id, seasons, placeholder }) {
  const [season, setSeason] = useState('1');
  const [episodes, setEpisodes] = useState();
  const [showAll, setShowAll] = useState(false);

  const mountRef = useSafeMounted();

  useEffect(() => {
    const getEpisodes = async () => {
      const episodes = await fetchEpisodes(season, id);
      mountRef.current && setEpisodes(episodes);
    };
    getEpisodes();
  }, [id, season]);

  return (
    <styled.Episode>
      <styled.Header>
        <styled.Title>Episodes</styled.Title>
        <styled.Select
          onChange={({ target }) => setSeason(target.value)}
          value={season}
        >
          {seasons.map(({ name, season_number }) => (
            <option key={season_number} value={season_number}>
              {name}
            </option>
          ))}
        </styled.Select>
      </styled.Header>
      {episodes && (
        <styled.List>
          {episodes.map(
            ({ id, episode_number, name, overview, still_path }, i) =>
              // if i > 10 && showAll is false, then it will not be returned'
              (showAll || (!showAll && i < 10)) && (
                <styled.ListItem key={id}>
                  <styled.Wrapper className="number">
                    {episode_number}
                  </styled.Wrapper>
                  <styled.Wrapper className="image">
                    <Image
                      src={`https://image.tmdb.org/t/p/w185/${
                        still_path || placeholder
                      }`}
                      width={154}
                      height={90}
                      alt={`Episode ${episode_number}`}
                    />
                  </styled.Wrapper>
                  <styled.Wrapper className="details">
                    <styled.ListItemTitle>{name}</styled.ListItemTitle>
                    <styled.Overview>
                      {overview.length === 0
                        ? 'No overview available'
                        : shortDescription(overview, 185)}
                    </styled.Overview>
                  </styled.Wrapper>
                </styled.ListItem>
              )
          )}
          {episodes.length > 10 && (
            <styled.ShowMore onClick={(e) => onShowMoreClick(e, setShowAll)}>
              {showAll ? <styled.ArrowUp /> : <styled.ArrowDown />}
            </styled.ShowMore>
          )}
          {episodes.length === 0 && (
            <p className="no-episodes">No episodes yet.</p>
          )}
        </styled.List>
      )}
    </styled.Episode>
  );
}
