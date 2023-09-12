import {
  add,
  diviteTheFirstNumberByTheSecondNumber as div,
  multiply,
} from "../../Utilts/calculate";
import "./Sunglass.css";
const Sunglass = () => {
  const first = 50;
  const second = 10;
  const sum = add(first, second);
  const mult = multiply(first, second);
  const divite = div(first, second);
  return (
    <div>
      <h1>{sum}</h1>
      <h2>{mult}</h2>
      <h3>{divite}</h3>
    </div>
  );
};

export default Sunglass;
