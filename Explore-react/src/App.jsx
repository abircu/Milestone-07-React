import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Todo from "./todo";
import "./App.css";

function App() {
  return (
    <>
      <h1>hello</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person2></Person2>
      <Developer></Developer>
      <Device name="mobail" price="10500"></Device>
      <Device name="laptop" price="100500"></Device>
      <Device name="watch" price="500"></Device>
      <Student grade={grade} score={score}></Student>
      <Todo task="learn react " isDone={true} />
      <Todo task="core concepts " isDone={false} />
      <Todo task="try jsx " isDone={true} />
    </>
  );
}
function Device(props) {
  // console.log(props);
  return (
    <h4>
      this is device:{props.name} price:{props.price}
    </h4>
  );
}
function Person() {
  const age = 23;
  const person = { name: "sohel", age: 12 };
  return (
    <h2>
      i am {person.name} react developer & i am {age} years old
    </h2>
  );
}
function Person2() {
  return (
    <div className="student">
      <h3> ai sala tora ghume theke uth</h3>
    </div>
  );
}

function Developer() {
  const develeperStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purpule",
    borderRadius: "10px solid red",
  };
  return (
    <div style={develeperStyle}>
      <h5>mernstack developer</h5>
      <h6>coding is fun is but sometimes coding is crying</h6>
    </div>
  );
}
const { grade, score } = { grade: "7", score: "99" };
function Student({ grade, score }) {
  console.log(grade, score);
  return (
    <div>
      <h3>this is a student</h3>
      <p>class:{grade}</p>
      <p>Score:{score}</p>
    </div>
  );
}

export default App;
