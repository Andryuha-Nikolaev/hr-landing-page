import React, { useState } from "react";
import "./Faculty.css";
import arrowBlue from "../../images/faculty-arrow.svg";
import arrowBlueUp from "../../images/arrow-blue-up.svg";
import faculty1 from "../../images/faculty1.png";

function Faculty({ facultyList, facultyInfo }) {
  const [open, setOpen] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);

  const sortName = facultyList[activeIndex];

  const onClickCategory = (index) => {
    setActiveIndex(index);
    setOpen(false);
  };

  const facultyInfoActive = facultyInfo[activeIndex];

  return (
    <section className="faculty">
      <div className="faculty__container">
        <h2 className="faculty__title">Наши факультеты</h2>
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
          <div className="faculty__mobile-menu">
            <p className="faculty__popup-change" onClick={() => setOpen(!open)}>
              {sortName}
              <img
                src={!open ? arrowBlue : arrowBlueUp}
                alt="развернуть меню"
                className="faculty__popup-arrow"
              />
            </p>
            {open && (
              <div className="faculty__popup">
                <ul className="faculty__popup-list">
                  {facultyList.map((name, i) => (
                    <li
                      key={i}
                      onClick={() => onClickCategory(i)}
                      className={
                        activeIndex === i
                          ? "faculty__popup-item faculty__popup-item_active"
                          : "faculty__popup-item"
                      }
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

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
                {/* <img src={arrowBlack} alt="ссылка на все курсы" /> */}
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
