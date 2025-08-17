import React from "react";
import Spinner from "./Spinner";
import { FaStar, FaShoppingCart, FaTag, FaBox } from "react-icons/fa";

function ProductCard({ product, loading }) {
  if (loading) return <Spinner />;

  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {product.map((item, index) => (
          <div key={index} className="col">
            <div className="card h-100 shadow-sm">
              <div
                className="badge bg-dark position-absolute"
                style={{ top: "0.5rem", right: "0.5rem" }}
              >
                <FaStar className="text-warning" /> {item.rating.rate}
              </div>
              <div
                className="d-flex justify-content-center align-items-center p-3"
                style={{ height: "200px" }}
              >
                <img
                  src={item.image}
                  className="card-img-top img-fluid p-2"
                  alt={item.title}
                  style={{
                    maxHeight: "100%",
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-truncate">{item.title}</h5>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <b className="text-danger fs-5">${item.price}</b>
                  <span className="badge bg-info text-dark">
                    <FaTag className="me-1" /> {item.category}
                  </span>
                </div>
                <p
                  className="card-text flex-grow-1"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {item.description}
                </p>
                <button className="btn btn-primary mt-auto">
                  <FaShoppingCart className="me-2" /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-5">
        {product.length === 0 && (
          <div className="alert alert-warning">
            <FaBox className="me-2" /> No Products Found
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
