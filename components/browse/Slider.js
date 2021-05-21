import * as styled from './sliderStyles';

import {
  getSliderItems as fetchSliderItems,
  getGenres as fetchGenres,
  isNewRelease,
} from 'helpers/browseHelpers';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Slider({
  section,
  category,
  setDonePlay,
  setSelectedItem,
  setDistracted,
}) {
  const [sliderItems, setSliderItems] = useState(null);
  const [genres, setGenres] = useState(null);
  const [showSliderTrailer, setShowSliderTrailer] = useState(false);

  const [timer, setTimer] = useState(null);

  // container click and drag
  const [mouseDown, setMouseDown] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [coordinateX, setCoordinateX] = useState(0);
  // separate click from drag
  const [dragging, setDragging] = useState(false);
  const [clientXonMouseDown, setClientXonMouseDown] = useState(null);

  const containerRef = useRef();
  const playerRef = useRef();

  const handleCardHover = () => {};

  useEffect(() => {
    const getSliderItems = async () => {
      const sliderItems = await fetchSliderItems(section);
      const filteredItems = sliderItems.filter(
        ({ original_language, backdrop_path, poster_path }) =>
          original_language === 'en' && backdrop_path && poster_path
      );
      setSliderItems(filteredItems);
    };
    const getGenres = async () => {
      const genres = await fetchGenres(category);
      setGenres(genres);
    };
    getSliderItems();
    getGenres();
  }, [section.endpoint, category]);

  // click and drag handles
  const handleContainerMouseDown = (e) => {
    e.preventDefault();
    setDragging(false);
    setMouseDown(true);
    setScrollLeft(containerRef.current.scrollLeft);
    setCoordinateX(e.clientX);
  };

  const handleContainerMouseUp = () => {
    setMouseDown(false);
    setDragging(false);
  };

  const handleContainerMouseMove = (e) => {
    setDragging(true);
    mouseDown &&
      (containerRef.current.scrollLeft =
        scrollLeft + (coordinateX - e.clientX));
  };

  return (
    sliderItems && (
      <styled.Slider>
        <styled.Title>{section.title}</styled.Title>
        <styled.Row
          className={`${section.size || 'normal'}`}
          // click and drag functionalities
          ref={containerRef}
          onMouseDown={handleContainerMouseDown}
          onMouseMove={handleContainerMouseMove}
          onMouseLeave={handleContainerMouseUp}
          onMouseUp={handleContainerMouseUp}
          dragging={dragging}
          mouseDown={mouseDown}
        >
          {sliderItems.map((item) => (
            <styled.CardContainer
              key={item.id}
              dragging={dragging}
              mouseDown={mouseDown}
            >
              <styled.Card
                mouseDown={mouseDown}
                onMouseEnter={handleCardHover}
                onMouseLeave={() => {
                  clearTimeout(timer);
                }}
                onMouseDown={(e) => setClientXonMouseDown(e.clientX)}
                // separate click from drag
                onClick={(e) => {
                  if (e.clientX !== clientXonMouseDown) return;
                  setSelectedItem({
                    id: item.id,
                    start: 0,
                    placeholder: item.backdrop_path,
                  });
                  setDistracted(true);
                  setDonePlay(true);
                }}
              >
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
                <styled.Details>
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
                  <>
                    <br />
                    <p>
                      {genres && genres.length > 0
                        ? item.genre_ids.map((genreId, i) => {
                            if (i > 2) return null;
                            const genreDetails = genres.find(
                              (genre) => genre.id === genreId
                            );
                            return (
                              <styled.Genre key={`${item.id}_${genreId}`}>
                                <span>{`${
                                  genreDetails ? genreDetails.name : ''
                                }`}</span>
                                {i < item.genre_ids.length - 1 && i !== 2 && (
                                  <span className="genre-dot">&bull;</span>
                                )}
                              </styled.Genre>
                            );
                          })
                        : null}
                    </p>
                  </>
                </styled.Details>
              </styled.Card>
            </styled.CardContainer>
          ))}
        </styled.Row>
      </styled.Slider>
    )
  );
}
