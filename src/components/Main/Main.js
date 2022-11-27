import React from 'react';
import VacanciesList from '../VacanciesList/VacanciesList';
import vacancies from '../../assets/vacancies.json'

function Main() {
  return (
    <main>
      <h1>тут будет блок</h1>
      <h1>тут будет блок2</h1>
      <h1>тут будет блок3</h1>
      <h1>тут будет блок4</h1>
      <h1>тут будет блок5</h1>
      <VacanciesList vacancies={vacancies} />
    </main>
  );
}

export default Main;
