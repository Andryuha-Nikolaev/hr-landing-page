import React from "react";
import './Share.css';

function Share() {
  return (
      <section className="share">
        <div className="share__wrap">
          <h1 className="share__header">Делись своим опытом в программировании<br/><span className="share__header_type_color">станьте наставником или ревьюером</span></h1>
          <button className="share__btn" type="button">Посмотреть вакансии</button>
        </div>
        <img className="share__image"/>
      </section>
  )
}

export default Share;
