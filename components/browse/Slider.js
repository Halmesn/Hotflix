import * as styled from './sliderStyles';

import {
  getSliderItems as fetchSliderItems,
  getGenres as fetchGenres,
  isNewRelease,
} from 'helpers/browseHelpers';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Slider({ section, category }) {
  const [sliderItems, setSliderItems] = useState(null);
  const [genres, setGenres] = useState(null);

  const containerRef = useRef();

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

  return (
    sliderItems && (
      <styled.Slider>
        <styled.Title>{section.title}</styled.Title>
        <styled.Row className={`${section.size || 'normal'}`}>
          {sliderItems.map((item) => (
            <styled.CardContainer key={item.id} ref={containerRef}>
              <styled.Card
                onMouseEnter={(e) => {
                  if (e.target.getBoundingClientRect().x + 395 > 1952) {
                    console.log('object');
                    containerRef.current.scrollLeft += 395;
                  }
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
                </styled.Details>
              </styled.Card>
            </styled.CardContainer>
          ))}
        </styled.Row>
      </styled.Slider>
    )
  );
}
