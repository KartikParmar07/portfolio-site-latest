import React from "react";


const Cards = ({cardImg, heading}) => {
  return (
    <>
      <div className="cards">
        <div className="card-box1">
            <img src={cardImg} alt="" />
        </div>
        <div className="card-box2">
          <h3 className="card-heading">Mern</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore totam adipisci ea aliquid.</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
