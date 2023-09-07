import { useEffect, useState } from "react";

export default function User() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h4>Users:{users.length}</h4>
    </div>
  );
}

/*
work description step by step
1.Declear a state to hold the data
2.useEffect with callback and dependency arry
3.use fetch to load data from api

*/
