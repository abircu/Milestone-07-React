import { useEffect, useState } from "react";
import "./App.css";
import Watch from "./components/Watch/Watch";
import Sunglass from "./components/sunglass/sunglass";

function App() {
  const [watches, setWatch] = useState([]);
  useEffect(() => {
    fetch("watches.json")
      .then((res) => res.json())
      .then((data) => setWatch(data));
  }, []);
  // const watches = [
  //   {
  //     name: "Apple Watch Series 7",
  //     price: "$399",
  //     brand: "Apple",
  //     image: "https://example.com/apple_watch_series_7.jpg",
  //   },
  //   {
  //     name: "Samsung Galaxy Watch 4",
  //     price: "$249",
  //     brand: "Samsung",
  //     image: "https://example.com/samsung_galaxy_watch_4.jpg",
  //   },
  //   {
  //     name: "Garmin Forerunner 945",
  //     price: "$599",
  //     brand: "Garmin",
  //     image: "https://example.com/garmin_forerunner_945.jpg",
  //   },
  //   {
  //     name: "Fossil Gen 5",
  //     price: "$249",
  //     brand: "Fossil",
  //     image: "https://example.com/fossil_gen_5.jpg",
  //   },
  //   {
  //     name: "Fitbit Versa 3",
  //     price: "$229",
  //     brand: "Fitbit",
  //     image: "https://example.com/fitbit_versa_3.jpg",
  //   },
  // ];
  return (
    <>
      <Sunglass />
      {watches.map((watch) => (
        <Watch key={watch.id} watch={watch} />
      ))}
    </>
  );
}

export default App;
