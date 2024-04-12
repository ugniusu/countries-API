import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";

function imageForRegion(region) {
  switch (region) {
    case "Antarctic":
      return "https://static.thenounproject.com/png/22640-200.png";
    case "Europe":
      return "https://static.thenounproject.com/png/141682-200.png";
    case "Africa":
      return "https://static.thenounproject.com/png/19031-200.png";
    case "Americas":
      return "https://static.thenounproject.com/png/829023-200.png";
    case "Asia":
      return "https://static.thenounproject.com/png/194338-200.png";
    case "Oceania":
      return "https://static.thenounproject.com/png/301972-200.png";
    default:
      return "";
  }
}

function Region({ region, setFilteredRegion }) {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const uniqueRegions = [...new Set(region.map((item) => item.region))];

  function handleRegion(selectedRegion) {
    setSelectedRegion(selectedRegion);
    if (selectedRegion === "All") {
      setFilteredRegion(region);
    } else {
      const filteredCountries = region.filter(
        (item) => item.region === selectedRegion
      );
      setFilteredRegion(filteredCountries);
    }
  }

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredCountries = region.filter((item) =>
      item.name.common.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRegion(filteredCountries);
  };

  return (
    <div className="region-container">
      <button className="region" onClick={() => handleRegion("All")}>
        All
      </button>
      {uniqueRegions.map((uniqueRegion, index) => (
        <button
          key={index}
          className="region"
          onClick={() => handleRegion(uniqueRegion)}
        >
          {imageForRegion(uniqueRegion) && (
            <img
              src={imageForRegion(uniqueRegion)}
              alt={uniqueRegion}
              className="icon"
            />
          )}
        </button>
      ))}
      <SearchInput onSearch={handleSearch} />
    </div>
  );
}

export default Region;
