import React from "react";
import "./Tasks.css";
import tasksImageGirl from "../../images/tasks-image1.png";
import tasksImageBoy from "../../images/tasks-image2.png";
import tasksImage from "../../images/tasks-image3.svg";
import mark from "../../images/mark.svg";

function Tasks() {
  return (
    <section className="tasks" id="about-us">
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

// function Tasks() {
//   return (
//     <section className="tasks" id="about-us">
//       <div className="tasks__container">
//         <div className="task">
//           <h3 className="task__title">Задачи ревьюера</h3>
//           <ul className="task__list">
//             <li className="task__description">
//               Давать корректную обратную связь.
//             </li>
//             <li className="task__description">
//               Оценивать работы зачёт / незачёт.
//             </li>
//             <li className="task__description">Проверять проекты студентов.</li>
//             <li className="task__description">Объяснять им их ошибки.</li>
//           </ul>
//           <div className="task__image">Картинка</div>
//         </div>
//         <div className="task">
//           <h3 className="task__title">Задачи наставника</h3>
//           <ul className="task__list">
//             <li className="task__description">
//               Помогать студентам ставить цели.
//             </li>
//             <li className="task__description">Делиться своим опытом.</li>
//             <li className="task__description">Давать обратную связь. </li>
//             <li className="task__description">Проводить вебинары. </li>
//           </ul>
//           <div className="task__image">Картинка</div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default Tasks;
