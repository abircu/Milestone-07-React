import "./App.css";
import Counter from "./counter";
import Team from "./team";

function App() {
  function handleclick() {
    alert("button is clicked");
  }
  const handleClicked2 = () => {
    alert("it was also clicked");
  };
  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <Team />
      <Counter />
      <h1>React core concepts</h1>
      <button onClick={handleclick}>Click Me</button>
      <button onClick={handleClicked2}>more click</button>
      <button
        onClick={() => {
          alert("third clicked also used");
        }}
      >
        Third click
      </button>
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  );
}

export default App;
