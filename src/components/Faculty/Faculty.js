import React, { useState } from "react";
import "./Faculty.css";

function Faculty() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  console.log(activeIndex);

  const facultyList = [
    "Программирование",
    "Аналитика",
    "Дизайн",
    "Маркетинг",
    "Менеджмент",
  ];

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
      </div>
    </section>
  );
}

export default Faculty;
