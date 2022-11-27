import React from "react";
import "./Vacancy.css";
import arrow from "../../images/arrow-right.svg";

function Vacancy({ vacancy }) {
  return (
    <li>
      <a href={vacancy.link} target="blank" className="vacancy">
        <p className="vacancy__text">{vacancy.name}</p>
        <img className="vacancy__arrow" src={arrow} alt="" />
      </a>
      <p className="vacancy__capture">{vacancy.salary}</p>
    </li>
  );
}

export default Vacancy;
