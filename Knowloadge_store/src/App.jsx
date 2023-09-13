import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-3xl font-semibold bg-red-200 text-amber-100">
        <h2>hello react</h2>
      </div>
    </>
  );
}

export default App;
