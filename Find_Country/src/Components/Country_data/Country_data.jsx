import "./country.css";
const Country_data = ({ countries }) => {
  console.log(countries);
  if (!countries || !countries.name || !countries.name.common) {
    return null; // or display an error message
  }
  const { name, flags } = countries;
  return (
    <div className="country">
      <p>Name: {name?.common} </p>
      <img src={flags.png} alt="" />
    </div>
  );
};

export default Country_data;
