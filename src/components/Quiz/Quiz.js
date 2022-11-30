import { useState } from "react";
import Answer from "../Answer/Answer";
import "./Quiz.css";

function Quiz({ quizQuestions, openQuiz }) {
  const [questionState, setQuestionState] = useState(0);

  const [reviewerPoints, setReviewerPoints] = useState(true);
  const [mentorPoints, setMentorPoints] = useState(false);
  const [isQuizStarted, setisQuizStarted] = useState(false);
  const [isQuizFinished, setisQuizFinished] = useState(false);

  function startQuiz() {
    setisQuizStarted(true);
  }

  function nextQuestion() {
    if (questionState > quizQuestions.length - 2) {
      console.log(1234);
      setisQuizFinished(true);
    } else {
      setQuestionState(questionState + 1);
    }
  }

  function plusReviewerPoints() {
    setReviewerPoints(reviewerPoints + 1);
  }

  function plusMentorPoints() {
    setMentorPoints(mentorPoints + 1);
  }

  const hanleSubmitForm = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className={` ${openQuiz && "overlay"}`}>
      {!isQuizStarted && openQuiz && (
        <section className="quiz">
          <h2 className="quiz__title">Определим какая вакансия для вас</h2>
          <p className="quiz__subtitle">
            Ответьте, пожалуйста на несколько вопросов, чтобы мы могли понять и
            рассказать, какая позиция подходит вам больше и почему.
          </p>
          <button className="quiz__button" onClick={startQuiz}>
            Начать
          </button>
        </section>
      )}

      {!isQuizFinished && isQuizStarted && (
        <section className="quiz">
          <div className="quiz__question-container">
            <p className="quiz__question">
              {quizQuestions[questionState].question}
            </p>
            <span className="quiz__question-number">
              {quizQuestions[questionState].number}/{quizQuestions.length}
            </span>
          </div>
          <form className="quiz__answers-container" onSubmit={hanleSubmitForm}>
            <div className="quiz__answers">
              {quizQuestions[questionState].answers.map((answers, index) => (
                <Answer answers={answers} key={index} />
              ))}
            </div>
            <button
              className="quiz__button quiz__button_type_qustion"
              onClick={() => nextQuestion()}
            >
              Далее
            </button>
          </form>
        </section>
      )}
      {isQuizFinished && mentorPoints && (
        <section className="quiz quiz_type_finalcard">
          <h2 className="quiz__title">Наставник</h2>
          <p className="quiz__subtitle">
            Вам подходит больше данная вакансия, потому что суммарный опыт
            работы в данной сфере у вас составляет более 5 лет. Вы также
            отметили, что у вас есть опыт в проведении вебинаров.
          </p>
          <p className="quiz__subtitle">
            Чтобы приблизить возможность работы в нашей команде, заполните,
            пожалуйста, форму обратной связи и с вами свяжется наш рекрутер.
          </p>
          <button className="quiz__button">Присоедениться</button>
        </section>
      )}
      {isQuizFinished && reviewerPoints && (
        <section className="quiz quiz_type_finalcard">
          <h2 className="quiz__title">Ревьюер</h2>
          <p className="quiz__subtitle">
            Чтобы приблизить возможность работы в нашей команде, заполните,
            пожалуйста, форму обратной связи и с вами свяжется наш рекрутер.
          </p>
          <p className="quiz__subtitle">
            Вам подходит больше данная вакансия, потому что суммарный опыт
            работы в данной сфере у вас составляет более 5 лет. Вы также
            отметили, что у вас есть опыт в проведении вебинаров.
          </p>
          <button className="quiz__button">Присоедениться</button>
        </section>
      )}
    </div>
  );
}

export default Quiz;
