import * as styled from './cardStyles';

import { MuteIcon, NotMuteIcon } from './billboardStyles';

import { SliderContext } from 'components/browse/Content';
import { ProfileContext } from 'components/layout/Layout';
import { GenresContext } from 'pages/browse';

import {
  getTrailer as fetchTrailer,
  isNewRelease,
  playerConfig,
} from 'helpers/browseHelpers';

import React, { useState, useEffect, useRef, useContext } from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player/youtube';

export default function Card({ item, section, mouseDown, dragging, isMobile }) {
  const {
    mute,
    setMute,
    setDonePlay,
    setDistracted,
    setShowTrailer,
    setSelectedItem,
  } = useContext(SliderContext);
  const { category } = useContext(ProfileContext);
  const { TvGenres, MovieGenres } = useContext(GenresContext);

  // const [genres, setGenres] = useState(null);
  const [sliderTrailer, setSliderTrailer] = useState(null);

  // for delay video play
  const [timer, setTimer] = useState(null);

  // separate click from drag for Slider component usage
  const [clientXonMouseDown, setClientXonMouseDown] = useState(null);

  const playerRef = useRef();

  // render condition check: when users hover a poster, still render other posters
  const showPoster = (item) => sliderTrailer?.id !== item.id;

  const onPosterHover = (id) => {
    if (isMobile) return;
    const delayPlay = setTimeout(async () => {
      const trailer = await fetchTrailer(category, id);
      setSliderTrailer({
        // set unique id to identify the card that user hovers
        id: id,
        url: trailer,
        isLoaded: false,
      });
      // clean up Billboard states
      setShowTrailer(false);
      setDistracted(true);
      setDonePlay(true);
    }, 800);
    setTimer(delayPlay);
  };

  // isLoaded state: when the video player is loaded, hide poster
  const onTrailerReady = () =>
    sliderTrailer && setSliderTrailer({ ...sliderTrailer, isLoaded: true });

  // when users dragging slider disables video playing
  useEffect(() => {
    if (dragging && mouseDown) {
      clearTimeout(timer);
      setSliderTrailer(null);
    }
  }, [dragging, mouseDown]);

  const onPosterClick = (e, item) => {
    if (e.clientX !== clientXonMouseDown) return;
    setSelectedItem({
      id: item.id,
      start: playerRef.current?.getCurrentTime() || 0,
      placeholder: item.backdrop_path,
    });
    setDistracted(true);
    setDonePlay(true);
  };

  return (
    <styled.CardContainer key={item.id} dragging={dragging} isMobile={isMobile}>
      <styled.Card
        onMouseEnter={() => onPosterHover(item.id)}
        onMouseLeave={() => {
          clearTimeout(timer);
          setSliderTrailer(null);
        }}
        onMouseDown={(e) => setClientXonMouseDown(e.clientX)}
        onClick={(e) => onPosterClick(e, item)}
        mouseDown={mouseDown}
      >
        {!showPoster(item) && sliderTrailer && (
          <styled.Video className={sliderTrailer.isLoaded ? 'visible' : ''}>
            <ReactPlayer
              ref={playerRef}
              url={`https://www.youtube-nocookie.com/embed/${sliderTrailer.url}`}
              width="100%"
              height="100%"
              playing
              muted={mute}
              onReady={onTrailerReady}
              onEnded={() => setSliderTrailer(null)}
              config={playerConfig}
              className="card-trailer"
            />
            <styled.Mute
              onMouseDown={(e) => {
                e.stopPropagation();
                setMute(!mute);
              }}
            >
              {mute ? <MuteIcon /> : <NotMuteIcon />}
            </styled.Mute>
          </styled.Video>
        )}
        {(showPoster(item) || !sliderTrailer?.isLoaded) && (
          <styled.Poster>
            <Image
              src={`${
                section?.size === 'large'
                  ? `https://image.tmdb.org/t/p/w342/${item.poster_path}`
                  : `https://image.tmdb.org/t/p/w300/${item.backdrop_path}`
              }`}
              alt={item.name || item.title}
              width={300}
              height={section?.size === 'large' ? 448 : 165}
            />
          </styled.Poster>
        )}
        <styled.Details onMouseDown={(e) => e.stopPropagation()}>
          <styled.MiniTitle>{item.name || item.title}</styled.MiniTitle>
          <br />
          <styled.Rating>
            {isNewRelease(item.release_date || item.first_air_date) && (
              <span className="new-badge">New</span>
            )}
            <span className="popularity">
              {Math.round(item.popularity) / 10}% Popularity
            </span>
            <span className="rating">{item.vote_average}/10 Rated</span>
          </styled.Rating>
          <br />
          <styled.Genre>
            {item.genre_ids.map((genreId, i) => {
              if (i > 2) return null;
              const genres = category === 'TVShows' ? TvGenres : MovieGenres;
              const genreDetails = genres.find(({ id }) => id === genreId);
              return (
                <React.Fragment key={genreId}>
                  {i !== 0 && <span className="genre-dot">&bull;</span>}
                  <span>{`${genreDetails && genreDetails.name}`}</span>
                </React.Fragment>
              );
            })}
          </styled.Genre>
        </styled.Details>
      </styled.Card>
    </styled.CardContainer>
  );
}
