import React from "react";
import Slideshow from "./Slideshow";

const images = [
  "../img/4.jpg",
  "../img/5.jpg",
  "../img/6.jpg",
  "../img/7.jpg",
  "../img/9.jpg",
];

export default function Main() {
  return (
    <section className="main">
      <div className="main__text">
        <h1>90 лет Челябинской области. Опорный край державы</h1>
      </div>
      <div className="main__img">
        <Slideshow images={images} />
      </div>
    </section>
  );
}
