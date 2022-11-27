import React from "react";
import "./VacanciesList.css";
import Vacancy from "../Vacancy/Vacancy";

function VacanciesList({ vacancies }) {

  const [active, setActive] = React.useState(false);

  function handleActive() {
    setActive(true)
  }

  return (
    <section className="vacancies">
      <h2 className="vacancies__title">Вакансии</h2>
      <button className={active ? "vacancies__btn vacancies__btn_active " : "vacancies__btn"}>Для наставников</button>
      <button className="vacancies__btn">Для ревьюеров</button>
      <ul className="vacancies__list">
        {vacancies.map((vacancy) => (
          <Vacancy vacancy={vacancy} key={vacancy.name} />
        ))}
      </ul>
      <button type="button" className="vacancies__see-all">Посмотреть все</button>
    </section>
  );
}

export default VacanciesList;
