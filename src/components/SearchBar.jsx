import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ search, handleSearch }) {
  return (
    <div className="search-container">
      <div className="input-group mb-3">
        <span className="input-group-text bg-white border-end-0">
          <FaSearch className="text-muted" />
        </span>
        <input
          type="search"
          className="form-control search-input border-start-0"
          placeholder="Search Products..."
          aria-label="Search products"
          onChange={handleSearch}
          value={search}
        />
      </div>
    </div>
  );
}

export default SearchBar;
