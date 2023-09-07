import { useEffect, useState } from "react";
import "./friends.css";
import Friend from "./friend";
export default function Friends() {
  const [friens, setFriends] = useState([]);
  //   useEffect for load data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div className="box">
      <h2>Friends: {friens.length} </h2>
      {friens.map((friend) => (
        <Friend friend={friend}></Friend>
      ))}
    </div>
  );
}
/*
step:01 state to hold data
step 02:  useEffect with dependency array
step 03: use fatach to load data
step04:set loaded data of useEffect
*/
