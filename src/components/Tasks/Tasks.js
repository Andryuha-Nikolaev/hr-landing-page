import React from "react";
import "./Tasks.css";
import tasksImageGirl from "../../images/tasks-image1.png";
import tasksImageBoy from "../../images/tasks-image2.png";
import tasksImage from "../../images/tasks-image3.svg";
import mark from "../../images/mark.svg";

function Tasks() {
  return (
    <section className="tasks" id="tasks">
      <div className="tasks__container">
        <img
          src={tasksImageGirl}
          alt="изображение девушки"
          className="tasks__image"
        />
        <div className="tasks__content">
          <div className="tasks__info">
            <img
              src={tasksImage}
              alt="абстракное изображение"
              className="tasks__image-abstract"
            />
            <h2 className="tasks__info-title">Задачи ревьюера</h2>
            <div className="tasks__info-container">
              <p className="tasks__info-text">
                <img src={mark} alt="галочка" />
                Давать корректную обратную связь
              </p>
              <p className="tasks__info-text">
                <img src={mark} alt="галочка" />
                Оценивать работы зачёт / незачёт
              </p>
              <p className="tasks__info-text">
                <img src={mark} alt="галочка" />
                Проверять проекты студентов
              </p>
              <p className="tasks__info-text">
                <img src={mark} alt="галочка" />
                Объяснять им их ошибки
              </p>
            </div>
          </div>
          <div className="tasks__info tasks__info_right">
            <h2 className="tasks__info-title">Задачи наставника</h2>
            <div className="tasks__info-container">
              <p className="tasks__info-text">
                <img src={mark} alt="галочка" />
                Помогать студентам ставить цели
              </p>
              <p className="tasks__info-text">
                <img src={mark} alt="галочка" />
                Делиться своим опытом
              </p>
              <p className="tasks__info-text">
                <img src={mark} alt="галочка" />
                Давать обратную связь и поддержку
              </p>
              <p className="tasks__info-text">
                <img src={mark} alt="галочка" />
                Проводить вебинары
              </p>
            </div>
          </div>
        </div>
        <img
          src={tasksImageBoy}
          alt="изображение парня"
          className="tasks__image_bottom"
        />
      </div>
    </section>
  );
}

export default Tasks;
