import React from "react";
import "./Answer.css";

function Answer({ answers }) {
  console.log(answers.number);

  return (
    <>
      <input
        type="radio"
        id={`radio${answers.number}`}
        name="radio"
        value={answers.number}
        className="quiz__input"
      ></input>
      <label className="quiz__label" htmlFor={`radio${answers.number}`}>
        {answers.answer}
      </label>
    </>
  );
}

export default Answer;
