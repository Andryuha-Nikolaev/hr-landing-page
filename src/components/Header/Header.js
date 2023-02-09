import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Header.css";
import logoYandex from "../../images/logo-yandex.svg";
import logoPracticum from "../../images/logo-practicum.svg";
import headerButton from "../../images/header-button.svg";
import headerCloseButton from "../../images/header-close.svg";

function Header({ openQuiz }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-container">
          <a
            href="https://ya.ru/"
            className="header__link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logoYandex} alt="логотип Яндекс" />
          </a>
          <a
            href="https://practicum.yandex.ru"
            className="header__link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logoPracticum} alt="логотип Яндекс.Практикум" />
          </a>
        </div>
        <div className="header__button-container">
          <nav className="header__nav">
            <Link
              to="vacansy"
              className="header__nav-link"
              smooth={true}
              duration={600}
            >
              Вакансии
            </Link>
            <Link
              to="questions"
              className="header__nav-link"
              smooth={true}
              duration={600}
            >
              FAQ
            </Link>

            <Link
              to="contacts"
              className="header__nav-link"
              smooth={true}
              duration={600}
            >
              Контакты
            </Link>
          </nav>
          <button className="header__button" type="button" onClick={openQuiz}>
            Подобрать вакансию
          </button>
        </div>
        <button className="header__menu-button">
          {isClicked ? (
            <img
              src={headerCloseButton}
              alt="меню"
              onClick={() => setIsClicked(false)}
            />
          ) : (
            <img
              src={headerButton}
              alt="меню"
              onClick={() => setIsClicked(true)}
            />
          )}
        </button>
        <div
          className={
            isClicked
              ? "header__button-mobile header__button-mobile_active"
              : "header__button-mobile"
          }
        >
          <button className="header__button" type="button" onClick={openQuiz}>
            Подобрать вакансию
          </button>
          <nav className="header__nav">
            <Link
              to="tasks"
              className="header__nav-link"
              smooth={true}
              duration={600}
            >
              Задачи наставника и ревьюера
            </Link>
            <Link
              to="vacansy"
              className="header__nav-link"
              smooth={true}
              duration={600}
            >
              Вакансии
            </Link>
            <Link
              to="questions"
              className="header__nav-link"
              smooth={true}
              duration={600}
            >
              Часто задаваемые вопросы
            </Link>

            <Link
              to="contacts"
              className="header__nav-link"
              smooth={true}
              duration={600}
            >
              Контакты
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
