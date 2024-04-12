import React, { useEffect, useState } from "react";
import Region from "./Region";
import Card from "./Card";
import Modal from "./Modal";

function Home() {
  const [region, setRegion] = useState([]);
  const [filteredRegion, setFilteredRegion] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setRegion(data);
        setFilteredRegion(data);
      });
  }, []);

  return (
    <div className="home">
      <Region region={region} setFilteredRegion={setFilteredRegion} />
      <Card region={filteredRegion} />
    </div>
  );
}

export default Home;
