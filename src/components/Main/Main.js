import React from "react";
import Share from "../Share/Share";
import Faculty from "../Faculty/Faculty";
import VacanciesList from "../VacanciesList/VacanciesList";
import vacancies from "../../assets/vacancies.json";
import facultyList from "../../assets/facultyList.json";
import facultyInfo from "../../assets/facultyInfo.json";
import reviews from "../../assets/reviews.json";
import Tasks from "../Tasks/Tasks";
import Join from "../Join/Join";
import Expert from "../Expert/Expert";
import Roles from "../Roles/Roles";
import Quiz from "../Quiz/Quiz";
import quizQuestions from "../../assets/quizQuestions.json";

function Main() {
  return (
    <main>
      <Share />
      <Quiz quizQuestions={quizQuestions} />
      <Tasks />
      <Roles />
      <Expert />
      <Faculty facultyList={facultyList} facultyInfo={facultyInfo} />
      <VacanciesList vacancies={vacancies} reviews={reviews} />
      <Join />
    </main>
  );
}

export default Main;
