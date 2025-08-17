import React from "react";
import { FaFilter, FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";

function ProductFilter({ product, filterCategory, filterPrice }) {
  let categories = product.reduce((acc, item) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc;
  }, []);

  return (
    <div className="container mb-4">
      <div className="row g-3">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title d-flex align-items-center">
                <FaSortAmountDown className="me-2" /> Price Filter
              </h5>
              <select
                className="form-select"
                onChange={filterPrice}
                aria-label="Price filter"
              >
                <option value="">-- Sort --</option>
                <option value="low">Low To High</option>
                <option value="high">High To Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title d-flex align-items-center">
                <FaFilter className="me-2" /> Category Filter
              </h5>
              <select
                className="form-select"
                onChange={filterCategory}
                aria-label="Category filter"
              >
                <option value="All">-- All Categories --</option>
                {categories.map((item, index) => (
                  <option value={item} key={index}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;
