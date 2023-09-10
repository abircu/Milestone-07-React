import { useEffect } from "react";
import { useState } from "react";
import Country_data from "../Country_data/Country_data";

const Country = () => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);
  return (
    <div>
      <h1>Country:{country.length}</h1>
      {country.map((countries) => (
        <Country_data key={countries.cca3} countries={countries} />
      ))}
    </div>
  );
};

export default Country;
