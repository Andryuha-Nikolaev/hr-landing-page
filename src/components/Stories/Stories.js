import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";
import {SlideNextButton, SlidePrevButton} from "../../utils/sliderButtons/sliderButtons";
import "./Stories.css";
import "swiper/css";
// import "swiper/css/navigation";
import images from "../../utils/constants";

function Stories() {

  return (
    <section className="stories">
      <div className="stories-wrap">

        <h2 className="stories__header">Истории ребят из нашей команды</h2>
        <Swiper
          direction={"horizontal"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel]}
          className="slider"
        >

          <SwiperSlide className="slide">
            <SlidePrevButton className="prev" />
          <SlideNextButton />
              <div className="slide-container">
                <p className="slide__text">
                  Из-за того, что я сам пришёл в аналитику из другой
                  специальности, прекрасно понимаю как важно новичку иметь в
                  процессе обучения человека, с которым всегда можно
                  проконсультироваться, задать вопрос, получить экспертное
                  мнение.
                </p>

                <div className="slide__wrap">
                  <div className="slide__info">
                    <h4 className="slide__name">Артём Осадчий</h4>
                    <p className="slide__role">
                      Наставник на факультете анализа данных
                    </p>
                  </div>
                  <img className="img" src={images.artem} alt="Артём Осадчий" />
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
              <div className="slide-container">
                <p className="slide__text">
                  С Практикумом меня объединяют любовь к технологиям, вера в
                  онлайн образование и желание помогать людям покорять новые
                  горизонты. Сам почти полностью осваивал профессию онлайн.
                  Хотелось бы и другим людям помочь в получении новых навыков.
                </p>

                <div className="slide__wrap">
                  <div className="slide__info">
                    <h4 className="slide__name">Толя Крестенко</h4>
                    <p className="slide__role">
                      Наставник на факультете Data Science
                    </p>
                  </div>
                  <img
                    className="img"
                    src={images.tolya}
                    alt="Толя Крестенко"
                  />
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
              <div className="slide-container">
                <p className="slide__text">
                  Сейчас работаю в Фейсбуке, появилось время для дополнительных
                  активностей. Мне нравится помогать другим людям в обучении и
                  развитии. До этого всегда был наставником 1х1, с группой еще
                  не работал. Так что это следующий этап.
                </p>

                <div className="slide__wrap">
                  <div className="slide__info">
                    <h4 className="slide__name">Кирилл Игнатьев</h4>
                    <p className="slide__role">
                      Наставник на бэкенд факультете (Python)
                    </p>
                  </div>
                  <img
                    className="img"
                    src={images.kirill}
                    alt="Кирилл Игнатьев"
                  />
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
              <div className="slide-container">
                <p className="slide__text">
                  Для меня важно, чтобы работа имела смысл и приносила
                  удовольствие. Сейчас вижу свою реализацию не в создании, а в
                  передаче опыта. Я много училась, и знаю, как это сделать
                  лучшим образом. Работа в Яндекс.Практикум - показатель этого.
                </p>

                <div className="slide__wrap">
                  <div className="slide__info">
                    <h4 className="slide__name">Анастасия Лемова</h4>
                    <p className="slide__role">
                      Наставница на дизайн факультете
                    </p>
                  </div>
                  <img
                    className="img"
                    src={images.anastasia}
                    alt="Анастасия Лемова"
                  />
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
              <div className="slide-container">
                <p className="slide__text">
                  Я - свитчер, путь в тестирование был очень долгим. По
                  образованию я редактор. Но главное, что я наконец-то нашла
                  себя. Мне безумно нравится делиться знаниями, а еще больше
                  радуюсь, когда мои наставляемые находят работу и успешно
                  проходят испыталку!
                </p>

                <div className="slide__wrap">
                  <div className="slide__info">
                    <h4 className="slide__name">Зоя Король</h4>
                    <p className="slide__role">Наставница на факультете QA</p>
                  </div>
                  <img
                    className="img"
                    src={images.zoya}
                    alt="Зоя Король"
                  />
                </div>
              </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Stories;
