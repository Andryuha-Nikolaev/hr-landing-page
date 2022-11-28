import React from "react";
import Share from "../Share/Share";
import Faculty from "../Faculty/Faculty";
import VacanciesList from "../VacanciesList/VacanciesList";
import vacancies from "../../assets/vacancies.json";
import facultyList from "../../assets/facultyList.json";
import facultyInfo from "../../assets/facultyInfo.json";
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
      <Faculty facultyList={facultyList} facultyInfo={facultyInfo} />
      <VacanciesList vacancies={vacancies} />
    </main>
  );
}

export default Main;
