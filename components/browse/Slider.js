import * as styled from './sliderStyles';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

import {
  getSliderItems as fetchSliderItems,
  isNewRelease,
} from 'helpers/browseHelpers';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';

SwiperCore.use([Navigation]);

export default function Slider({ section }) {
  const [sliderItems, setSliderItems] = useState(null);

  useEffect(() => {
    const getSliderItems = async () => {
      const sliderItems = await fetchSliderItems(section);
      const filteredItems = sliderItems.filter(
        ({ original_language, backdrop_path, poster_path }) =>
          original_language === 'en' && backdrop_path && poster_path
      );
      setSliderItems(filteredItems);
    };
    getSliderItems();
  }, [section.endpoint]);

  return (
    sliderItems && (
      <styled.Slider>
        <styled.Title>{section.title}</styled.Title>
        <Swiper
          slidesPerView={'auto'}
          slidesPerGroup={3}
          spaceBetween={3}
          simulateTouch={false}
          navigation
          className={`${section.size || 'normal'}`}
        >
          {sliderItems.map((item) => (
            <SwiperSlide
              key={item.id}
              className="card-container"
              onMouseEnter={() => {}}
            >
              <styled.Card>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </styled.Slider>
    )
  );
}
