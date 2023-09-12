import "./Bottle.css";
const Bottle = ({ buttle, handleAddToCart }) => {
  const { name, img, price, ratings } = buttle;
  return (
    <div className="botlle">
      <h3>Bottle Name: {buttle.name}</h3>
      <img src={buttle.img} alt="" />
      <h4>Price: {buttle.price}</h4>
      <h3>Ratings:{buttle.ratings}</h3>
      <button onClick={() => handleAddToCart(buttle)}>Purchase</button>
    </div>
  );
};

export default Bottle;
