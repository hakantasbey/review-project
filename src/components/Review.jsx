import React from 'react'
import data from "../data"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { useState } from 'react';

const Review = () => {
    const[index,setIndex] = useState(0)

    const{name,job,image,text} = data[index]


  return (
    <div className='review'>
        <div className='img-div'>
            <img src={image} alt={name} />
            <span className='quote-icon'>
                <FaQuoteRight/>
            </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
    </div>
  )
}

export default Review