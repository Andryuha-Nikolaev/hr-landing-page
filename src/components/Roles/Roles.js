import React from "react";
import "./Roles.css";

function Roles() {
  return (
    <section className="roles">
      <h2 className="roles__title">В роли наставника и ревьюера вы будете</h2>

      <ul className="roles__container">
        <li className="role">
          <h3 className="role__title">Менять жизнь людей к лучшему</h3>
          <p className="role__subtitle">
            Тысячи наших студентов нуждаются в ваших знаниях и опыте - не
            бойтесь ими делиться
          </p>
        </li>
        <div className="role">
          <h3 className="role__title">Учиться новому</h3>
          <p className="role__subtitle">
            Вы узнаете, как давать обратную связь, выступать на публике и
            мотивировать людей
          </p>
        </div>
        <div className="role">
          <h3 className="role__title">Доход от 35 до 55 тысяч ₽ в месяц</h3>
          <p className="role__subtitle">
            Удаленно, 2-3 часа в день, график выберите сами
          </p>
        </div>
        <div className="role">
          <h3 className="role__title">Общаться с коллегами из EdTech</h3>
          <p className="role__subtitle">
            Станете частью сообщества экспертво и посмотрите на мир онлайн
            образования изнутри
          </p>
        </div>
      </ul>
    </section>
  );
}

export default Roles;
