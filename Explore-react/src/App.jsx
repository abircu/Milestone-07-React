import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Todo from "./todo";
import Actor from "./actor";
import Singer from "./singer";
import "./App.css";

function App() {
  const actors = ["sakib", "raj", "bapparaj", "manna"];
  const singers = [
    { id: 1, name: "dr.mahfujur rahman", age: 68 },
    { id: 2, name: "dr.ohedur rahman", age: 48 },
    { id: 3, name: "dr.mijanur rahman", age: 38 },
    { id: 4, name: "dr.saifur rahman", age: 28 },
  ];
  return (
    <>
      <h1>hello</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person2></Person2>
      <Developer></Developer>
      <Actor name={"bappa raj"} />
      {actors.map((actor) => (
        <Actor key={actor} name={actor} />
      ))}
      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}
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
