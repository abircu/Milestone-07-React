import { useEffect } from "react";
import { useState } from "react";
import "./countries.css";
import Country_data from "../Country_data/Country_data";

const Country = () => {
  const [country, setCountry] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [vistedFlag, setVisitedFlag] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);
  // for showing country name
  const handleVisitedCountry = (tour) => {
    console.log(tour);
    const newVisitedCountry = [...visitedCountries, tour];
    setVisitedCountries(newVisitedCountry);
  };

  // for showing country flag
  const handleVisitedCountryFlag = (flag) => {
    const newVisitedFlag = [...vistedFlag, flag];
    setVisitedFlag(newVisitedFlag);
  };
  return (
    <div>
      <h5>Visited Country:{visitedCountries.length}</h5>
      <ul>
        {visitedCountries.map((country) => (
          <li>{country.name.common}</li>
        ))}
      </ul>
      <div className="image_container">
        {vistedFlag.map((flag) => (
          <img src={flag.flags.png} alt="" />
        ))}
      </div>
      <div className="countries">
        {country.map((countries) => (
          <Country_data
            key={countries.cca3}
            countries={countries}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedCountryFlag={handleVisitedCountryFlag}
          />
        ))}
      </div>
    </div>
  );
};

export default Country;
