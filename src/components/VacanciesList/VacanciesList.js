import React from "react";
import "./VacanciesList.css";
import Vacancy from "../Vacancy/Vacancy";
import clsx from 'clsx';

function VacanciesList({ vacancies, reviews }) {
  const [toggleState, setToggleState] = React.useState("vacancies");
  const [openVacancie, setOpenVacancie] = React.useState(false);
  const [openReview, setOpenReview] = React.useState(false);

  function toggleTab() {
    toggleState === "vacancies" ? setToggleState("reviews") : setToggleState("vacancies");
  }

  function toggleList() {
    if (toggleState === "vacancies") {
      openVacancie === false ? setOpenVacancie(true) : setOpenVacancie(false);
    } else {
      openReview === false ? setOpenReview(true) : setOpenReview(false);
    }
  }

  return (
    <section className="vacancies">
      <h2 className="vacancies__title">Вакансии</h2>
      <button
        className={
          toggleState === "vacancies"
            ? "vacancies__btn vacancies__btn_active"
            : "vacancies__btn "
        }
        onClick={() => toggleTab()}
      >
        Для наставников
      </button>
      <button
        className={
          toggleState === 2
            ? "vacancies__btn vacancies__btn_active"
            : "vacancies__btn "
        }
        onClick={() => toggleTab()}
      >
        Для ревьюеров
      </button>

      <ul
        className={clsx(
          toggleState === "vacancies"
            ? "vacancies__list vacancies__list_active"
            : "vacancies__list",
          openVacancie
            ? "vacancies__list vacancies__list_shown "
            : "vacancies__list"
        )}
      >
        {vacancies.map((vacancy, index) => (
          <Vacancy vacancy={vacancy} key={index} />
        ))}
      </ul>

      <ul
        className={clsx(
          toggleState === "reviews"
            ? "vacancies__list vacancies__list_active"
            : "vacancies__list",
          openReview
            ? "vacancies__list vacancies__list_shown "
            : "vacancies__list"
        )}
      >
        {reviews.map((review, index) => (
          <Vacancy vacancy={review} key={index} />
        ))}
      </ul>

      <button
        type="button"
        className="vacancies__see-all"
        onClick={() => toggleList()}
      >
        Посмотреть все
      </button>
    </section>
  );
}

export default VacanciesList;
