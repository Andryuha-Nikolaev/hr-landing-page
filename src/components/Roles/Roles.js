import React from "react";
import images from "../../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";
import "swiper/css";
import "./Roles.css";

function Roles() {
  return (
    <section className="roles">
      <div className="roles__contant">
        <h2 className="roles__title">
          В роли наставника и&nbsp;ревьюера&nbsp;вы&nbsp;будете
        </h2>

        <Swiper
          direction={"horizontal"}
          slidesPerView={2}
          // slidesPerView={"auto"}
          spaceBetween={30}
          centeredSlides={false}
          mousewheel={true}
          modules={[Mousewheel]}
          className="roles__slider"
        >
          {/* <ul> */}
          <SwiperSlide className="roles__slide">
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
                  Станете частью сообщества экспертов и посмотрите на мир онлайн
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
          {/* </ul> */}
        </Swiper>

        <ul className="roles__container">
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
          <li className="role">
            <img className="role__img" src={images.cloud} alt="облако" />
            <div className="role__wrap">
              <h3 className="role__title">Общаться с коллегами</h3>
              <p className="role__subtitle">
                Станете частью сообщества экспертов и посмотрите на мир онлайн
                образования изнутри
              </p>
            </div>
          </li>
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
        </ul>
      </div>
    </section>
  );
}

export default Roles;
