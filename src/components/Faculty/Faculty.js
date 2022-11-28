import React, { useState } from "react";
import "./Faculty.css";
import arrowBlack from "../../images/arrow-black.svg";

function Faculty({ facultyList, facultyInfo }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  const facultyInfoActive = facultyInfo[activeIndex];

  return (
    <section className="faculty">
      <h2 className="faculty__title">Факультеты</h2>
      <div className="faculty__content">
        <ul className="faculty__list">
          {facultyList.map((value, i) => (
            <li
              key={i}
              onClick={() => onClickCategory(i)}
              className={
                activeIndex === i
                  ? "faculty__list-item faculty__list-item_active"
                  : "faculty__list-item"
              }
            >
              {value}
            </li>
          ))}
        </ul>
        <div className="faculty__info">
          <p className="faculty__text">{facultyInfoActive.description}</p>
          <div className="faculty__courses">
            <a
              href={facultyInfoActive.url1}
              className="faculty__link faculty__link_left"
              target="_blank"
              rel="noreferrer"
            >
              {facultyInfoActive.cours1}
            </a>
            <a
              href={facultyInfoActive.url2}
              className="faculty__link faculty__link_right"
              target="_blank"
              rel="noreferrer"
            >
              {facultyInfoActive.cours2}
            </a>
            <a
              href={facultyInfoActive.url3}
              className={
                facultyInfoActive.cours3 === 0
                  ? "faculty__link faculty__link_inactive"
                  : "faculty__link faculty__link_left"
              }
              target="_blank"
              rel="noreferrer"
            >
              {facultyInfoActive.cours3}
            </a>
            <a
              href={facultyInfoActive.url4}
              className={
                facultyInfoActive.cours4 === 0
                  ? "faculty__link faculty__link_inactive"
                  : "faculty__link faculty__link_right"
              }
              target="_blank"
              rel="noreferrer"
            >
              {facultyInfoActive.cours4}
            </a>
          </div>
        </div>
        <a
          href={facultyInfoActive.urlAll}
          className="faculty__link-all"
          target="_blank"
          rel="noreferrer"
        >
          Все курсы
          <img src={arrowBlack} alt="ссылка на все курсы" />
        </a>
      </div>
    </section>
  );
}

export default Faculty;
