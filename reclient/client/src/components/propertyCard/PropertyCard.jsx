import React from "react";
import "./propertyCard.css";
import { AiFillHeart } from "react-icons/ai";

function PropertyCard({ card }) {
  return (
    <div className="flexColStart r-card">
      <AiFillHeart size={24} color="white" />
      <img src={card.image} alt="home" />
      <span className="secondaryText r-price">
        <span style={{ color: "orange" }}>$</span>
        <span>{card.price}</span>
      </span>
      <span className="primaryText">{card.name}</span>
      <span className="secondaryText">{card.detail}</span>
    </div>
  );
}

export default PropertyCard;
