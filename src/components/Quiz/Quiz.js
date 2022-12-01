import { useState } from "react";
import Answer from "../Answer/Answer";
import "./Quiz.css";

function Quiz({
  quizQuestions,
  quizOpen,
  handleOverlayClick,
  handleOpenForm,
  closeQuiz,
}) {
  const [questionState, setQuestionState] = useState(0);
  const [reviewerPoints, setReviewerPoints] = useState(0);
  const [mentorPoints, setMentorPoints] = useState(0);
  const [reviewerProffession, setReviewerProffession] = useState(false);
  const [mentorProffession, setMentorProffession] = useState(false);
  const [isQuizStarted, setisQuizStarted] = useState(false);
  const [isQuizFinished, setisQuizFinished] = useState(false);
  const [answerState, setAnswerState] = useState(0);
  const [isAnswered, setisAnswered] = useState(false);

  function countPoints() {
    if (reviewerPoints > mentorPoints) {
      setReviewerProffession(true);
    } else {
      setMentorProffession(true);
    }
  }
  function handleRadioChange(stateNumber) {
    setAnswerState(stateNumber);
    setisAnswered(false);
  }

  function startQuiz() {
    setisQuizStarted(true);
    setisAnswered(true);
  }

  function openForm() {
    closeQuiz();
    setReviewerProffession(false);
    setMentorProffession(false);
    handleOpenForm();
    setisQuizStarted(false);
    setisQuizFinished(false);
    setQuestionState(0);
  }

  function nextQuestion() {
    if (questionState > quizQuestions.length - 2) {
      setisQuizFinished(true);
      countPoints();
    } else {
      setQuestionState(questionState + 1);
      setisAnswered(true);
    }

    if (answerState === "reviewer") {
      plusReviewerPoints();
    } else {
      plusMentorPoints();
    }
  }

  function plusReviewerPoints() {
    console.log("rev do " + reviewerPoints);
    setReviewerPoints(reviewerPoints + 1);
    console.log("rev " + reviewerPoints);
  }

  function plusMentorPoints() {
    setMentorPoints(mentorPoints + 1);
    console.log("mentor " + mentorPoints);
  }

  const hanleSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={` overlay ${quizOpen && "overlay_opened"}`}
      onClick={handleOverlayClick}
    >
      {!isQuizStarted && quizOpen && (
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
                <Answer
                  answers={answers}
                  key={index}
                  handleRadioChange={handleRadioChange}
                />
              ))}
            </div>
            <button
              className="quiz__button quiz__button_type_qustion"
              onClick={() => nextQuestion()}
              disabled={isAnswered}
            >
              Далее
            </button>
          </form>
        </section>
      )}
      {isQuizFinished && mentorProffession && (
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
          <button className="quiz__button" onClick={openForm}>
            Присоедениться
          </button>
        </section>
      )}
      {isQuizFinished && reviewerProffession && (
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
          <button className="quiz__button" onClick={openForm}>
            Присоедениться
          </button>
        </section>
      )}
    </div>
  );
}

export default Quiz;
