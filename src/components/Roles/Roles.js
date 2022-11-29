import React from "react";
import images from "../utils/constants";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from "swiper";
import 'swiper/css';
import "./Roles.css";

function Roles() {
  return (
    <section className="roles">
      <h2 className="roles__title">В роли наставника и ревьюера вы будете</h2>
      <Swiper
        direction={"horizontal"}
        slidesPerView={2}
        spaceBetween={25}
        mousewheel={true}
        modules={[Mousewheel]}
        className="slider"
      >
      <ul className="roles__container">
      <SwiperSlide>
        <li className="role">
          <div className="role__wrap">
            <img className="role__img-cats" src={images.cats} alt="кошки" />
            <p className="role__subtitle">
              Тысячи наших студентов нуждаются в ваших знаниях и опыте - не
              бойтесь ими делиться
            </p>
          </div>
          <h3 className="role__title">Менять жизнь людей к лучшему</h3>
        </li>
        </SwiperSlide>
        <SwiperSlide>
        <li className="role">
          <div className="role__wrap">
            <img
              className="role__img-bricks"
              src={images.bricks}
              alt="разбить кирпичи"
            />
            <p className="role__subtitle">
              Вы узнаете, как давать обратную связь, выступать на публике и
              мотивировать людей
            </p>
          </div>
          <h3 className="role__title">Учиться новому</h3>
        </li>
        </SwiperSlide>
        <SwiperSlide>
        <li className="role">
          <div className="role__wrap">
            <img
              className="role__img-balloons"
              src={images.balloons}
              alt="человек с воздушными шарами"
            />
            <p className="role__subtitle">
              Удаленно, 2-3 часа в день, график выберите сами
            </p>
          </div>
          <h3 className="role__title">Доход от 35 до 55 тысяч ₽ в месяц</h3>
        </li>
        </SwiperSlide>
        <SwiperSlide>
        <li className="role">
          <div className="role__wrap">
            <img
              className="role__img-mountains"
              src={images.mountains}
              alt="горы"
            />
            <p className="role__subtitle">
              Станете частью сообщества экспертво и посмотрите на мир онлайн
              образования изнутри
            </p>
          </div>
          <h3 className="role__title">Общаться с коллегами из EdTech</h3>
        </li>
        </SwiperSlide>
      </ul>
      </Swiper>
    </section>
  );
}

export default Roles;
