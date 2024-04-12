import React, { useEffect, useState } from "react";

function Modal({ country, onClose }) {
  const [neighbours, setNeighbours] = useState([]);

  const currencies = Object.keys(country.currencies).map(
    (el) => country.currencies[el].name
  );

  useEffect(() => {
    const fetchNeighbours = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha?codes=${country.borders.join(
            ","
          )}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const data = await response.json();
        const neighbourNames = data.map((neighbour) => neighbour.name.common);
        setNeighbours(neighbourNames);
      } catch (error) {
        console.error("Error fetching neighbours:", error);
      }
    };

    if (country.borders && country.borders.length > 0) {
      fetchNeighbours();
    }
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img
          src={country.flags.png}
          alt={country.flags.alt}
          className="modal-flag"
        />
        <h2 className="modal-country-name">{country.name.common}</h2>
        <p>
          <strong>Capital 🏢: </strong>
          {country.capital}
        </p>
        <p>
          <strong>Region 🌍: </strong>
          {country.region}
        </p>
        <p>
          <strong>Population 🧑‍🤝‍🧑: </strong>
          {(+country.population / 1000000).toFixed(1)} million
        </p>
        <p>
          <strong>Area 🗺️: </strong>
          {country.area}
        </p>
        <p>
          <strong>Currency 💵: </strong>
          {currencies.join(", ")}
        </p>
        <p>
          <strong>Languages 🗣️: </strong>
          {Object.values(country.languages).join(", ")}
        </p>
        <p>
          <strong>Borders 🛂: </strong>
          {neighbours.length > 0
            ? neighbours.join(", ")
            : "No neighboring countries"}
        </p>
      </div>
    </div>
  );
}

export default Modal;
