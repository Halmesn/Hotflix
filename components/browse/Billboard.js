import * as styled from './billboardStyles';

import { NextflixContext } from 'pages/browse';
import { ProfileContext } from 'components/layout/Layout';

import { useState, useContext, useRef, useEffect } from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player/youtube';

export default function Billboard({
  setPlayerVideo,
  setSelectedItem,
  mute,
  setMute,
  showTrailer,
  setShowTrailer,
}) {
  const { TVBanner, TVTrailer, movieBanner, movieTrailer } =
    useContext(NextflixContext);
  const { category } = useContext(ProfileContext);

  const [trailer, setTrailer] = useState(TVTrailer);
  const [banner, setBanner] = useState(TVBanner);

  const playerRef = useRef(null);
  const descriptionRef = useRef(null);

  const [descriptionHeight, setDescriptionHeight] = useState(0);

  useEffect(() => {
    // for description animation
    descriptionRef.current.clientHeight !== 0 &&
      setDescriptionHeight(descriptionRef.current.clientHeight);
  });

  useEffect(() => {
    setShowTrailer(false);
    switch (category) {
      case 'TVShows':
        setBanner(TVBanner);
        setTrailer(TVTrailer);
        break;
      case 'movies':
        setBanner(movieBanner);
        setTrailer(movieTrailer);
        break;
    }

    setTimeout(() => setShowTrailer(true), 3000);
    return () => clearTimeout();
  }, [category]);

  const playerConfig = {
    playerVars: {
      // player not respond to keyboard controls
      disablekb: 1,
      // video annotations not be shown
      iv_load_policy: 3,
    },
  };

  const shortDescription = (description, length) =>
    description.length > length
      ? description.substr(0, length - 1) + '...'
      : description;

  return (
    <styled.Billboard>
      {showTrailer && (
        <styled.Video>
          <ReactPlayer
            ref={playerRef}
            url={`https://www.youtube.com/watch?v=${trailer}`}
            className="trailer"
            width="100%"
            height="100%"
            playing
            muted={mute}
            onEnded={() => setShowTrailer(false)}
            config={playerConfig}
          />
          <styled.Mute onClick={() => setMute(!mute)}>
            {mute ? <styled.MuteIcon /> : <styled.NotMuteIcon />}
          </styled.Mute>
        </styled.Video>
      )}
      {!showTrailer && (
        <>
          <styled.Banner>
            <Image
              src={`https://image.tmdb.org/t/p/original${banner.backdrop_path}`}
              alt={banner.title}
              layout="fill"
              objectFit="cover"
            />
          </styled.Banner>
          <styled.Overlay showOverlay={!showTrailer} />
        </>
      )}
      <styled.DetailContainer>
        <styled.Title
          className={showTrailer ? 'small' : ''}
          style={{ '--height': `${descriptionHeight + 65}px` }}
        >
          {banner.name || banner.title || banner.original_name}
        </styled.Title>
        <styled.Description
          className={showTrailer ? 'no-desc' : ''}
          ref={descriptionRef}
          style={{ '--height': `${descriptionHeight}px` }}
        >
          {shortDescription(banner.overview, 185)}
        </styled.Description>
        <styled.ButtonWrapper>
          <styled.PlayButton
            onClick={() => {
              setPlayerVideo({
                trailer,
                start: playerRef.current?.getCurrentTime() || 0,
              });
              setShowTrailer(false);
            }}
          >
            <styled.PlayIcon />
            <span>Play</span>
          </styled.PlayButton>
          <styled.InfoButton
            onClick={() => {
              setSelectedItem({
                id: banner.id,
                key: trailer,
                start: playerRef.current?.getCurrentTime() || 0,
              });
            }}
          >
            <styled.InfoIcon />
            <span>More Info</span>
          </styled.InfoButton>
        </styled.ButtonWrapper>
      </styled.DetailContainer>
    </styled.Billboard>
  );
}
