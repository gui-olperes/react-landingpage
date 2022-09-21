import React from "react"
import minhaImagem from '../components/img/teacher.svg'



export default function content() {
    return (
     
      <>
        <div className="one">
            <div className="title">
            
            <h1>Lorem Ipsum   </h1>
            <h2>is a simply dummy </h2>
            </div>
        </div>
      <img src={minhaImagem} className="img-content"/>
      <button className="learn-more pos-button">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">Learn More</span>
      </button>
      </>
  
  
    );
  }