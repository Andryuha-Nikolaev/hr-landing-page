import { React } from 'react';
import { useSwiper } from 'swiper/react';

export function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button className="next" onClick={() => swiper.slideNext()}></button>
  );
}

export function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button className="prev" onClick={() => swiper.slidePrev()}></button>
  );
}

