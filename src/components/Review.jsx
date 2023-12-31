import React from "react";
import data from "../data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { useState } from "react";

const Review = () => {
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = data[index];

  const handleNext = () => {
    index < data.length - 1 ? setIndex(index+1) : setIndex(0)
  }

  const handlePrev = () => {
    index === 0 ? setIndex(data.length-1) : setIndex(index-1)
  }

  const handleRandom = () => {
    let randomNumber = Math.floor(Math.random() * (data.length - 1));

    if(randomNumber===index){
        randomNumber= index+1
    }
    return setIndex(randomNumber)
  }




  return (
    <div className="review">
      <div className="img-div">
        <img src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={handlePrev}>
          <FaChevronLeft />
        </button>

        <button className="next-btn" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>

      <button className="random-btn" onClick={handleRandom}>
        Suprise Me
        </button>
    </div>
  );
};

export default Review;
