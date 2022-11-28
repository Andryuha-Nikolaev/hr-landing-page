import React from "react";
import Share from "../Share/Share";
import Faculty from "../Faculty/Faculty";
import VacanciesList from "../VacanciesList/VacanciesList";
import vacancies from "../../assets/vacancies.json";
import reviews from '../../assets/reviews.json';
import Tasks from "../Tasks/Tasks";

import Join from "../Join/Join";

import Expert from "../Expert/Expert";

function Main() {
  return (
    <main>
      <Share />
      <Tasks />
      <h1>тут будет блок2</h1>
      <h1>тут будет блок3</h1>
      <h1>тут будет блок4</h1>
      <Expert />
      <Faculty />
      <VacanciesList vacancies={vacancies} reviews={reviews}/>
      <Join />
    </main>
  );
}

export default Main;
