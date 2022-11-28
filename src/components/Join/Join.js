import React from "react";
import Form from "../Form/Form";
import './Join.css';

function Join() {

  const [formOpen, setFormOpen] = React.useState(false);

function handleOpenForm() {
  setFormOpen(true);
}

function handleFormClose() {
  setFormOpen(false);
}

function handleOverlayClick(e) {
  if (e.target === e.currentTarget) {
    setFormOpen(false);
  }
}

  return (
    <section className="join">
      <h2 className="join__header">Не нашли себя в открытых предложениях ?</h2>
      <p className="join__text">Если вам интересно поработать с нами, заполните заявку. Мы постараемся подобрать вакансию под ваш опыт</p>
      <div className={`pop-up ${formOpen && "pop-up_opened"}`} onClick={handleOverlayClick}>
              <div className="pop-up__container">
          <Form onClose={handleFormClose}/>
      </div>
      </div>
      <button className="join-btn" type="button" onClick={handleOpenForm}>Отправить заявку</button>
    </section>
  )
}

export default Join;
