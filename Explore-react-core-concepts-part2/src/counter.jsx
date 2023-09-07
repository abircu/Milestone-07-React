import { useState } from "react";

export default function Counter() {
  const [isCount, setCount] = useState(0);

  const inCrement = () => {
    const newCount = isCount + 1;
    setCount(newCount);
  };
  const deCriment = () => {
    const reduce = isCount - 1;
    setCount(reduce);
  };
  return (
    <div style={{ border: "2px solid yellow" }}>
      <h3>Counter: {isCount}</h3>
      <button onClick={inCrement}>Incriment</button>
      <button onClick={deCriment}>Reduce</button>
    </div>
  );
}
