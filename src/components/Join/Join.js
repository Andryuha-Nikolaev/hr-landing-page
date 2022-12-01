import React from "react";
import Form from "../Form/Form";
import images from "../../utils/constants";
import "./Join.css";

function Join({
  handleOpenForm,
  formOpen,
  handleFormClose,
  handleOverlayClick,
}) {
  return (
    <section className="join">
      <h2 className="join__header">Не нашли подходящей вакансии?</h2>
      <p className="join__text">
        Если вам интересно поработать с нами, заполните заявку. Мы постараемся
        подобрать вакансию под ваш опыт
      </p>
      <div
        className={`pop-up ${formOpen && "pop-up_opened"}`}
        onClick={handleOverlayClick}
      >
        <div className="pop-up__container">
          <Form onClose={handleFormClose} />
        </div>
      </div>
      <button className="join-btn" type="button" onClick={handleOpenForm}>
        Присоединиться к команде
      </button>
      <img className="join__img_star" src={images.star} alt="падающая звезда" />
      <img
        className="join__img__blue-arrow"
        src={images.blueArrow}
        alt="синяя стрелка"
      />
      <img
        className="join__img_programmer"
        src={images.programmer}
        alt="программист"
      />
    </section>
  );
      
}

export default Join;
