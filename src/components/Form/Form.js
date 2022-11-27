import React from "react";
import './Form.css';

function Form({onClose}) {
  return (
    <form className="form" required>
      <button className="form__btn_type_close" type="button"  onClick={onClose}></button>
      <input className="form__input form__input_size_l" placeholder="Иванов Владислав Иванович" type="text" name="name" />
      <input className="form__input form__input_size_xs" placeholder="ivanoff@ya.ru" type="email" name="email" />
      <input className="form__input form__input_size_xs" placeholder="83482432424" type="tel" name="tel" />
      <input className="form__input form__input_size_s" placeholder="телеграмм" type="url" name="telegramm" />
      <label className="" htmlFor="telegramm">*необязательно для заполнения</label>
      <select className="form__input form__input_size_s">
          <option className="form__input_size_s" value="Какая роль вам ближе?">Какая роль вам ближе?</option>
          <option className="" value="Наставник">Наставник</option>
          <option className="" value="Ревьюер">Ревьюер</option>
        </select>
        <select className="form__input form__input_size_s">
          <option className="form__input form__input_size_s" value="Выберите направление (факультет)">Выберите направление (факультет)</option>
          <option className="" value="Программирование">Программирование</option>
          <option className="" value="Дизайн">Дизайн</option>
          <option className="" value="Маркетинг">Маркетинг</option>
          <option className="" value="Анализ данных">Анализ данных</option>
          <option className="" value="Менеджмент">Менеджмент</option>
        </select>
        <textarea className="form__input_type_large" placeholder="Перечислите набор технологий, которыми вы владеете и уровень владения каждой"></textarea>
        <input className="form__input form__input_size_xs" placeholder="Ссылка на резюме" type="url" name="resume" />
        <label className="" htmlFor="resume">Пожалуйста, проверьте, что вы открыли доступ к документу</label>
        <input className="form__input" type="checkbox" name="agree"></input>
        <label className="" htmlFor="agree">Я даю согласие АНО ДПО «ШАД» и ООО «ЯНДЕКС» на обработку указанных данных для целей рассмотрения анкеты и обратной связи по ней.</label>
        <button className="form__btn_type_submit" type="submit">Отправить</button>
    </form>
  );
}

export default Form;
