import React from "react";
import "./VacanciesList.css";
import Vacancy from "../Vacancy/Vacancy";
import clsx from 'clsx';

function VacanciesList({ vacancies, reviews }) {

  const [toggleState, setToggleState] = React.useState(1);
  const [openList, setOpenList] =  React.useState(false);

  function toggleTab(index) {
    setToggleState(index);
  }

function toggleList() {
  openList === false ? setOpenList(true) : setOpenList(false)
}


  return (
    <section className="vacancies">
      <h2 className="vacancies__title">Вакансии</h2>
      <button
        className={toggleState === 1
            ? "vacancies__btn vacancies__btn_active"
            : "vacancies__btn "}
        onClick={() => toggleTab(1)}
      >
        Для наставников
      </button>
      <button
        className={
          toggleState === 2
            ? "vacancies__btn vacancies__btn_active"
            : "vacancies__btn "
        }
        onClick={() => toggleTab(2)}
      >
        Для ревьюеров
      </button>

      <ul
        className={clsx (toggleState === 1
            ? "vacancies__list vacancies__list_active"
            : "vacancies__list", openList ? "vacancies__list vacancies__list_shown " : "vacancies__list" )
          }

        >
        {vacancies.map((vacancy) => (
          <Vacancy vacancy={vacancy} key={vacancy.name} />
        ))}
      </ul>

      <ul className={clsx (toggleState === 2
            ? "vacancies__list vacancies__list_active"
            : "vacancies__list", openList ? "vacancies__list vacancies__list_shown " : "vacancies__list" )
        }>
        {reviews.map((review) => (
          <Vacancy vacancy={review} key={review.name} />
        ))}
      </ul>

      <button type="button" className="vacancies__see-all" onClick={() => toggleList()}>
        Посмотреть все
      </button>
    </section>
  );
}

export default VacanciesList;
