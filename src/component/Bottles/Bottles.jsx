import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLs, getStorageCard } from "../../utilities/localstroge";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [addCard, setAddCard] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  //load cart from local storage
  useEffect(()=>{
    console.log(bottles.length);
    const getstrogecart = getStorageCard();
    console.log(getstrogecart);
  },[bottles])

  const handleAddCard = (card) => {
    const newCard = [...addCard, card];
    setAddCard(newCard);
    addToLs(card.id);
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
