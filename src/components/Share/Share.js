import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import laptop from "../../images/laptop.svg";
import shareImage from "../../images/share-image-abstract.svg";
import shareArray from "../../images/share-array.svg";
import "./Share.css";

function Share({ openQuiz }) {
  const titleText = [
    "программировании",
    "анализе данных",
    "менеджменте",
    "маркетинге",
    "дизайне",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 1500);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section className="share">
      <div className="share__container">
        <div className="share__wrap">
          <h1 className="share__header_type_color" id="changeText">
            Делитесь своим опытом
            <br />
            в&nbsp;
            {titleText[index % titleText.length]}
            <br />
            <span className="share__header">
              станьте наставником или ревьюером
            </span>
          </h1>
          <Link
            to="vacansy"
            className="share__btn"
            smooth={true}
            duration={600}
          >
            Посмотреть вакансии
          </Link>
          <img className="share__image" src={laptop} alt="ноутбук" />
        </div>

        <div className="share__mobile-section">
          <div className="share__contant">
            <p className="share__description">
              Не знаете, какую вакансию выбрать? Мы можем помочь
            </p>
            <img
              className="share__mobile-button"
              src={shareArray}
              alt="стрелка"
              onClick={openQuiz}
            />
          </div>

          <img
            src={shareImage}
            alt="абстракное изображение"
            className="share__image-abstract"
          />
        </div>
      </div>
    </section>
  );
}

export default Share;
