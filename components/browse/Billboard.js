import * as styled from './contentStyles';

import { NextflixContext } from 'pages/browse';
import { ProfileContext } from 'components/layout/Layout';

import { useState, useContext, useRef, useEffect } from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player/youtube';

export default function Billboard() {
  const { TVBanner, TVTrailer, movieBanner, movieTrailer } =
    useContext(NextflixContext);
  const { category } = useContext(ProfileContext);

  const [trailer, setTrailer] = useState(TVTrailer);
  const [banner, setBanner] = useState(TVBanner);
  const [mute, setMute] = useState(true);
  const [holdingTrailer, setHoldingTrailer] = useState(true);

  const playerRef = useRef(null);

  useEffect(() => {
    switch (category) {
      case 'TVShows':
        setTrailer(TVTrailer);
        setBanner(TVBanner);
        break;
      case 'movies':
        setTrailer(movieTrailer);
        setBanner(movieBanner);
        break;
    }
  }, [category]);

  useEffect(() => {
    setTimeout(() => setHoldingTrailer(false), 2000);
    return () => clearTimeout();
  }, []);

  const playerConfig = {
    youtube: {
      playerVars: {
        // player not respond to keyboard controls
        disablekb: 1,
        // video annotations not be shown
        iv_load_policy: 3,
      },
    },
  };

  const shortDescription = (description, length) =>
    description.length > length
      ? description.substr(0, length - 1) + '...more in the info.'
      : description;

  return (
    <styled.Billboard>
      {trailer && !holdingTrailer && (
        <styled.Video>
          <ReactPlayer
            ref={playerRef}
            url={`https://www.youtube.com/watch?v=${trailer}`}
            className="trailer"
            width="100%"
            height="100%"
            playing
            muted={mute}
            onEnded={() => {
              setTrailer();
              setHoldingTrailer(true);
            }}
            config={playerConfig}
          />
          <styled.Mute onClick={() => setMute(!mute)}>
            {mute ? <styled.MuteIcon /> : <styled.NotMuteIcon />}
          </styled.Mute>
        </styled.Video>
      )}
      {banner && holdingTrailer && (
        <>
          <styled.Banner>
            <Image
              src={`https://image.tmdb.org/t/p/original${TVBanner.backdrop_path}`}
              alt={TVBanner.title}
              layout="fill"
              objectFit="cover"
            />
          </styled.Banner>
          <styled.Overlay fullOverlay={!trailer} />
        </>
      )}
      <styled.DetailContainer>
        <styled.Title className={!holdingTrailer ? 'small' : 'big'}>
          {banner.name || banner.title || banner.original_name}
        </styled.Title>
        <styled.Description className={!holdingTrailer ? 'no-desc' : ''}>
          {shortDescription(banner.overview, 185)}
        </styled.Description>
      </styled.DetailContainer>
    </styled.Billboard>
  );
}
