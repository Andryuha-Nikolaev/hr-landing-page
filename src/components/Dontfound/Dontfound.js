import React from "react";
import Form from "../Form/Form";
import './Dontfound.css';

function Dontfound() {

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
    <>
      <h2 className="">Не нашли себя в открытых предложениях ?</h2>
      <div className={`pop-up ${formOpen && "pop-up_opened"}`} onClick={handleOverlayClick}>
              <div className="pop-up__container">
          <Form onClose={handleFormClose}/>
      </div>
      </div>
      <button className="" type="button" onClick={handleOpenForm}>Отправить заявку</button>
    </>
  )
}

export default Dontfound;
