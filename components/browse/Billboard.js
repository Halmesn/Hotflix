import * as styled from './billboardStyles';

import {
  getBanner,
  getTrailer,
  shortDescription,
  playerConfig,
} from 'helpers/browseHelpers';

import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player/youtube';

export default function Billboard({
  mute,
  avatar,
  setMute,
  category,
  donePlay,
  setLoading,
  distracted,
  windowWidth,
  showTrailer,
  setDonePlay,
  setDistracted,
  setShowTrailer,
  setPlayerVideo,
  setSelectedItem,
}) {
  const [trailer, setTrailer] = useState(null);
  const [banner, setBanner] = useState(null);

  const playerRef = useRef(null);
  const descriptionRef = useRef(null);

  // data fetching
  useEffect(() => {
    setDistracted(false);
    setDonePlay(false);
    setLoading(true);

    async function fetchBillboard() {
      const banner = await getBanner(category);
      setBanner(banner);
      const trailer = await getTrailer(category, banner.id);
      setTrailer(trailer);
      const delayDisplay = setTimeout(() => banner && setLoading(false), 1500);
      return delayDisplay;
    }
    const delayDisplay = fetchBillboard();
    return clearTimeout(delayDisplay);

    // here I use avatar as a dependency instead of selectedProfile is because
    // when using selectedProfile as a useEffect dependency, it'll cause a weird bug that
    // every single time when users switch between browser tabs,
    // the whole app will re-render itself, I haven't find a solution on Google yet,
    // but I managed to come out my own: destructing avatar property that'll definitely change when
    // selectedProfile changes, then using it as the useEffect dependency.
  }, [avatar, category]);

  // description animation
  const [descriptionHeight, setDescriptionHeight] = useState(0);
  useLayoutEffect(
    () => setDescriptionHeight(descriptionRef.current?.clientHeight || 0),
    [banner]
  );

  // for delaying video playing
  useEffect(() => {
    setShowTrailer(false);
    if (!trailer || windowWidth <= 600) return;
    const delayPlay = setTimeout(() => setShowTrailer(true), 2000);

    if (distracted) clearTimeout(delayPlay);
    return () => clearTimeout(delayPlay);
  }, [category, distracted, avatar, trailer, windowWidth]);

  return (
    <styled.Billboard>
      {showTrailer && trailer && windowWidth > 600 && (
        <styled.Video>
          <ReactPlayer
            ref={playerRef}
            url={`https://www.youtube-nocookie.com/embed/${trailer}`}
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
              src={`https://image.tmdb.org/t/p/${
                windowWidth <= 600
                  ? 'w780'
                  : windowWidth <= 1000
                  ? 'w1280'
                  : 'original'
              }${banner.backdrop_path}`}
              alt={banner.title}
              layout="fill"
              objectFit="cover"
            />
          </styled.Banner>
          {donePlay && windowWidth > 600 && (
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
            className={showTrailer && 'small'}
            style={{
              '--height': `${
                descriptionHeight + (windowWidth <= 1000 ? 25 : 65)
              }px`,
            }}
          >
            {banner.name || banner.title || banner.original_name}
          </styled.Title>
          {windowWidth > 600 && (
            <styled.Description
              className={showTrailer && 'no-desc'}
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
