import React from "react";
import "./Footer.css";
import logoVk from "../../images/vk.svg";
import logoTg from "../../images/tg.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__contacts">
            <div>
              <h2 className="footer__tel">8-800-700-93-29</h2>
              <span className="footer__span">Звонок по России бесплатный</span>
            </div>
            <div className="footer__link-container">
              <a
                href="https://practicum.yandex.ru"
                className="footer__link"
                target="_blank"
                rel="noreferrer"
              >
                Помощь
              </a>
              <a
                href="https://practicum.yandex.ru"
                className="footer__link"
                target="_blank"
                rel="noreferrer"
              >
                Правовая информация
              </a>
              <a
                href="https://practicum.yandex.ru"
                className="footer__link"
                target="_blank"
                rel="noreferrer"
              >
                Вакансии
              </a>
              <a
                href="https://practicum.yandex.ru"
                className="footer__link"
                target="_blank"
                rel="noreferrer"
              >
                Для работодателей
              </a>
              <a
                href="https://practicum.yandex.ru"
                className="footer__link"
                target="_blank"
                rel="noreferrer"
              >
                Лицензия
              </a>
              <a
                href="https://practicum.yandex.ru"
                className="footer__link"
                target="_blank"
                rel="noreferrer"
              >
                Отзывы
              </a>
            </div>
            <div>
              <div className="footer__social-media">
                <a
                  href="https://practicum.yandex.ru"
                  className="footer__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Журнал
                </a>
                <a
                  href="https://practicum.yandex.ru"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={logoVk} alt="логотип ссылки на вконтакте" />
                </a>
                <a
                  href="https://practicum.yandex.ru"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={logoTg} alt="логотип ссылки на телеграм" />
                </a>
              </div>
              <p className="footer__author">
                &copy;2022 АНО ДПО «ШАД», ООО «Яндекс»
              </p>
            </div>
          </div>
          <div className="footer__info">
            <p className="footer__text">
              Информация на данной странице описывает возможные варианты
              получения дополнительного дохода в месяц (т.н. подработка). Не
              является предложением о работе. Размещенные объявления о
              потребности в тех или иных услугах не являются вакансиями.
              <br />
              <br />
              Образовательные услуги оказываются АНО ДПО «ШАД». ШАД — это Школа
              анализа данных, основанная Яндексом и оказывающая образовательные
              услуги на основании Лицензии № 036031 от 24 марта 2015 года.
              <br />
              <br />
              Сертификат о прохождении обучения по программе дополнительного
              профессионального образования также выдается АНО ДПО «ШАД».
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
