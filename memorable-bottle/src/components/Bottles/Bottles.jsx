import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addLocalStorage, getStoredCart } from "../../utilities/Local-Storage";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [isBottles, setBottles] = useState([]);
  const [isCart, setCart] = useState([]);
  useEffect(() => {
    fetch("bottle.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  // load cart from local storage
  useEffect(() => {
    console.log("called the use effect", isBottles.length);
    if (isBottles.length > 0) {
      const storedCart = getStoredCart();
      // console.log(storedCart);
      const saveCart = [];
      for (let id of storedCart) {
        console.log(id);
        const butttol = isBottles.find((bottle) => bottle.id === id);
        if (butttol) {
          saveCart.push(butttol);
        }
      }
      console.log(saveCart);
      setCart(saveCart);
    }
  }, [isBottles]);

  const handleAddToCart = (bottle) => {
    const newCart = [...isCart, bottle];
    setCart(newCart);
    addLocalStorage(bottle.id);
  };

  return (
    <div>
      <h2>Bottles Available:{isBottles.length}</h2>
      <Cart cart={isCart} />
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
