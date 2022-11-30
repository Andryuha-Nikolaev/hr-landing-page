import { useState } from "react";
import Answer from "../Answer/Answer";
import "./Quiz.css";

function Quiz({ quizQuestions }) {
  const [questionState, setQuestionState] = useState(0);
  const [reviewerPoints, setReviewerPoints] = useState(0);
  const [mentorPoints, setMentorPoints] = useState(0);

  function nextQuestion() {
    setQuestionState(questionState + 1);
  }

  function plus() {
    setReviewerPoints(reviewerPoints + 1);
  }

  function nextQuestion() {
    setMentorPoints(mentorPoints + 1);
  }

  const hanleSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="quiz">
        <h2 className="quiz__title">Определим какая вакансия для вас</h2>
        <p className="quiz__subtitle">
          Ответьте, пожалуйста на несколько вопросов, чтобы мы могли понять и
          рассказать, какая позиция подходит вам больше и почему.
        </p>

        <button className="quiz__button">Начать</button>
      </section>
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
            Начать
          </button>
        </form>
      </section>
      <section className="quiz quiz_type_finalcard">
        <h2 className="quiz__title">Наставник</h2>
        <p className="quiz__subtitle">
          Вам подходит больше данная вакансия, потому что суммарный опыт работы
          в данной сфере у вас составляет более 5 лет. Вы также отметили, что у
          вас есть опыт в проведении вебинаров.
        </p>
        <p className="quiz__subtitle">
          Чтобы приблизить возможность работы в нашей команде, заполните,
          пожалуйста, форму обратной связи и с вами свяжется наш рекрутер.
        </p>

        <button className="quiz__button">Присоедениться</button>
      </section>

      <section className="quiz quiz_type_finalcard">
        <h2 className="quiz__title">Ревьюер</h2>
        <p className="quiz__subtitle">
          Чтобы приблизить возможность работы в нашей команде, заполните,
          пожалуйста, форму обратной связи и с вами свяжется наш рекрутер.
        </p>
        <p className="quiz__subtitle">
          Вам подходит больше данная вакансия, потому что суммарный опыт работы
          в данной сфере у вас составляет более 5 лет. Вы также отметили, что у
          вас есть опыт в проведении вебинаров.
        </p>

        <button className="quiz__button">Присоедениться</button>
      </section>
    </>
  );
}

export default Quiz;
