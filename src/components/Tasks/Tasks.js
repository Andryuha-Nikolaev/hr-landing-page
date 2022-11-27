import React from "react";
import "./Tasks.css";

function Tasks() {
  return (
    <section className="tasks">
      <div className="tasks__container">
        <div className="task">
          <h3 className="task__title">Задачи ревьюера</h3>
          <ul className="task__list">
            <li className="task__description">
              Давать корректную обратную связь.
            </li>
            <li className="task__description">
              Оценивать работы зачёт / незачёт.
            </li>
            <li className="task__description">Проверять проекты студентов.</li>
            <li className="task__description">Объяснять им их ошибки.</li>
          </ul>
          <div className="task__image">Картинка</div>
        </div>
        <div className="task">
          <h3 className="task__title">Задачи наставника</h3>
          <ul className="task__list">
            <li className="task__description">
              Помогать студентам ставить цели.
            </li>
            <li className="task__description">Делиться своим опытом.</li>
            <li className="task__description">Давать обратную связь. </li>
            <li className="task__description">Проводить вебинары. </li>
          </ul>
          <div className="task__image">Картинка</div>
        </div>
      </div>
    </section>
  );
}

export default Tasks;
