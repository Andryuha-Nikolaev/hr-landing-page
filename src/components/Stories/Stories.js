import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from "swiper";
import "./Stories.css";
import 'swiper/css';

function Stories() {

  return (
    <section className="stories">
      <h2 className="stories__header">Истории ребят из нашей команды</h2>
      <Swiper
        direction={"vertical"}
        slidesPerView={2}
        spaceBetween={110}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel]}
        className="slider"
      >
        <SwiperSlide className="slide">
          {({ isActive }) => (
            <div className={isActive ? "slide-container slide-container_next" : "slide-container"}>
              <div className={isActive ? "img img_active" : "img"}></div>
              <div className={isActive ? "slide__wrap slide__wrap_active" : 'slide__wrap'}>
                <h4 className="slide__name">Имя Фамилия</h4>
                <p className="slide__role">Специализация</p>
                <p className="slide__text">Из-за того, что я сам пришёл в аналитику из другой специальности, прекрасно понимаю как важно новичку иметь
                в процессе обучения человека, с которым всегда можно проконсультироваться, задать вопрос, получить экспертное мнение.</p>
              </div>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide className="slide">
        {({ isActive }) => (
            <div className={isActive ? "slide-container slide-container_next" : "slide-container"}>
              <div className={isActive ? "img img_active" : "img"}></div>
              <div className={isActive ? "slide__wrap slide__wrap_active" : 'slide__wrap'}>
                <h4 className="slide__name">Имя Фамилия</h4>
                <p className="slide__role">Специализация</p>
                <p className="slide__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide className="slide">
        {({ isActive }) => (
            <div className={isActive ? "slide-container slide-container_next" : "slide-container"}>
              <div className={isActive ? "img img_active" : "img"}></div>
              <div className={isActive ? "slide__wrap slide__wrap_active" : 'slide__wrap'}>
                <h4 className="slide__name">Имя Фамилия</h4>
                <p className="slide__role">Специализация</p>
                <p className="slide__text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide className="slide">
          {({ isActive }) => (
            <div className={isActive ? "slide-container slide-container_next" : "slide-container"}>
              <div className={isActive ? "img img_active" : "img"}></div>
              <div className={isActive ? "slide__wrap slide__wrap_active" : 'slide__wrap'}>
                <h4 className="slide__name">Имя Фамилия</h4>
                <p className="slide__role">Специализация</p>
                <p className="slide__text">Из-за того, что я сам пришёл в аналитику из другой специальности, прекрасно понимаю как важно новичку иметь
                в процессе обучения человека, с которым всегда можно проконсультироваться, задать вопрос, получить экспертное мнение.</p>
              </div>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide className="slide">
        {({ isActive }) => (
            <div className={isActive ? "slide-container slide-container_next" : "slide-container"}>
              <div className={isActive ? "img img_active" : "img"}></div>
              <div className={isActive ? "slide__wrap slide__wrap_active" : 'slide__wrap'}>
                <h4 className="slide__name">Имя Фамилия</h4>
                <p className="slide__role">Специализация</p>
                <p className="slide__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide className="slide">
        {({ isActive }) => (
            <div className={isActive ? "slide-container slide-container_next" : "slide-container"}>
              <div className={isActive ? "img img_active" : "img"}></div>
              <div className={isActive ? "slide__wrap slide__wrap_active" : 'slide__wrap'}>
                <h4 className="slide__name">Имя Фамилия</h4>
                <p className="slide__role">Специализация</p>
                <p className="slide__text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          )}
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Stories;
