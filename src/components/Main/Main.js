import React from 'react';
import VacanciesList from '../VacanciesList/VacanciesList';
import vacancies from '../../assets/vacancies.json'
import Share from "../Share/Share";
import Tasks from "../Tasks/Tasks";

function Main() {
  return (
    <main>
      <Share />
      <Tasks />
      <h1>тут будет блок2</h1>
      <h1>тут будет блок3</h1>
      <h1>тут будет блок4</h1>
      <h1>тут будет блок5</h1>
      <VacanciesList vacancies={vacancies} />
    </main>
  );
}

export default Main;
