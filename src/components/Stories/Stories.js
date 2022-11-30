import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import {
  SlideNextButton,
  SlidePrevButton,
} from "../../utils/sliderButtons";
import "./Stories.css";
import "swiper/css";
import "swiper/css/pagination";
import images from "../../utils/constants";

function Stories() {

  // еще есть вот такая функция отрисовки, но я не могу ее задействовать

  // const pagination = {
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return '<span class="' + className + '">' + (index + 1) + "</span>";
  //   },
  // };

  return (
    <section className="stories">
      <h2 className="stories__header">Истории ребят из нашей команды</h2>
      <div className="stories-wrap">
        <Swiper
          direction={"horizontal"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            type: 'custom',
            bulletClass:  ".slider__pag",
            bulletActiveClass: ".slider__pag_active"
         }}
          modules={[Mousewheel, Pagination]}
          className="slider"
        >
          <SlidePrevButton />
          <SlideNextButton />
          <SwiperSlide className="slide">
            <p className="slide__text">
              Из-за того, что я сам пришёл в аналитику из другой специальности,
              прекрасно понимаю как важно новичку иметь в процессе обучения
              человека, с которым всегда можно проконсультироваться, задать
              вопрос, получить экспертное мнение.
            </p>

            <div className="slide__wrap">
              <div className="slide__info">
                <h4 className="slide__name">Артём Осадчий</h4>
                <p className="slide__role">
                  Наставник на факультете анализа данных
                </p>
              </div>
              <img className="slide__img" src={images.artem} alt="Артём Осадчий" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <p className="slide__text">
              С Практикумом меня объединяют любовь к технологиям, вера в онлайн
              образование и желание помогать людям покорять новые горизонты. Сам
              почти полностью осваивал профессию онлайн. Хотелось бы и другим
              людям помочь в получении новых навыков.
            </p>

            <div className="slide__wrap">
              <div className="slide__info">
                <h4 className="slide__name">Толя Крестенко</h4>
                <p className="slide__role">
                  Наставник на факультете Data Science
                </p>
              </div>
              <img className="slide__img" src={images.tolya} alt="Толя Крестенко" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <p className="slide__text">
              Сейчас работаю в Фейсбуке, появилось время для дополнительных
              активностей. Мне нравится помогать другим людям в обучении и
              развитии. До этого всегда был наставником 1х1, с группой еще не
              работал. Так что это следующий этап.
            </p>

            <div className="slide__wrap">
              <div className="slide__info">
                <h4 className="slide__name">Кирилл Игнатьев</h4>
                <p className="slide__role">
                  Наставник на бэкенд факультете (Python)
                </p>
              </div>
              <img className="slide__img" src={images.kirill} alt="Кирилл Игнатьев" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <p className="slide__text">
              Для меня важно, чтобы работа имела смысл и приносила удовольствие.
              Сейчас вижу свою реализацию не в создании, а в передаче опыта. Я
              много училась, и знаю, как это сделать лучшим образом. Работа в
              Яндекс.Практикум - показатель этого.
            </p>

            <div className="slide__wrap">
              <div className="slide__info">
                <h4 className="slide__name">Анастасия Лемова</h4>
                <p className="slide__role">Наставница на дизайн факультете</p>
              </div>
              <img
                className="slide__img"
                src={images.anastasia}
                alt="Анастасия Лемова"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <p className="slide__text">
              Я - свитчер, путь в тестирование был очень долгим. По образованию
              я редактор. Но главное, что я наконец-то нашла себя. Мне безумно
              нравится делиться знаниями, а еще больше радуюсь, когда мои
              наставляемые находят работу и успешно проходят испыталку!
            </p>

            <div className="slide__wrap">
              <div className="slide__info">
                <h4 className="slide__name">Зоя Король</h4>
                <p className="slide__role">Наставница на факультете QA</p>
              </div>
              <img className="slide__img" src={images.zoya} alt="Зоя Король" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Stories;
