import React, { useState } from "react";
import "./Faculty.css";
import arrowBlack from "../../images/arrow-black.svg";
import faculty1 from "../../images/faculty1.png";

function Faculty({ facultyList, facultyInfo }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  const facultyInfoActive = facultyInfo[activeIndex];

  return (
    <section className="faculty">
      <div className="faculty__container">
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
          <div className="faculty__info-container">
            <div className="faculty__info">
              <p className="faculty__text">{facultyInfoActive.description}</p>
              <a
                href={facultyInfoActive.urlAll}
                className="faculty__link-all"
                target="_blank"
                rel="noreferrer"
              >
                Ознакомиться с курсами
                <img src={arrowBlack} alt="ссылка на все курсы" />
              </a>
            </div>
            <img
              src={faculty1}
              alt="иллюстрация факультета"
              className="faculty__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faculty;
