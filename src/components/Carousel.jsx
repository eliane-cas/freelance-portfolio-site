import React, { useState } from "react";

import "./Carousel.scss";
import { CarouselItem } from "./CarouselItem";
import img1 from "../assets/img/skyline_mockup.png";
import img2 from "../assets/img/luxurypaws.png";
import img3 from "../assets/img/lucalaptops.png";
import arrow_left from "../assets/img/svg/arrow-left.svg";
import arrow_right from "../assets/img/svg/arrow-right.svg";
import radio_off from "../assets/img/svg/radio_button_off.svg";
import radio_on from "../assets/img/svg/radio_button_on.svg";
import Button from "./Button";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Online Bank Landing Page",
      subtitle: "Concept Project – UI/UX + Front-End Development",
      description:
        "A sleek, modern landing page for a fictional online banking service. Focused on clean typography, trust-building layout, and clear calls-to-action. Built fully responsive with React",
      background: "bla",
      image: img1,
    },
    {
      title: "Dog Hotel Landing Page",
      subtitle: "Small Business Demo – Web Copy + Dev",
      description:
        "Fun, welcoming landing page for a fictional dog hotel. Designed to be warm and friendly, with key info like pricing, location, and contact presented clearly for pet owners.",
      background: "bla",
      image: img2,
    },
    {
      title: "Photographer Portfolio",
      subtitle: "Client Demo – One-Page Portfolio Site",
      description:
        "A stylish and minimal site designed to help a photographer showcase their work. Emphasizes image galleries, contact info, and bio with smooth scroll and responsive layout.",
      background: "bla",
      image: img3,
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div
        className="inner_carousel"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <img src={arrow_left} />
        </button>
        <div className="indicators">
          {items.map((item, index) => (
            <button
              className="indicator-buttons"
              onClick={() => {
                updateIndex(index);
              }}
            >
              <img
                src={index === activeIndex ? radio_on : radio_off}
                className={
                  index === activeIndex
                    ? "indicator-symbol-active"
                    : "indicator-symbol"
                }
              />
            </button>
          ))}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <img src={arrow_right} />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
