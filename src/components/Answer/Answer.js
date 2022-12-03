import "./Answer.css";

function Answer({ answers, handleRadioChange, answerNumber }) {
  return (
    <>
      <input
        type="radio"
        id={`radio${answers.number}`}
        name="radio"
        value={answers.prof}
        checked={answerNumber === answers.number}
        className="quiz__input"
        onChange={() => handleRadioChange(answers)}
      ></input>
      <label className="quiz__label" htmlFor={`radio${answers.number}`}>
        {answers.answer}
      </label>
    </>
  );
}

export default Answer;
