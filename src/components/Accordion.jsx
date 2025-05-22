import React, { useRef, useState } from "react";
import arrow_down from "../assets/img/svg/arrow_down.svg";
import data from "./AccordionData";
import "./Accordion.scss";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef();
  return (
    <div className="accordion_wrapper">
      <button
        className={`question-container ${isOpen} 'active' : ''}`}
        onClick={onClick}
      >
        <p className="question-content">{question}</p>
        <img src={arrow_down} className={`arrow ${isOpen ? "active" : ""}`} />
      </button>
      <div
        ref={contentHeight}
        className="answer-container"
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <p className="answer-content">{answer}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion_container">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
