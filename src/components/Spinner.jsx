import React from "react";
import { FaSpinner } from "react-icons/fa";

const Spinner = () => {
  return (
    <div className="spinner-overlay">
      <FaSpinner className="spinner-icon" />
      <p className="spinner-text">Loading products...</p>
    </div>
  );
};

export default Spinner;
