import { useState } from "react";

export default function SearchBar({ placeholder, onSearch }) {
  const [value, setValue] = useState("");
  function handleKeyDown(e) {
    if (e.key === "Enter") handleSearch();
  }
  function handleSearch() {
    if (onSearch) onSearch(value);
  }
  return (
    <div className="search-bar">
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
