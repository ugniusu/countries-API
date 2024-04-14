import React, { useState } from "react";
import Modal from "./Modal";

function Card({ region }) {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const openModal = (country) => {
    setSelectedCountry(country);
  };

  const closeModal = () => {
    setSelectedCountry(null);
  };

  return (
    <div className="card-container">
      {region.map((item, index) => (
        <div key={index} className="card">
          <img src={item.flags.png} alt={item.flags.alt} className="flag" />
          <p>
            <strong>Name:</strong> {item.name.common}
          </p>
          <p>
            <strong>Capital: </strong>
            {item.capital}
          </p>
          <p>
            <strong>Region: </strong>
            {item.region}
          </p>
          <img
            className="coat-of-arms"
            src={item.coatOfArms.png}
            alt={item.name.common}
          />
          <button className="card-button" onClick={() => openModal(item)}>
            More
          </button>
        </div>
      ))}
      {selectedCountry && (
        <Modal country={selectedCountry} onClose={closeModal} />
      )}
    </div>
  );
}

export default Card;
