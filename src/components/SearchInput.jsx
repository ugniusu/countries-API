import React, { useState } from "react";

function SearchInput({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Search countries..."
        value={query}
        onChange={handleChange}
        className="search-country"
      />
      <button type="submit" className="button">
        Search
      </button>
    </form>
  );
}

export default SearchInput;
