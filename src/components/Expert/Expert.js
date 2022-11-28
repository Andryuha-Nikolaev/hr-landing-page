import React from "react";
import "./Expert.css";

function Expert() {
  return (
    <section className="expert">
      <div className="expert__container">
        <h2 className="expert__header">Как стать экспертом</h2>
        <div className="expert__text">
          <div className="expert__block">
            <div className="expert__circle">1</div>
            <div className="expert__wrap">
              <p className="expert__title">Выберите роль и заполните заявку</p>
              <p className="expert__text">После заполнения заявки вам придет ответ на почту и с вами свяжется рекрутер.</p>
            </div>
          </div>
          <div className="expert__block">
            <div className="expert__circle">2</div>
            <div className="expert__wrap">
              <p className="expert__title">Пройдите отбор и бесплатное обучение</p>
              <p className="expert__text">Вам необходимо будет пройти тестовое задание и бесплатное обучение</p>
            </div>
          </div>
          <div className="expert__block">
            <div className="expert__circle">3</div>
            <div className="expert__wrap">
              <p className="expert__title">Начните делиться знаниями со студентами Яндекс Практикума</p>
              <p className="expert__text">Вам будет назначена группа, с которой вы будете делиться своимопытом и мотивировать</p>
            </div>
          </div>
        </div>
        <button className="expert__btn">Посмотреть вакансии</button>
      </div>
    </section>
  );
}

export default Expert;
