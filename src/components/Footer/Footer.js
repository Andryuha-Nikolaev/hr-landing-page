import React from "react";
import "./Footer.css";
import logoVk from "../../images/vk.svg";

function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__contacts">
            <div>
              <h2 className="footer__tel">8-800-700-93-29</h2>
              <span className="footer__span">Звонок по России бесплатный</span>
              <div className="footer__link-container">
                <a
                  href="https://yandex.ru/support/praktikum/feedback.html"
                  className="footer__link footer__link_type_one"
                  target="_blank"
                  rel="noreferrer"
                >
                  Помощь
                </a>
                <a
                  href="https://yandex.ru/legal/practicum_termsofuse/"
                  className="footer__link footer__link_type_two"
                  target="_blank"
                  rel="noreferrer"
                >
                  Правовая информация
                </a>
                <a
                  href="https://practicum.yandex.ru/job"
                  className="footer__link footer__link_type_three"
                  target="_blank"
                  rel="noreferrer"
                >
                  Вакансии
                </a>
                <a
                  href="https://practicum.yandex.ru/employment/"
                  className="footer__link footer__link_type_four"
                  target="_blank"
                  rel="noreferrer"
                >
                  Для работодателей
                </a>
                <a
                  href="https://code.s3.yandex.net/License%20YSDA.pdf"
                  className="footer__link footer__link_type_five"
                  target="_blank"
                  rel="noreferrer"
                >
                  Лицензия
                </a>
                <a
                  href="https://practicum.yandex.ru/reviews"
                  className="footer__link footer__link_type_six"
                  target="_blank"
                  rel="noreferrer"
                >
                  Отзывы
                </a>
                <div className="footer__social-media footer__link_type_seven">
                  <a
                    href="https://vk.com/yandex.practicum"
                    target="_blank"
                    rel="noreferrer"
                    className="footer__social-media-icon"
                  >
                    <img src={logoVk} alt="логотип ссылки на вконтакте" />
                  </a>
                  <a
                    href="https://thecode.media/"
                    className="footer__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Журнал
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p className="footer__author">
            &copy;2022 АНО ДПО «ШАД», ООО «Яндекс»
          </p>
          <div className="footer__info">
            <p className="footer__text">
              Информация на данной странице описывает возможные варианты
              получения дополнительного дохода в месяц (т.н. подработка). Не
              является предложением о работе. Размещенные объявления о
              потребности в тех или иных услугах не являются вакансиями.
            </p>
            <p className="footer__text">
              Образовательные услуги оказываются АНО ДПО «ШАД». ШАД — это{" "}
              <a
                href="https://academy.yandex.ru/dataschool/"
                target="_blank"
                className="footer__link-in-text"
                rel="noreferrer"
              >
                Школа анализа данных
              </a>
              , основанная Яндексом и оказывающая образовательные услуги на
              основании
              <a
                href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://code.s3.yandex.net/License%20YSDA.pdf"
                target="_blank"
                className="footer__link-in-text"
              >
                Лицензии № 036031
              </a>{" "}
              от 24 марта 2015 года.
            </p>
            <p className="footer__text">
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
