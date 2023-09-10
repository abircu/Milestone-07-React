import { useState } from "react";
import "./country.css";
const Country_data = ({ countries, handleVisitedCountry }) => {
  console.log(countries);
  if (!countries || !countries.name || !countries.name.common) {
    return null; // or display an error message
  }
  const { name, flags, area, population, cca3 } = countries;
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div>
      <div>
        {/* <h5>Visited Country{visitedCountries.length}</h5> */}
        <ul></ul>
      </div>
      <div className="country">
        <h3 style={{ color: visited ? "purple" : "aquamarine" }}>
          Name: {name?.common}{" "}
        </h3>
        <img src={flags.png} alt="" />
        <div>
          <h5>{area}meters</h5>
          <h5>{population} poeple</h5>
          <p>{cca3}</p>
        </div>
        <button onClick={() => handleVisitedCountry(countries)}>
          Mark as visited
        </button>
        <br />
        <button
          onClick={handleVisited}
          className={visited ? "visited" : "non_visited"}
        >
          {visited ? "visited" : "going"}
        </button>
        {visited && "I have visited this country"}
      </div>
    </div>
  );
};

export default Country_data;
