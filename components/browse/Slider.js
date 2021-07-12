import * as styled from './sliderStyles';

import Card from './Card';

import { getSliderItems as fetchSliderItems } from 'helpers/browseHelpers';
import useSafeMounted from 'hooks/useSafeMounted';

import React, { useState, useEffect, useRef } from 'react';
import { isMobile } from 'react-device-detect';

export default function Slider({ section, category }) {
  const [sliderItems, setSliderItems] = useState(null);

  // slider click and drag
  const [mouseDown, setMouseDown] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [coordinateX, setCoordinateX] = useState(0);
  const [dragging, setDragging] = useState(false);

  const sliderRef = useRef();
  const mountRef = useSafeMounted();

  // data fetching
  useEffect(() => {
    const getSliderItems = async () => {
      const sliderItems = await fetchSliderItems(section);

      const filteredItems = sliderItems.filter(
        ({ original_language, backdrop_path, poster_path }) =>
          original_language === 'en' && backdrop_path && poster_path
      );

      mountRef.current && setSliderItems(filteredItems);
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
            <Card
              key={item.id}
              dragging={dragging}
              isMobile={isMobile}
              item={item}
              section={section}
              mouseDown={mouseDown}
            />
          ))}
        </styled.Row>
      </styled.Slider>
    )
  );
}
