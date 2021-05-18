import * as styled from './billboardStyles';

import { ProfileContext } from 'components/layout/Layout';

import useWindowDimensions from 'hooks/useWindowDimensions';
import { getBanner, getTrailer, shortDescription } from 'helpers/browseHelpers';

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
  distracted,
  setDistracted,
  setLoading,
}) {
  const { category, selectedProfile } = useContext(ProfileContext);
  const { avatar } = selectedProfile;
  const [trailer, setTrailer] = useState(null);
  const [banner, setBanner] = useState(null);
  const { width } = useWindowDimensions();

  // for replay functionality
  const [donePlay, setDonePlay] = useState(false);

  const playerRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    setBanner(null);
    setTrailer(null);
    async function fetchBillboard() {
      const banner = await getBanner(category);
      setBanner(banner);
      const delayDisplay = setTimeout(() => banner && setLoading(false), 1500);
      if (width > 600) {
        const trailer = await getTrailer(category, banner.id);
        setTrailer(trailer);
      }
      return delayDisplay;
    }
    const delayDisplay = fetchBillboard();
    return clearTimeout(delayDisplay);
  }, [width, avatar, category]);

  // for description animation
  const [descriptionHeight, setDescriptionHeight] = useState(0);
  useEffect(() => {
    descriptionRef.current?.clientHeight !== 0 &&
      setDescriptionHeight(descriptionRef.current?.clientHeight);
  });

  // for visual effects
  useEffect(() => {
    setDistracted(false);
    setDonePlay(false);
  }, [category, avatar]);

  useEffect(() => {
    if (!trailer) return;
    setShowTrailer(false);
    const delayPlay = setTimeout(() => setShowTrailer(true), 2000);

    if (distracted) clearTimeout(delayPlay);
    return () => clearTimeout(delayPlay);
  }, [category, distracted, avatar, trailer]);

  const playerConfig = {
    playerVars: {
      // player not respond to keyboard controls
      disablekb: 1,
      // video annotations not be shown
      iv_load_policy: 3,
    },
  };

  return (
    <styled.Billboard>
      {showTrailer && trailer && (
        <styled.Video>
          <ReactPlayer
            ref={playerRef}
            url={`https://www.youtube.com/watch?v=${trailer}`}
            className="trailer"
            width="100%"
            height="100%"
            playing={!donePlay}
            muted={mute}
            onEnded={() => {
              setShowTrailer(false);
              setDonePlay(true);
            }}
            config={playerConfig}
          />
          <styled.Mute onClick={() => setMute(!mute)}>
            {mute ? <styled.MuteIcon /> : <styled.NotMuteIcon />}
          </styled.Mute>
        </styled.Video>
      )}
      {!showTrailer && banner && (
        <>
          <styled.Banner>
            <Image
              src={`https://image.tmdb.org/t/p/original${banner.backdrop_path}`}
              alt={banner.title}
              layout="fill"
              objectFit="cover"
            />
          </styled.Banner>
          {donePlay && (
            <styled.Replay
              onClick={() => {
                setDonePlay(false);
                setShowTrailer(true);
              }}
            >
              <styled.ReplayIcon />
            </styled.Replay>
          )}
          <styled.Overlay showOverlay={!showTrailer} />
        </>
      )}
      {banner && (
        <styled.DetailContainer>
          <styled.Title
            className={showTrailer ? 'small' : ''}
            style={{
              '--height': `${descriptionHeight + (width < 800 ? 25 : 65)}px`,
            }}
          >
            {banner.name || banner.title || banner.original_name}
          </styled.Title>
          {width > 600 && (
            <styled.Description
              className={showTrailer ? 'no-desc' : ''}
              ref={descriptionRef}
              style={{ '--height': `${descriptionHeight}px` }}
            >
              {shortDescription(banner.overview, 185)}
            </styled.Description>
          )}
          <styled.ButtonWrapper>
            <styled.PlayButton
              onClick={() => {
                setPlayerVideo({
                  trailer,
                  start: playerRef.current?.getCurrentTime() || 0,
                });
                setShowTrailer(false);
                setDistracted(true);
                setDonePlay(true);
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
                  placeholder: banner.backdrop_path,
                });
                setDistracted(true);
                setDonePlay(true);
              }}
            >
              <styled.InfoIcon />
              <span>More Info</span>
            </styled.InfoButton>
          </styled.ButtonWrapper>
        </styled.DetailContainer>
      )}
    </styled.Billboard>
  );
}
