import React from "react";
import './Form.css';

function Form({onClose}) {
  return (
    <form className="form" autoComplete="off" required>
      <legend className="form__title">Заполнить заявку</legend>
      <button className="form__btn_type_close" type="button"  onClick={onClose}></button>
      <input className="form__input form__input_name" placeholder="Иванов Владислав Иванович" type="text" name="name" />

      <div className="form__wrap">
        <input className="form__input form__input_email" placeholder="ivanoff@ya.ru" type="email" name="email" />
        <input className="form__input form__input_tel" placeholder="8-(910)-757-16-16" type="tel" name="tel" />
      </div>
     <div className="form__wrap input__telegram">
        <input className="form__input form__input_telegram" placeholder="https://t.me/user_name" type="url" name="telegramm" />
        <label className="form__text form__telegram" htmlFor="telegramm"></label>
     </div>

      <select className="form__input form__input_role form__select">
          <option className="form__input_size_s" value="Какая роль вам ближе?">Какая роль вам ближе?</option>
          <option className="" value="Наставник">Наставник</option>
          <option className="" value="Ревьюер">Ревьюер</option>
        </select>

        <select className="form__input form__input_faculty form__select">
          <option className="form__input form__input_size_m" value="Выберите направление (факультет)">Выберите направление (факультет)</option>
          <option className="" value="Программирование">Программирование</option>
          <option className="" value="Дизайн">Дизайн</option>
          <option className="" value="Маркетинг">Маркетинг</option>
          <option className="" value="Анализ данных">Анализ данных</option>
          <option className="" value="Менеджмент">Менеджмент</option>
        </select>

        <textarea className="form__input_text-area form__input_size_l" placeholder="Перечислите набор технологий, которыми вы владеете и уровень владения каждой"></textarea>
        <div className="form__wrap form__resume">
          <input className="form__input form__input_resume" placeholder="Ссылка на резюме" type="url" name="resume" />
          <label className="form__text" htmlFor="resume"></label>
        </div>

        <label className="form__checkbox-wrap form__text" htmlFor="agree">Я даю согласие АНО ДПО «ШАД» и ООО «ЯНДЕКС» на <a className="form__link" href="https://yandex.ru/legal/confidential/" target="balnk">обработку указанных данных</a> для целей рассмотрения анкеты и обратной связи по ней.
          <input className="form__checkbox" type="checkbox" name="agree"/>
          <span className="form__checkbox-style"></span>
        </label>
        <button className="form__btn_type_submit" type="submit">Посмотреть вакансии</button>
    </form>
  );
}

export default Form;
