import * as styled from './episodeStyles';

import {
  shortDescription,
  getEpisodes as fetchEpisodes,
} from 'helpers/browseHelpers';

import { useState, useEffect } from 'react';

export default function Episode({ id, seasons }) {
  const [season, setSeason] = useState('1');
  const [episodes, setEpisodes] = useState();
  const [showAll, setShowAll] = useState(false);

  console.log(episodes);

  useEffect(() => {
    const getEpisodes = async () => {
      const episodes = await fetchEpisodes(season, id);
      setEpisodes(episodes);
    };
    getEpisodes();
  }, [id, season]);

  return <div></div>;
}
