import React, { useState } from "react";
import "./Questions.css";
import imagePlus from "../../images/plus.svg";
import imageCross from "../../images/cross.svg";
import images from "../../utils/constants";

function Questions() {
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);

  return (
    <section className="questions" id="questions">
      <div className="questions__container">
        <h2 className="questions__title">Часто задаваемые вопросы</h2>
        <ul className="questions__list">
          <li className="questions__list-item">
            <p className="questions__question">
              Обязателен ли опыт преподавания?
              {question1 ? (
                <img
                  src={imageCross}
                  alt="плюс"
                  className="questions__image"
                  onClick={() => setQuestion1(false)}
                />
              ) : (
                <img
                  src={imagePlus}
                  alt="плюс"
                  className="questions__image"
                  onClick={() => setQuestion1(true)}
                />
              )}
            </p>
            <p
              className={
                question1
                  ? "questions__answer questions__answer_active"
                  : "questions__answer"
              }
            >
              Конечно. Мы заключим с вами договор ГПХ или оплатим оказанные
              услуги через Solar Staff.
            </p>
          </li>
          <li className="questions__list-item">
            <p className="questions__question">
              Какой формат и график работы?
              {question2 ? (
                <img
                  src={imageCross}
                  alt="плюс"
                  className="questions__image"
                  onClick={() => setQuestion2(false)}
                />
              ) : (
                <img
                  src={imagePlus}
                  alt="плюс"
                  className="questions__image"
                  onClick={() => setQuestion2(true)}
                />
              )}
            </p>
            <p
              className={
                question2
                  ? "questions__answer questions__answer_active"
                  : "questions__answer"
              }
            >
              Полностью удалённая работа с гибким графиком. Вам потребуется
              около четырёх часов в неделю, при этом вы сами формируете
              комфортное расписание.
            </p>
          </li>
          <li className="questions__list-item">
            <p className="questions__question">
              У меня будет вводный курс?
              {question3 ? (
                <img
                  src={imageCross}
                  alt="плюс"
                  className="questions__image"
                  onClick={() => setQuestion3(false)}
                />
              ) : (
                <img
                  src={imagePlus}
                  alt="плюс"
                  className="questions__image"
                  onClick={() => setQuestion3(true)}
                />
              )}
            </p>
            <p
              className={
                question3
                  ? "questions__answer questions__answer_active"
                  : "questions__answer"
              }
            >
              Да. У нас есть курсы подготовки специалистов, где вы с нуля
              освоите все тонкости преподавания.
            </p>
          </li>
          <li className="questions__list-item">
            <p className="questions__question">
              Вы сотрудничаете с иностранными гражданами?
              {question4 ? (
                <img
                  src={imageCross}
                  alt="плюс"
                  className="questions__image"
                  onClick={() => setQuestion4(false)}
                />
              ) : (
                <img
                  src={imagePlus}
                  alt="плюс"
                  className="questions__image"
                  onClick={() => setQuestion4(true)}
                />
              )}
            </p>
            <p
              className={
                question4
                  ? "questions__answer questions__answer_active"
                  : "questions__answer"
              }
            >
              Мы сотрудничаем с экспертом по договору ГПХ. Для этого вам нужно
              выбрать форму сотрудничества: самозанятость, ИП или ООО.
            </p>
          </li>
        </ul>
      </div>
      <img src={images.star} alt="падающая звезда" className="questions__star"/>
    </section>
  );
}

export default Questions;
