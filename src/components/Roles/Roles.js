import React from "react";
import images from "../../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";
import "swiper/css";
import "./Roles.css";

function Roles() {
  return (
    <section className="roles">
      <h2 className="roles__title">В роли наставника и&nbsp;ревьюера вы будете</h2>
      <Swiper
        direction={"horizontal"}
        slidesPerView={2}
        spaceBetween={25}
        mousewheel={true}
        modules={[Mousewheel]}
        className="roles__slider"
      >
        <ul className="roles__container">
          <SwiperSlide>
            <li className="role">
              <img className="role__img" src={images.cloud} alt="облако" />
              <div className="role__wrap">
                <h3 className="role__title">Учиться новому</h3>
                <p className="role__subtitle">
                  Вы узнаете, как давать обратную связь, выступать на публике и
                  мотивировать людей
                </p>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="role">
              <img className="role__img" src={images.cloud} alt="облако" />
              <div className="role__wrap">
                <h3 className="role__title">Менять жизнь людей </h3>
                <p className="role__subtitle">
                  Тысячи наших студентов нуждаются в ваших знаниях и опыте - не
                  бойтесь ими делиться
                </p>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="role">
              <img className="role__img" src={images.cloud} alt="облако" />
              <div className="role__wrap">
                <h3 className="role__title">Общаться с коллегами</h3>
                <p className="role__subtitle">
                  Станете частью сообщества экспертво и посмотрите на мир онлайн
                  образования изнутри
                </p>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="role">
              <img className="role__img" src={images.cloud} alt="облако" />
              <div className="role__wrap">
                <h3 className="role__title">Дополнительный доход</h3>
                <p className="role__subtitle">
                  От 35 до 55 тысяч рублей. Удаленно, 2-3 часа в день, график
                  выберите сами
                </p>
              </div>
            </li>
          </SwiperSlide>
        </ul>
      </Swiper>
    </section>
  );
}

export default Roles;
