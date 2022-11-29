import React from "react";
import { Link } from "react-scroll";
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
        <Link to="vacansy" className="share__btn" smooth={true} duration={600}>
          Посмотреть вакансии
        </Link>
      </div>
      <img className="share__image" src={laptop} alt="ноутбук" />
    </section>
  );
}

export default Share;
