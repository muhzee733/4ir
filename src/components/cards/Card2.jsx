import React from "react";

const Card = ({ items, index }) => {
  return (
    <div className="card" key={index}>
      <div class="card-body">
        <div className="img-card">
          <img src={items?.img} alt={items.title} />
        </div>
        <h5>{items?.title}</h5>
        <p>{items?.para}</p>
      </div>
    </div>
  );
};

export default Card;
