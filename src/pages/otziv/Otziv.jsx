import React from "react";
import "./otziv.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Cards from "./cards/Cards";
// import img1 from './imgs/nours.png'

const handleDragStart = (e) => e.preventDefault();

let res = {
  0: {
    items: 1,
  },
  600: {
    items: 2,
  },
  1024: {
    items: 3,
  },
  1366: {
    items: 3,
  }
};

const items = [
  <Cards  onDragStart={handleDragStart} role="presentation" />,
  <Cards onDragStart={handleDragStart} role="presentation" />,
  <Cards onDragStart={handleDragStart} role="presentation" />,
  <Cards onDragStart={handleDragStart} role="presentation" />,
  <Cards onDragStart={handleDragStart} role="presentation" />,
  <Cards onDragStart={handleDragStart} role="presentation" />,
  <Cards onDragStart={handleDragStart} role="presentation" />,
  <Cards onDragStart={handleDragStart} role="presentation" />,
  <Cards onDragStart={handleDragStart} role="presentation" />,
];
const Otziv = () => {
  return (
    <div className="otziv">
      <div className="otziv__header">
        <h1>Отзывы</h1>
      </div>
      <div className="otziv__alice__carusel">
        <AliceCarousel
          mouseTracking
          items={items}
          animationDuration={2000}
          autoPlay={true}
          autoPlayControls={true}
          infinite={true}
          responsive={res}
        />
      </div>
    </div>
  );
};

export default Otziv;
