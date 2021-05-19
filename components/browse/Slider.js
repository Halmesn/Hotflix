import * as styled from './sliderStyles';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

import { getSliderItems as fetchSliderItems } from 'helpers/browseHelpers';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';

SwiperCore.use([Navigation]);

export default function Slider({ section }) {
  const [sliderItems, setSliderItems] = useState(null);

  useEffect(() => {
    const getSliderItems = async () => {
      const sliderItems = await fetchSliderItems(section);
      setSliderItems(sliderItems);
    };
    getSliderItems();
  }, [section.endpoint]);

  return (
    sliderItems && (
      <styled.Slider>
        <styled.Title>{section.title}</styled.Title>
        <Swiper
          slidesPerView={6}
          spaceBetween={4}
          navigation
          loop={true}
          slidesPerGroup={6}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </styled.Slider>
    )
  );
}
