import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLs, getStorageCard } from "../../utilities/localstroge";
import Cart from "../Cart/Cart";

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
    // console.log(bottles.length);
    if(bottles.length > 0){
      const getstrogecart = getStorageCard();
      // console.log(getstrogecart, bottles);

      let saveCart = [];
      for(const id of getstrogecart){
        const bottle = bottles.find(bottle => bottle.id === id);
        if(bottle){
          saveCart.push(bottle);
        }
      }
      // console.log('my cart', saveCart);
      setAddCard(saveCart)
    }
  },[bottles])

  const handleAddCard = (card) => {
    const newCard = [...addCard, card];
    setAddCard(newCard);
    addToLs(card.id);
  };

  return (
    <div>
      <h2>Available Bottles: {bottles.length}</h2>
      <Cart addCard={addCard}></Cart>
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
