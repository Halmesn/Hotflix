import * as styled from './sliderStyles';
import { MuteIcon, NotMuteIcon } from './billboardStyles';

import { SliderContext } from 'components/browse/Content';

import {
  getSliderItems as fetchSliderItems,
  getGenres as fetchGenres,
  getTrailer as fetchTrailer,
  isNewRelease,
  playerConfig,
} from 'helpers/browseHelpers';

import React, { useState, useEffect, useRef, useContext } from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player/youtube';
import { isMobile } from 'react-device-detect';

export default function Slider({ section, category }) {
  const {
    mute,
    setMute,
    setDonePlay,
    setDistracted,
    setShowTrailer,
    setSelectedItem,
  } = useContext(SliderContext);

  const [sliderItems, setSliderItems] = useState(null);
  const [genres, setGenres] = useState(null);
  const [sliderTrailer, setSliderTrailer] = useState(null);

  // for delay video play
  const [timer, setTimer] = useState(null);

  // slider click and drag
  const [mouseDown, setMouseDown] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [coordinateX, setCoordinateX] = useState(0);
  // separate click from drag
  const [dragging, setDragging] = useState(false);
  const [clientXonMouseDown, setClientXonMouseDown] = useState(null);

  const sliderRef = useRef();
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

  // data fetching
  useEffect(() => {
    const getSliderItems = async () => {
      const sliderItems = await fetchSliderItems(section);
      const genres = await fetchGenres(category);

      const filteredItems = sliderItems.filter(
        ({ original_language, backdrop_path, poster_path }) =>
          original_language === 'en' && backdrop_path && poster_path
      );

      setSliderItems(filteredItems);
      setGenres(genres);
    };
    getSliderItems();
  }, [section.endpoint, category]);

  // click and drag handlers
  const onSliderMouseDown = (e) => {
    e.preventDefault();
    setDragging(false);
    setMouseDown(true);
    setScrollLeft(sliderRef.current.scrollLeft);
    setCoordinateX(e.clientX);
  };

  const onSliderMouseUp = () => {
    setMouseDown(false);
    setDragging(false);
  };

  const onSliderMouseMove = (e) => {
    if (mouseDown) {
      setDragging(true);
      sliderRef.current.scrollLeft = scrollLeft + (coordinateX - e.clientX);
    }
  };

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
    sliderItems && (
      <styled.Slider>
        <styled.Title>{section.title}</styled.Title>
        <styled.Row
          className={`${section.size || 'normal'}`}
          // click and drag functionalities
          ref={sliderRef}
          onMouseDown={onSliderMouseDown}
          onMouseMove={onSliderMouseMove}
          onMouseLeave={onSliderMouseUp}
          onMouseUp={onSliderMouseUp}
          // for styled-components
          dragging={dragging}
          isMobile={isMobile}
        >
          {sliderItems.map((item) => (
            <styled.CardContainer
              key={item.id}
              dragging={dragging}
              isMobile={isMobile}
            >
              <styled.Card
                onMouseEnter={() => onPosterHover(item.id)}
                onMouseLeave={() => {
                  clearTimeout(timer);
                  setSliderTrailer(null);
                }}
                // separate click from drag
                // credit:https://github.com/akiran/react-slick/issues/848#issuecomment-438903613
                onMouseDown={(e) => setClientXonMouseDown(e.clientX)}
                onClick={(e) => onPosterClick(e, item)}
              >
                {!showPoster(item) && sliderTrailer && (
                  <styled.Video
                    className={sliderTrailer.isLoaded ? 'visible' : ''}
                  >
                    <ReactPlayer
                      ref={playerRef}
                      url={`https://www.youtube.com/watch?v=${sliderTrailer.url}`}
                      width="100%"
                      height="100%"
                      playing
                      muted={mute}
                      onReady={onTrailerReady}
                      onEnded={() => setSliderTrailer(null)}
                      config={playerConfig}
                      className="slider-trailer"
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
                        section.size === 'large'
                          ? `https://image.tmdb.org/t/p/w342/${item.poster_path}`
                          : `https://image.tmdb.org/t/p/w300/${item.backdrop_path}`
                      }`}
                      alt={item.name || item.title}
                      width={300}
                      height={section.size === 'large' ? 448 : 165}
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
                    {genres &&
                      genres.length > 0 &&
                      item.genre_ids.map((genreId, i) => {
                        if (i > 2) return null;
                        const genreDetails = genres.find(
                          ({ id }) => id === genreId
                        );
                        return (
                          <React.Fragment key={genreId}>
                            {i !== 0 && (
                              <span className="genre-dot">&bull;</span>
                            )}
                            <span>{`${
                              genreDetails && genreDetails.name
                            }`}</span>
                          </React.Fragment>
                        );
                      })}
                  </styled.Genre>
                </styled.Details>
              </styled.Card>
            </styled.CardContainer>
          ))}
        </styled.Row>
      </styled.Slider>
    )
  );
}
