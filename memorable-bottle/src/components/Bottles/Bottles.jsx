import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = () => {
  const [isBottles, setBottles] = useState([]);
  const [isCart, setCart] = useState([]);
  useEffect(() => {
    fetch("bottle.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  const handleAddToCart = (bottle) => {
    const newCart = [...isCart, bottle];
    setCart(newCart);
  };

  return (
    <div>
      <h4>Cart Added: {isCart.length}</h4>
      <div className="Bottles">
        {isBottles.map((buttle) => (
          <Bottle
            key={buttle.id}
            buttle={buttle}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
