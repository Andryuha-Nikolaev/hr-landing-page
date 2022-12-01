import React from "react";
import "./Answer.css";

function Answer({ answers, handleRadioChange }) {
  return (
    <>
      <input
        type="radio"
        id={`radio${answers.number}`}
        name="radio"
        value={answers.prof}
        className="quiz__input"
        onChange={() => handleRadioChange(answers.prof)}
      ></input>
      <label className="quiz__label" htmlFor={`radio${answers.number}`}>
        {answers.answer}
      </label>
    </>
  );
}

export default Answer;