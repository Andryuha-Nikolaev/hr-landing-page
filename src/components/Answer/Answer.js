import React from "react";
import "./Answer.css";

function Answer({ answers }) {
  return (
    <>
      <input
        type="radio"
        id={`radio${answers.number}`}
        name="radio"
        value={answers.value}
        className="quiz__input"
      ></input>
      <label className="quiz__label" htmlFor={`radio${answers.number}`}>
        {answers.answer}
      </label>
    </>
  );
}

export default Answer;
