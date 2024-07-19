import React from "react";
import Slideshow from "./Slideshow";
import emblem from "../img/emblem.png";

const images = ["../img/1.jpg", "../img/2.jpg", "../img/4.jpg", "../img/5.jpg"];

export default function Main({ onOpenPopup }) {
  return (
    <section className="main">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="main-screen">
        <div className="main__text">
          <img className="main__logo" src={emblem} />
          <p className="main__subtitle">Виртуальная выставка</p>
          <h1 className="main__title">
            90 лет Челябинской области.
            <br /> Опорный край державы
          </h1>
          <div className="wrap">
            <button
              className="button-project"
              type="button"
              onClick={onOpenPopup}
            >
              Предисловие
            </button>
          </div>
        </div>
        <div className="main__img">
          <Slideshow images={images} />
        </div>
        <div className="content-arrow">
          <a href="#sections">
            <svg id="more-arrows">
              <polygon
                className="arrow-top"
                points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
              />
              <polygon
                className="arrow-middle"
                points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
              />
              <polygon
                className="arrow-bottom"
                points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
