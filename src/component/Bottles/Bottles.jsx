import React, { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [addCard, setAddCard] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const handleAddCard = (card) => {
    const newCard = [...addCard, card]
    setAddCard(newCard)
  };

  return (
    <div>
      <h2>Available Bottles: {bottles.length}</h2>
      <h3>Card Added: {addCard.length}</h3>  
      <div className="card_container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddCard={handleAddCard}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
