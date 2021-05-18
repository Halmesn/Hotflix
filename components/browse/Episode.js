import * as styled from './episodeStyles';

import {
  shortDescription,
  getEpisodes as fetchEpisodes,
} from 'helpers/browseHelpers';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Episode({ id, seasons, placeholder }) {
  const [season, setSeason] = useState('1');
  const [episodes, setEpisodes] = useState();
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const getEpisodes = async () => {
      const episodes = await fetchEpisodes(season, id);
      setEpisodes(episodes);
    };
    getEpisodes();
  }, [id, season]);

  return (
    <styled.Episode>
      <styled.Header>
        <styled.Title>Episodes</styled.Title>
        <styled.Dropdown
          onChange={({ target }) => setSeason(target.value)}
          value={season}
        >
          {seasons.map(({ name, season_number }) => (
            <option key={season_number} value={season_number}>
              {name}
            </option>
          ))}
        </styled.Dropdown>
      </styled.Header>
      {episodes && (
        <styled.List>
          {episodes.map(
            ({ id, episode_number, name, overview, still_path }, i) =>
              (showAll || (!showAll && i < 10)) && (
                <styled.ListItem key={id}>
                  <styled.Panel className="episode-number">
                    {episode_number}
                  </styled.Panel>
                  <styled.Panel className="episode-image">
                    <styled.Wrapper className="image">
                      <Image
                        src={`https://image.tmdb.org/t/p/w185/${
                          still_path || placeholder
                        }`}
                        width={154}
                        height={80}
                        alt={`Episode ${episode_number}`}
                      />
                    </styled.Wrapper>
                  </styled.Panel>
                  <styled.Panel className="episode-details">
                    <styled.ListItemTitle>{name}</styled.ListItemTitle>
                    <styled.Overview>
                      {overview.length === 0
                        ? 'No overview available'
                        : shortDescription(overview, 185)}
                    </styled.Overview>
                  </styled.Panel>
                </styled.ListItem>
              )
          )}
          {episodes.length > 10 && (
            <styled.ShowMore
              onClick={(e) => {
                e.stopPropagation();
                setShowAll(!showAll);
              }}
            >
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
