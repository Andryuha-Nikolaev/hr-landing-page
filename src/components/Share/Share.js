import React from "react";
import laptop from "../../images/laptop.svg";
import "./Share.css";

function Share() {
  return (
    <section className="share">
      <div className="share__wrap">
        <h1 className="share__header_type_color">
          Делись своим опытом в&nbsp;программировании
          <br />
          <span className="share__header">
            станьте наставником или ревьюером
          </span>
        </h1>
        <button className="share__btn" type="button">
          Посмотреть вакансии
        </button>
      </div>
      <img className="share__image" src={laptop} alt="ноутбук"/>
    </section>
  );
}

export default Share;
