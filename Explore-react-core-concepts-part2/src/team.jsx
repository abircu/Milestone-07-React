import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);
  //   add players functions
  const handleAdd = () => {
    const addPlayers = team + 1;
    setTeam(addPlayers);
  };
  //   Remove player from  Team
  const handleRemove = () => {
    const removePlayer = team - 1;
    setTeam(removePlayer);
  };
  //   add style in body
  const teamStyle = {
    border: "2px solid red",
    margin: "15px",
    padding: "10px",
    borderRadius: "15px",
  };
  return (
    <div style={teamStyle}>
      <h3>Players : {team}</h3>
      <div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
}
