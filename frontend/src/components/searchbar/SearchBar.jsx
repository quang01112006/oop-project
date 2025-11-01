import { useState } from "react";
import "./SearchBar.css";

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
      <button onClick={handleSearch}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </div>
  );
}
